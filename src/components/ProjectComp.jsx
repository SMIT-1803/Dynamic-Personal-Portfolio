import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/FramerMotion";

function ProjectComp({ ProjectTitle, TechStack }) {
  return (
    <motion.div
      className="mt-10"
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover="hover"
    >
      <div>
        <div className="flex gap-5">
          <motion.p
            className="anton text-4xl md:text-6xl"
            variants={{
              hover: {
                color: "#fb923c",
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              },
            }}
          >
            {ProjectTitle}
          </motion.p>
          <motion.img
            className="h-8"
            src="src/assets/OtherSVGs/redirect.svg"
            alt="Redirect SVG"
            variants={{
              hover: {
                  x: [0, 5, 0],
                  y: [0, -5, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 0.6,
                    ease: "easeInOut",
                  
                },
              },
            }}
          />
        </div>

        <div className="mb-2">
          {TechStack.map((tech, index) => (
            <span key={index} className="text-xs md:text-sm">
              {tech}
              {index !== TechStack.length - 1 && " | "}
            </span>
          ))}
        </div>
        <hr className="border-t border-gray-300 opacity-40 my-6" />
      </div>
    </motion.div>
  );
}

export default ProjectComp;
