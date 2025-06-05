import React from 'react'
import ProjectTemplate from "./ProjectTemplate";
function Portfolio() {
  return (
    <>
      <ProjectTemplate
        ProjectTitle="Personal Portfolio"
        Year={2025}
        TechStack={["React", "Tailwind CSS"]}
        description="Developed a personal portfolio website using HTML5 and CSS3 to showcase my projects, experiences, 
        and background. Emphasized modular design and semantic HTML to ensure maintainability and accessibility. Hosted 
        the website on GitHub Pages for seamless deployment and version control."
        images={["PokedexMainPage","PokedexAdvanceSearch","PokemonMoreInfo"]}
        githubLink=""
        webLink=""
      />
    </>
  )
}

export default Portfolio
