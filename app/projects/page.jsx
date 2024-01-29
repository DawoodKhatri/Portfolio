import ProjectsHeading from "@/components/projects/heading";
import ProjectCard from "@/components/projects/projectCard";
import { PROJECTS } from "@/constants/projects";
import React from "react";

export const metadata = {
  title: "My Projects",
  description: "Discover My Creative Work.",
};

const ProjectsPage = () => {
  return (
    <div className="min-h-[calc(100vh-102px)] flex flex-col justify-center items-center gap-8 py-8 md:py-16">
      <ProjectsHeading />
      <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 lg:gap-16">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
