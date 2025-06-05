import React from "react";
import ProjectComp from "./ProjectComp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/FramerMotion";
import {rotation} from "../FramerMotion/FramerMotion"

function ProjectSection() {
  return (
    <div id="projects" className="grid grid-cols-[0.4fr_2.2fr_0.4fr] min-h-screen gC">
      <div></div>
      <div className="mt-20">
        <motion.div
          className="text-xl flex items-center-safe gap-4"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.img className="h-7" src="src/assets/OtherSVGs/star.svg" alt="Star SVG" 
          variants={rotation}
          whileInView="animate"
          />
          <p>SELECTED PROJECTS</p>
        </motion.div>
        <div className="mt-8">
          <Link to="/blog">
            <ProjectComp
              ProjectTitle="BLOG"
              TechStack={[
                "React",
                "Redux",
                "Appwrite",
                "React Hook Form",
                "TinyMCE",
                "Tailwind CSS",
              ]}
            />
          </Link>
          <Link to="/pokedex">
            <ProjectComp
              ProjectTitle="Pokédex"
              TechStack={["React", "Tailwind CSS"]}
            />
          </Link>
          <Link to="/portfolio">
            <ProjectComp
              ProjectTitle="Personal Portfolio"
              TechStack={["React", "Tailwind CSS", "Frammer Motion"]}
            />
          </Link>
          <Link to="/spotifyClone">
            <ProjectComp
              ProjectTitle="Spotify Clone"
              TechStack={["HTML", "CSS", "Javascript"]}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
