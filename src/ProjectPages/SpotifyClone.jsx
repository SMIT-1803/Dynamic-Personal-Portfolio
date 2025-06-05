import React from "react";
import { useEffect } from "react";
import ProjectTemplate from "./ProjectTemplate";
function SpotifyClone() {
  useEffect(() => {
    document.title = "Spotify Clone | HTML, CSS, Javascript";
  }, []);
  return (
    <>
      <ProjectTemplate
        ProjectTitle="Spotify Clone"
        Year={2024}
        TechStack={["HTML", "CSS", "Javascript"]}
        description="This Spotify-inspired music player is a front-end project built using React, Tailwind CSS, 
        and Framer Motion to replicate the look and feel of the popular streaming platform. It features reusable 
        components, scroll animations, and dynamic hover effects for playlists and songs. Although it doesn't stream music
        , the project focuses on UI/UX fidelity and demonstrates strong frontend skills. You can check out the live demo or 
        browse the codebase via the GitHub repo linked above."
        images={["SpotifyMainPage"]}
        githubLink="https://github.com/SMIT-1803/spotifyClone"
        webLink="https://spotify-clone-xi-hazel.vercel.app/"
      />
    </>
  );
}

export default SpotifyClone;
