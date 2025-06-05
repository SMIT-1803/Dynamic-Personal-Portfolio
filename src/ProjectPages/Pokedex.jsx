import React from "react";
import { useEffect } from "react";
import ProjectTemplate from "./ProjectTemplate";
function Pokedex() {
  useEffect(() => {
    document.title = "Pokedex | React, Tailwind CSS";
  }, []);
  return (
    <>
      <ProjectTemplate
        ProjectTitle="Pokedex"
        Year={2025}
        TechStack={["React", "Tailwind CSS"]}
        description="This Pokédex web app was built to provide a fast, searchable, and interactive way to explore 
        Pokémon data. Developed with React and styled using Tailwind CSS, it features smooth animations, responsive 
        design, and real-time filtering with pagination. Users can browse, search, and click on individual Pokémon 
        cards to view detailed stats and images—all fetched dynamically from a public API. Feel free to explore the 
        live demo or review the source code in the GitHub repo above."
        images={["PokedexMainPage", "PokedexAdvanceSearch", "PokemonMoreInfo"]}
        githubLink="https://github.com/SMIT-1803/Pokedex"
        webLink="https://smitspokedex.vercel.app/"
      />
    </>
  );
}

export default Pokedex;
