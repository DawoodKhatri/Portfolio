import React from "react";

const ProjectCard = ({ thumbnail, title, description, demo }) => {
  return (
    <div className="glass overflow-hidden">
      <img className="rounded-lg" src={thumbnail} />

      <div className="px-3 py-5">
        <h3 className="font-semibold text-xl text-primary">{title}</h3>
        <h4 className="text-ellipsis line-clamp-2" title={description}>{description}</h4>
        {/* <button className="w-fit mt-2 project-button">More Details</button> */}
      </div>
    </div>
  );
};

export default ProjectCard;
