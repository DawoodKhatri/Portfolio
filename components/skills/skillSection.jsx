import React from "react";
import SkillCard from "./skillCard";

const SkillSection = ({ title, skills }) => {
  return (
    <div className="flex flex-col gap-5 animate__animated animate__zoomIn">
      <p className="text-center font-semibold text-xl lg:text-2xl xl:text-3xl">
        <span className="text-primary">{title}</span> Technologies
      </p>

      <div className="flex justify-center items-center gap-5 flex-wrap max-w-lg mx-auto">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
