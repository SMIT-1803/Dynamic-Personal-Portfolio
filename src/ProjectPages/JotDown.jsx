import React from "react";
import { useEffect } from "react";
import ProjectTemplate from "./ProjectTemplate";

function JotDown() {
  useEffect(() => {
    document.title = "JotDown REST API | Node.js, Express.js, MongoDB, JWT";
  }, []);

  return (
    <>
      <ProjectTemplate
        ProjectTitle="JotDown REST API"
        Year={2025}
        TechStack={["Node.js", "Express.js", "MongoDB", "JWT", "Postman"]}
        description="JotDown is the REST API backend powering a note-taking application. I designed RESTful endpoints
        for full CRUD operations on notes, backed by structured MongoDB schemas and centralized input validation that
        keeps invalid data from ever reaching the database. Authentication is handled with JWT tokens stored in HTTP
        cookies, with middleware-enforced route protection so sessions persist across refreshes and browser restarts
        while protected routes stay locked down. Every endpoint returns a consistent, unified error format. I backed
        the core business logic with unit tests and ran end-to-end checks on each request flow and failure mode in
        Postman—expired tokens, unauthorized access, missing fields—to confirm the API behaves correctly under both
        valid and invalid input. Check out the GitHub repo above for the full codebase and documentation."
        githubLink="https://github.com/SMIT-1803/JotDown-REST-API"
      />
    </>
  );
}

export default JotDown;
