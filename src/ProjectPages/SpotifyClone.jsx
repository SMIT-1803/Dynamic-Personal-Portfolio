import React from 'react'
import { useEffect } from "react";
import ProjectTemplate from "./ProjectTemplate";
function SpotifyClone() {
  useEffect(() => {
      document.title = "Spotify Clone | HTML, CSS, Javascript"
    }, [])
  return (
    <>
      <ProjectTemplate
        ProjectTitle="Spotify Clone"
        Year={2024}
        TechStack={["HTML", "CSS", "Javascript"]}
        description="Developed a responsive web-based music player inspired by Spotify, utilizing HTML, CSS, and JavaScript. 
        Implemented core features such as audio playback controls and a user-friendly interface. The project showcases proficiency 
        in front-end development and UI/UX design principles."
        images={["SpotifyMainPage"]}
        githubLink="https://github.com/SMIT-1803/spotifyClone"
        webLink="https://spotify-clone-xi-hazel.vercel.app/"
      />
    </>
  )
}

export default SpotifyClone
