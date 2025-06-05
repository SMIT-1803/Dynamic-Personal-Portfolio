import React from "react";
import { motion } from "framer-motion";
import {
  leftIn,
  rightIn,
  hoverEffect,
  fadeIn,
} from "../FramerMotion/FramerMotion";

function MainIntro() {
  return (
    <div id="home" className="intro grid grid-cols-1">
      <div>
        <motion.h1
          className="anton text-orange-400 text-6xl sm:text-7xl md:text-9xl "
          variants={leftIn}
          initial="initial"
          viewport={{ once: true }}
          whileInView="animate"
        >
          SMIT
        </motion.h1>
        <motion.h2
          className="anton text-6xl sm:text-7xl md:text-9xl gC"
          variants={rightIn}
          initial="initial"
          viewport={{ once: true }}
          whileInView="animate"
        >
          SANGHVI
        </motion.h2>
        <motion.p
          className="text-lg text-justify mt-5 max-w-[80%] md:w-xl gC"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Software developer who enjoys solving real-world problems and is eager
          to innovate and create impactful solutions.
        </motion.p>
        <motion.div
          className="md:mt-5"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <a href="/assets/Resume.pdf">
            <motion.button
              className="anton px-4 py-3 bg-orange-400 text-sm mt-5 cursor-pointer md:text-lg md:px-6"
              initial="initial"
              variants={hoverEffect}
              whileHover="animate"
            >
              Resume
            </motion.button>
          </a>
        </motion.div>
      </div>
      <div className="image"></div>
    </div>
  );
}

export default MainIntro;
