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
        description="This Spotify-inspired music player is a front-end project built with vanilla HTML, CSS, and
        JavaScript to replicate the look and feel of the popular streaming platform. It features a faithful UI layout,
        interactive playback controls, and hover effects for playlists and songs. Although it doesn't stream real music,
        the project focuses on UI/UX fidelity and demonstrates strong fundamentals in DOM manipulation and responsive
        styling without any frameworks. You can check out the live demo or browse the codebase via the GitHub repo linked above."
        images={["SpotifyMainPage"]}
        githubLink="https://github.com/SMIT-1803/spotifyClone"
        webLink="https://spotify-clone-xi-hazel.vercel.app/"
      />
    </>
  );
}

export default SpotifyClone;
