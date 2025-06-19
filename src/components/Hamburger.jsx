import React, { useState } from "react";
import { motion } from "framer-motion";
import { rightIn } from "../FramerMotion/FramerMotion";
import HamburgerPanel from "./HamburgerPanel";

function Hamburger() {
  const [hamburger, setHamburger] = useState(false);

  function handleClick() {
    setHamburger(true);
  }

  function panelClose() {
    setHamburger(false);
  }

  return (
    <>
      <motion.div
        className="hamburger w-full flex justify-end items-center absolute top-22 right-10 z-10"
        variants={rightIn}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
      >
        {!hamburger && (
          <img
            onClick={handleClick}
            className="h-10 cursor-pointer md:visible lg:fixed"
            src="/assets/OtherSVGs/hamburger.svg"
            alt="Hamburger"
          />
        )}
      </motion.div>

      <HamburgerPanel isOpen={hamburger} onClick={panelClose} />
    </>
  );
}

export default Hamburger;
