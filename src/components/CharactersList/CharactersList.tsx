"use client";

import React, { FC, useEffect } from "react";
import { CharacterCard } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { RootState, fetchCharacters } from "@/base/store";
import { Pagination, getIdFromUrl } from "@/shared";

const CharactersList: FC = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    dispatch(fetchCharacters("") as any);
  }, []);

  return (
    <div>
      {isLoading && <div data-testid="loader">Loading...</div>}

      {!isLoading && data?.results?.length ? (
        <div data-testid="content">
          <ul className="grid grid-cols-1 gap-4">
            {data.results.map((character) => (
              <li
                key={getIdFromUrl(character?.url || "")}
                className="border border-gray-200 hover:border-gray-400 transition ease-linear p-0"
              >
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
          <Pagination data-testid="pagination" />
        </div>
      ) : null}
    </div>
  );
};

export default CharactersList;
