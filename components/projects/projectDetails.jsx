import Link from "next/link";
import React from "react";
import SkillList from "../common/skillList";

const ProjectDetails = ({ title, description, skills, demo }) => {
  return (
    <>
      <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl text-primary">
        {title}
      </h1>
      <p className="text-sm lg:text-base xl:text-lg my-2">{description}</p>
      <SkillList skills={skills} />

      {demo && (
        <Link href={demo} target="_blank">
          <button className="project-button mt-2">Live Demo</button>
        </Link>
      )}
    </>
  );
};

export default ProjectDetails;
