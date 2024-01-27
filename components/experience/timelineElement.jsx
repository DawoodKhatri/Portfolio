import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

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

      {skills && (
        <div className="my-3 flex items-center gap-2 flex-wrap">
          {skills.map((icon,i) => (
            <img
            key={i}
              className="w-8 h-8"
              src={`https://skillicons.dev/icons?i=${icon}`}
            />
          ))}
        </div>
      )}

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
