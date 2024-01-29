import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import SkillList from "../common/skillList";

const TimelineElement = ({
  duration,
  iconClassName,
  icon,
  organization,
  role,
  type,
  skills,
  descriptions,
}) => {
  return (
    <VerticalTimelineElement
      className="timeline-element"
      date={duration}
      iconClassName={iconClassName}
      icon={<img src={icon} />}
      visible
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        <div>
          <h3 className="font-semibold text-2xl text-primary">
            {organization}
          </h3>
          <h4 className="">{role}</h4>
        </div>
        <p className="!my-1 w-fit px-3 py-1 rounded-full bg-primary">{type}</p>
      </div>

      {skills && <SkillList skills={skills} />}

      <ul className="list-disc ml-5 mt-5">
        {descriptions.map((description, i) => (
          <li key={i} className="my-1">
            {description}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
