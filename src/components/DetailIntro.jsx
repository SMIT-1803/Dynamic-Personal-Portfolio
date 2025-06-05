import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/FramerMotion";

function DetailIntro() {
  return (
    <div id="aboutMe" className="grid grid-cols-[0.4fr_2.2fr_0.4fr] min-h-screen gC">
      <div></div>
      <div className="mt-12">
        <motion.p
          className="text-xl text-left md:text-3xl md:mt-32 xl:mt-25"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Code is not just what I write — it's how I think, solve, and create.
          It's the language I use to turn ideas into impact, challenges into
          solutions, and imagination into reality. This is more than a portfolio
          — it's my digital story in motion.
        </motion.p>
        <motion.div
          className="mt-20"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-xl">ME</p>
          <hr className="border-t border-gray-300 opacity-40 my-3" />
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1.65fr_0.15fr] mt-8">
            <div>
              <p className="text-5xl">Hi, I'm Smit.</p>
            </div>
            <div className="mt-3">
              <p className="text-lg text-left">
                I'm a software developer in the making who genuinely enjoys
                building things that work and actually help people.
                <br />
                <br />
                I've explored web development and machine learning, and I've
                picked up a solid understanding of how the web fits
                together—from front-end design to back-end logic. I'm always
                looking to level up, take on new challenges, and work on
                projects that feel meaningful. I love teaming up with other
                builders and learning from the community along the way.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DetailIntro;
