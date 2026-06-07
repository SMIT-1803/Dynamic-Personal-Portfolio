import React from "react";
import MainIntro from "./MainIntro";
import DetailIntro from "./DetailIntro";
import GithubHeader from "./GithubHeader";
import TechStack from "./TechStack";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";
import Hamburger from "./Hamburger";

function Container() {
  return (
    <div className="mainContainer w-full m:0 p:0">
      <div id="home" className="w-full scroll-smooth">
        <Hamburger />
        <GithubHeader />
        <div className="container w-full scroll-smooth">
          <div className="grid grid-cols-[0.4fr_2.2fr_0.4fr] mt-35 mb-32 md:mt-35">
            <div></div>
            <div>
              <MainIntro />
            </div>
            <div></div>
          </div>
        </div>

        <DetailIntro />
        <TechStack />
        <ProjectSection />
        <Footer />
      </div>
    </div>
  );
}

export default Container;
