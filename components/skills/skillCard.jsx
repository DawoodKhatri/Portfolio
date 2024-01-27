import React from "react";

const SkillCard = ({ icon, title }) => {
  return (
    <div className="glass !rounded-ss-3xl !rounded-ee-3xl p-3 lg:p-4 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300" title={title}>
      <img className="mx-auto md:w-8 lg:w-10 xl:w-12" src={`https://skillicons.dev/icons?i=${icon}`} />
      {/* <p className="text-center mt-1">{title}</p> */}
    </div>
  );
};

export default SkillCard;
