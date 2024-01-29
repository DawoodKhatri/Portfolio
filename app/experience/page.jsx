import ExperienceJourney from "@/components/experience/experience";
import ExperienceHeading from "@/components/experience/heading";
import React from "react";

const ExperiencePage = () => {
  return (
    <div className="min-h-[calc(100vh-102px)] flex flex-col justify-center items-center gap-8 py-8 md:py-16">
      <ExperienceHeading />
      <ExperienceJourney />
    </div>
  );
};

export default ExperiencePage;
