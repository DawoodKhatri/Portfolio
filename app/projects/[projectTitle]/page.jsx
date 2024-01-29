import ProjectImageCarousel from "@/components/projects/imageCarousel";
import ProjectDescription from "@/components/projects/projectDescription";
import ProjectDetails from "@/components/projects/projectDetails";
import { PROJECTS } from "@/constants/projects";
import { redirect } from "next/navigation";
import React from "react";

export const generateMetadata = ({ params: { projectTitle } }) => {
  const project = PROJECTS.find(
    ({ title }) => title === decodeURI(projectTitle)
  );

  if (!project)
    return {
      title: "Error 404",
      description: "Project not found",
    };

  return {
    title: project.title,
    description: project.description,
  };
};

const ProjectDetailsPage = ({ params: { projectTitle } }) => {
  const project = PROJECTS.find(
    ({ title }) => title === decodeURI(projectTitle)
  );

  if (!project) return redirect("/not-found");

  const { imagesPath, imagesCount, title, description, skills, details, demo } =
    project;
  return (
    <div className="min-h-[calc(100vh-102px)] h-full flex flex-col md:flex-row justify-center items-center gap-8 p-8 md:p-16">
      <div className="flex-[1]">
        <div className="animate__animated animate__fadeInLeft">
          <ProjectDetails {...{ title, description, skills, demo }} />
        </div>

        <div className="hidden md:block mt-5 animate__animated animate__fadeInUp">
          <ProjectDescription descriptions={details} />
        </div>
      </div>
      <div className="flex-[1] animate__animated animate__zoomIn">
        <ProjectImageCarousel path={imagesPath} count={imagesCount} />
      </div>
      <div className="md:hidden flex-[1] animate__animated animate__fadeInUp">
        <ProjectDescription descriptions={details} />
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
