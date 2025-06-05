import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { rightIn } from "../FramerMotion/FramerMotion";

import HamburgerPanelProject from "./HamburgerPanelProject";

function HamburgerProject() {
  const [panel, setPanel] = useState(false);
  function handleClick() {
    setPanel(true);
  }
  function panelClose() {
    setPanel(false);
  }
  return (
    <>
      <motion.div
        className="hamburger w-full flex justify-end items-center"
        variants={rightIn}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
      >
        {!panel && (
          <img
            onClick={handleClick}
            className="h-10 cursor-pointer absolute top-22 right-10 z-10 lg:fixed"
            src="/assets/OtherSVGs/hamburger.svg"
            alt="Hamburger"
          />
        )}
      </motion.div>
      <HamburgerPanelProject isOpen={panel} onClick={panelClose} />
    </>
  );
}

export default HamburgerProject;
