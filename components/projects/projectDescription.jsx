import React from "react";

const ProjectDescription = ({ descriptions }) => {
  return (
    <ul className="list-disc ml-5">
      {descriptions.map((description, i) => (
        <li key={i} className="my-2">
          {description}
        </li>
      ))}
    </ul>
  );
};

export default ProjectDescription;
