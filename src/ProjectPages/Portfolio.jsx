import React from "react";
import { useEffect } from "react";
import ProjectTemplate from "./ProjectTemplate";
function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio | React, React Router, Tailwind CSS, Framer Motion";
  }, []);
  return (
    <>
      <ProjectTemplate
        ProjectTitle="Portfolio"
        Year={2025}
        TechStack={["React", "React Router", "Tailwind CSS", "Framer Motion"]}
        description="I built this dynamic personal portfolio as a modern, interactive space to present my work, skills,
         and experience in a clean and engaging way. Using React, React Router, Tailwind CSS, and Framer Motion, I
         crafted a smooth-scrolling, animation-rich website that reflects both technical ability and design intuition. The
         site features modular project components, an animated hamburger menu, and responsive layouts—optimized for performance
         across all devices. Feel free to explore the live site or check out the GitHub repo via the icons above for the source
         code and full implementation details."
        images={["PortfolioHome"]}
        githubLink="https://github.com/SMIT-1803/Dynamic-Personal-Portfolio"
        webLink="https://dynamic-personal-portfolio.vercel.app/"
      />
    </>
  );
}

export default Portfolio;
