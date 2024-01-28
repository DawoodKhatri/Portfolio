import ProjectsHeading from "@/components/projects/heading";
import ProjectCard from "@/components/projects/projectCard";
import { PROJECTS } from "@/constants/projects";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-10 py-10 md:py-20">
      <ProjectsHeading />
      <div className="px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 lg:gap-20">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
