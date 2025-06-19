import React from "react";
import GithubHeader from "../components/GithubHeader";
import HamburgerProject from "../components/HamburgerProject";
import { fadeIn, redirectArrow } from "../FramerMotion/FramerMotion";
import { motion } from "framer-motion";

function ProjectTemplate({
  ProjectTitle,
  Year,
  TechStack,
  description,
  images,
  githubLink,
  webLink,
}) {
  return (
    <>
      <HamburgerProject />
      {/* <ScrollWrapper> */}
        <GithubHeader />
        <div className=" mb-10 mt-20 pl-5 pr-5 lg:grid lg:grid-cols-[0.5fr_2fr_0.5fr] lg:mt-30 gC">
          <div></div>
          <div>
            <motion.div
              className="flex items-center mb-5 gap-5"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
            >
              <p className="anton text-4xl md:text-6xl">{ProjectTitle}</p>
              <a href={githubLink} target="blank">
                <motion.img
                  className="h-8 cursor-pointer"
                  src="/assets/OtherSVGs/github.svg"
                  alt="Github SVG"
                  variants={{
                    animate: {
                      x: [0, 5, 0],
                      y: [0, -5, 0],
                      transition: {
                        repeat: Infinity,
                        duration: 0.6,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  whileHover="animate"
                />
              </a>
              <a href={webLink} target="blank">
                <motion.img
                  className="h-8 cursor-pointer"
                  src="/assets/OtherSVGs/redirect.svg"
                  alt="Redirect SVG"
                  variants={{
                    animate: {
                      x: [0, 5, 0],
                      y: [0, -5, 0],
                      transition: {
                        repeat: Infinity,
                        duration: 0.6,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  whileHover="animate"
                />
              </a>
            </motion.div>
            <motion.div
              className="mb-5"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={2}
            >
              <p className="anton mb-2">Year</p>
              <p className="text-lg">{Year}</p>
            </motion.div>
            <motion.div
              className="mb-5"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={3}
            >
              <p className="anton text-lg mb-2">Tech & Technique</p>
              {TechStack.map((tech, index) => (
                <span className="text-lg" key={index}>
                  {tech}
                  {index !== TechStack.length - 1 && ", "}
                </span>
              ))}
            </motion.div>
            <motion.div
              className="mb-10"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={4}
            >
              <p className="anton mb-2">Description</p>
              <p className="text-lg">{description}</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={5}
            >
              {images.map((image, index) => (
                <img
                  className="mt-4 rounded-xl shadow-gray-300"
                  key={index}
                  src={`/assets/ProjectImages/${image}.PNG`}
                  alt={`${image}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      {/* </ScrollWrapper> */}
    </>
  );
}

export default ProjectTemplate;
