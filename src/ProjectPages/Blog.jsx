import React from "react";
import { useEffect } from "react";
import ProjectTemplate from "./ProjectTemplate";

function Blog() {
  useEffect(() => {
    document.title = "Blog | React, Redux, Tailwind CSS, React Hook Form, TinyMCE"
  }, [])
  
  return (
    <>
      
      <ProjectTemplate
        ProjectTitle="Blog"
        Year={2025}
        TechStack={[
          "React",
          "Redux",
          "Tailwind CSS",
          "React Hook Form",
          "TinyMCE",
        ]}
        description="I built this full-stack blogging platform to give users a seamless experience for writing, editing, 
        and publishing posts. Using React, Redux Toolkit, Appwrite, React Hook Form, TinyMCE, and Tailwind CSS, I created 
        a clean editor interface and a secure authentication flow with real-time database integration. Users can draft and 
        manage posts with rich text formatting, while the admin panel ensures only authorized access to content. Explore the 
        live version or check out the GitHub repo above for the complete codebase and documentation."
        images={["BlogSignUp"]}
        githubLink="https://github.com/SMIT-1803/Blog"
        webLink="https://smitsblog.vercel.app/"
      />
    </>
  );
}

export default Blog;
