import React from "react";
import Technologies from "./Technologies";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/FramerMotion";
import {rotation} from "../FramerMotion/FramerMotion"

function TechStack() {
  return (
    <div className="grid grid-cols-[0.4fr_2.2fr_0.4fr] gC">
      <div></div>
      <div className="mt-20 md:mt-10">
        <motion.div
          className="text-xl flex items-center-safe gap-4"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.img
            className="h-7"
            src="/assets/OtherSVGs/star.svg"
            alt=""
            variants={rotation}
            whileInView="animate"
          />
          MY STACK
        </motion.div>
        <Technologies
          name="FRONTEND"
          languages={["React", "Redux", "Tailwind", "Framermotion", "HTML", "CSS"]}
        />
        <Technologies
          name="BACKEND"
          languages={["Nodejs", "Express", "Appwrite"]}
        />
        <Technologies name="DATABASE" languages={["MongoDB", "Appwrite"]} />
        <Technologies
          name="LANGUAGES"
          languages={["Javascript", "TypeScript", "Python", "CPP"]}
        />
        <Technologies
          name="TOOLS"
          languages={["Git", "Docker", "AWS", "Postman", "Vercel", "Figma"]}
        />
      </div>
    </div>
  );
}

export default TechStack;
