import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/FramerMotion";

function Footer() {
  return (
    <motion.div className="gC flex flex-col w-full items-center justify-center mt-20 mb-5 lg:mt-35"
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <p className="text-lg">Let's connect</p>
      <p className="text-3xl mt-4 lg:text-4xl lg:mt-6"><a className="anton" href="mailto:sss101@sfu.ca">sss101@sfu.ca</a></p>
      <div className="mt-4 text-center lg:mt-6">
        <p className="text-sm">Designed & built by Smit Sanghvi</p>
        <p className="text-sm">&copy; 2025 All rights reserved.</p>
      </div>
    </motion.div>
  );
}

export default Footer;
