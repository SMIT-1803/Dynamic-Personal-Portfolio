import React from "react";
import MainIntro from "./MainIntro";
import DetailIntro from "./DetailIntro";
import GithubHeader from "./GithubHeader";
import TechStack from "./TechStack";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";
import ScrollWrapper from "../ScrollSpeed/ScrollWrapper";
import Hamburger from "./Hamburger";
function Container() {
  return (
    <>
      <Hamburger />
      <ScrollWrapper>
        <div className="container">
          <GithubHeader />
          <div className="grid mt-35 mb-32 md:mt-35 ">
            <div className="grid grid-cols-[0.25fr_1.5fr]">
              <div></div>

              <div>
                <MainIntro />
              </div>
            </div>
          </div>
          <DetailIntro />
          <TechStack />
          <ProjectSection />
          <Footer />
        </div>
      </ScrollWrapper>
    </>
  );
}

export default Container;
