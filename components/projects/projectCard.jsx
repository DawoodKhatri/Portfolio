import React from "react";
import SkillList from "../common/skillList";
import Link from "next/link";

const ProjectCard = ({
  thumbnail,
  imagesPath,
  title,
  description,
  skills,
  demo,
}) => {
  return (
    <Link href={`/projects/${encodeURI(title)}`}>
      <div className="glass shadow shadow-primary overflow-hidden hover:scale-[102%] transition-all ease-in-out duration-300 animate__animated animate__fadeInUp">
        <img
          className="rounded-lg"
          src={`/projects/${imagesPath}/${thumbnail}.png`}
        />

        <div className="px-3 py-5">
          <h3 className="font-semibold text-xl text-primary">{title}</h3>
          <p className="text-ellipsis line-clamp-2" title={description}>
            {description}
          </p>
          {skills && <SkillList skills={skills} />}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
