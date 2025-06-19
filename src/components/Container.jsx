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
    <>
      <Hamburger />
      <div className="container scroll-smooth">
        <div id="home">
          <GithubHeader />
          <div className="grid mt-35 mb-32 md:mt-35 ">
            <div className="grid grid-cols-[0.25fr_1.5fr]">
              <div></div>
              <div>
                <MainIntro />
              </div>
            </div>
          </div>
        </div>
        <DetailIntro />
        <TechStack />
        <ProjectSection />
        <Footer />
      </div>
    </>
  );
}

export default Container;
