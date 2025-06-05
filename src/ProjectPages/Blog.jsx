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
        description="Developed a full-stack blog application using React.js and Appwrite. Integrated secure authentication, 
        role-based access control, and CRUD operations on posts and media using Appwrite's SDKs. Used TinyMCE for rich text editing 
        and React Hook Form for validation. Centralized state with Redux Toolkit and optimized API calls with RTK Query. Designed a 
        mobile-responsive UI with Tailwind CSS and ensured authors could manage only their own content."

        images={["BlogSignUp"]}
        githubLink="https://github.com/SMIT-1803/Blog"
        webLink="https://smitsblog.vercel.app/"
      />
    </>
  );
}

export default Blog;
