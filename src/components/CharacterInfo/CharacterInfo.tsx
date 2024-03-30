"use client";

import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, fetchCharacterById } from "@/base/store";

type Props = {
  id: string;
};

import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  ISelectedCharacter,
  IStarship,
  generateRandomNumber,
  getIdFromUrl,
} from "@/shared";

const CharacterInfo: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const { selectedCharacter, isLoading } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    dispatch(fetchCharacterById(id) as any);
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (selectedCharacter) {
      const filmsNodes = selectedCharacter.info.films.map(
        (filmId: number, index: number) => {
          const currentFilm = selectedCharacter.films.find(
            (film) => film.episode_id === filmId
          );
          return {
            id: `film-${filmId}`,
            data: {
              label: `${currentFilm?.episode_id} ${currentFilm?.title}`,
            },
            position: { x: index * 200, y: 100 },
          };
        }
      );

      const starshipsNodes = selectedCharacter.info.starships.map(
        (starshipId: number, index: number) => {
          const currentStarship = selectedCharacter.starships.find(
            (starship) => {
              return Number(getIdFromUrl(starship?.url || "")) === starshipId;
            }
          );
          return {
            id: `starship-${starshipId}`,
            data: {
              label: currentStarship?.name,
            },
            position: { x: index * 200, y: 300 },
          };
        }
      );

      setNodes([
        {
          id: "character",
          data: { label: selectedCharacter.info.name },
          position: { x: 0, y: 0 },
        },
        ...filmsNodes,
        ...starshipsNodes,
      ]);

      const filmEdges = selectedCharacter.info.films.map((filmId: number) => ({
        id: `edge-film-${filmId}`,
        source: `character`,
        target: `film-${filmId}`,
      }));

      const starshipEdges = selectedCharacter.starships.reduce(
        (res: Edge<any>[], starship: IStarship) => {
          const starshipId = getIdFromUrl(starship.url);
          const edges = starship.films.map((filmId) => ({
            id: `edge-starship-${starshipId}-${generateRandomNumber(1, 1000)}`,
            source: `film-${filmId}`,
            target: `starship-${starshipId}`,
          }));
          return [...res, ...edges];
        },
        []
      );

      setEdges([...filmEdges, ...starshipEdges]);
    }
  }, [selectedCharacter]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}

      {!isLoading && selectedCharacter ? (
        <div style={{ width: "100%", height: "80vh" }} className="bg-gray-200">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
          >
            <Controls />
            <MiniMap />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
      ) : null}
    </div>
  );
};

export default CharacterInfo;
