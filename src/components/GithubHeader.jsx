import React from "react";
import Hamburger from "./Hamburger";
function GithubHeader() {
  return (
    <>
      <div
        className="relative bg-black text-white flex w-full justify-center items-center 
      p-4 text-sm cursor-pointer hover:text-orange-400 transition-all md:p-3"
      >
        <a href="https://github.com/SMIT-1803" className="gC" target="blank">
          Mr Github's address is here --- click to visit
        </a>
      </div>
      
    </>
  );
}

export default GithubHeader;
