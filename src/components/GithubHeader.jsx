import React from "react";

function GithubHeader() {
  return (
    <div className="relative bg-black text-white w-full flex justify-center items-center py-4 text-sm md:py-3 overflow-hidden">
      <a 
        href="https://github.com/SMIT-1803" 
        className="hover:text-orange-400 transition-all cursor-pointer"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Mr Github's address is here — click to visit
      </a>
    </div>
  );
}

export default GithubHeader;
