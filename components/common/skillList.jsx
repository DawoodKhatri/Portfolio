import React from "react";

const SkillList = ({ skills }) => {
  return (
    <div className="my-3 flex items-center gap-2 flex-wrap">
      {skills.map((icon, i) => (
        <img
          key={i}
          className="w-8 h-8"
          src={`https://skillicons.dev/icons?i=${icon}`}
        />
      ))}
    </div>
  );
};

export default SkillList;
