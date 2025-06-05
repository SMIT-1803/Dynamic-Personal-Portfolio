import React from "react";

function HamburgerPanel({ isOpen, onClick }) {
  function handleClick() {
    onClick(false);
  }

  return (
    <div
      className={`gC transition-all duration-500 ease-in-out fixed top-0 right-0 min-h-screen min-w-[80%] sm:min-w-[65%] md:min-w-[55%] lg:min-w-[50%] xl:min-w-[35%] bg-[#303030] p-4 grid z-30 
        ${
        isOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-end mt-4">
        <img
          onClick={handleClick}
          className="h-10 cursor-pointer"
          src="/assets/OtherSVGs/cross.svg"
          alt="Cross"
        />
      </div>

      <div className="menus lg:grid lg:grid-cols-2 lg:justify-center">
        <div className="navigation m-4">
          <p className="text-xl anton md:text-2xl">Menu</p>
          <ul className="mt-3">
            <a href="#home">
              <li
                onClick={handleClick}
                className="text-xl list-disc list-inside marker:text-orange-400 marker:text-4xl md:text-2xl"
              >
                <span>Home</span>
              </li>
            </a>
            <a href="#aboutMe">
              <li
                onClick={handleClick}
                className="text-xl list-disc list-inside marker:text-blue-400 marker:text-4xl md:text-2xl"
              >
                <span>About Me</span>
              </li>
            </a>
            <a href="#projects">
              <li
                onClick={handleClick}
                className="text-xl list-disc list-inside marker:text-green-400 marker:text-4xl md:text-2xl"
              >
                <span>Projects</span>
              </li>
            </a>
          </ul>
        </div>

        <div className="social m-4">
          <p className="text-xl anton md:text-2xl">Social</p>
          <ul className="mt-3">
            <li className="text-xl list-disc list-inside marker:text-orange-400 marker:text-4xl md:text-2xl">
              <a href="https://www.linkedin.com/in/smit-sanghvi-297824256/" target="blank">Linkedin</a>
            </li>
            <li className="text-xl list-disc list-inside marker:text-blue-400 marker:text-4xl md:text-2xl">
              <a href="https://github.com/SMIT-1803" target="blank">Github</a>
            </li>
            <li className="text-xl list-disc list-inside marker:text-green-400 marker:text-4xl md:text-2xl">
              <a href="https://www.instagram.com/smitsanghvi18/" target="blank">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="contact m-4 lg:grid lg:grid-cols-2 lg:justify-center lg:items-end">
        <div className="flex flex-col gap-3">
          <p className="text-xl">Get in touch</p>
          <a className="text-lg" href="mailto:sss101@sfu.ca">
            sss101@sfu.ca
          </a>
        </div>
      </div>
    </div>
  );
}

export default HamburgerPanel;
