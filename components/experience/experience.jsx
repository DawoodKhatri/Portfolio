"use client";
import { EXPERIENCES } from "@/constants/experience";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./timelineElement";
import { FaStar } from "react-icons/fa";

const ExperienceJourney = () => {
  return (
    <div className="pl-3 pr-5 sm:px-10 md:px-20">
      <VerticalTimeline animate={false}>
        {EXPERIENCES.map((experience, i) => (
          <TimelineElement key={i} {...experience} />
        ))}
        <VerticalTimelineElement
          iconClassName="bg-primary"
          icon={<FaStar />}
          visible
        />
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceJourney;
