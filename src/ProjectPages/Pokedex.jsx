import React from "react";
import { useEffect } from "react";
import ProjectTemplate from "./ProjectTemplate";
function Pokedex() {
  useEffect(() => {
    document.title = "Pokedex | React, Tailwind CSS"
  }, [])
  return (
    <>
      <ProjectTemplate
        ProjectTitle="Pokedex"
        Year={2025}
        TechStack={["React", "Tailwind CSS"]}
        description="A responsive and interactive Pokedex web application that fetches and displays real-time 
        Pokémon data using external APIs. Built with modern JavaScript and Vite for a fast, optimized development 
        and deployment workflow.
        Key Features:
        Search and browse Pokémon with dynamic data fetching
        Clean, responsive UI for mobile and desktop users
        Component-based architecture using HTML, CSS, and JavaScript
        Deployed using Vercel."
        images={["PokedexMainPage","PokedexAdvanceSearch","PokemonMoreInfo"]}
        githubLink="https://github.com/SMIT-1803/Pokedex"
        webLink="https://smitspokedex.vercel.app/"
      />
    </>
  );
}

export default Pokedex;
