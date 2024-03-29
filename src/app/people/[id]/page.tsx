import React, { FC } from "react";
import { CharacterInfo } from "@/components";

type Props = {
  params: { id: string };
};

const CharacterItem: FC<Props> = async ({ params }) => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-starwars font-medium text-center mb-6 tracking-wide">
        Character Details
      </h2>
      <CharacterInfo id={params.id} />
    </div>
  );
};

export default CharacterItem;
