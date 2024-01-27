import ExperienceJourney from "@/components/experience/experience";
import ExperienceHeading from "@/components/experience/heading";
import React from "react";

const ExperiencePage = () => {
  return (
    <div className="flex flex-col gap-10 py-10 md:py-20">
      <ExperienceHeading />
      <ExperienceJourney />
    </div>
  );
};

export default ExperiencePage;
