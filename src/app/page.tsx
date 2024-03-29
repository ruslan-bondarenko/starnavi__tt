import React from "react";
import { CharactersList } from "@/components";

const Home = async () => {
  return (
    <main className="p-4 pt-10 md:p-10">
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-xs md:text-m font-medium uppercase">
          WELCOME TO MY TEST TASK
        </h3>
        <h1 className="font-starwars text-2xl md:text-5xl tracking-wide">
          STARWARS CHARACTERS
        </h1>
      </div>

      <CharactersList />
    </main>
  );
};

export default Home;
