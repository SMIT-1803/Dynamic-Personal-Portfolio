import React from "react";
import {motion } from "framer-motion";
import {fadeIn} from "../FramerMotion/FramerMotion"

const fadeInAnimationVariantsForLang = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function Technologies({ name, languages }) {
  return (
    <div className="grid md:grid-cols-[1.25fr_1.25fr_0.5fr] ">
      <motion.div className="mt-12"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <p className="text-4xl anton">{name}</p>
      </motion.div>
      <div className="flex items-center flex-wrap gap-5 mt-6">
        {languages.map((language, index) => (
          <motion.div
            key={language}
            className="flex justify-center items-center gap-3"
            variants={fadeInAnimationVariantsForLang}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <img
              className="h-12"
              src={`/assets/LanguagesImages/${language}.svg`}
              alt={`${language} Icon`}
            />
            {name == "DATABASE" ? (
              <p className="text-xl lg:text-2xl">{language} DB</p>
            ) : (
              <p className="text-xl md:text-2xl">{language}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
