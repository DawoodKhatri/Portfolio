import ExperienceJourney from "@/components/experience/experience";
import ExperienceHeading from "@/components/experience/heading";
import React from "react";

const ExperiencePage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-10 py-10 md:py-20">
      <ExperienceHeading />
      <ExperienceJourney />
    </div>
  );
};

export default ExperiencePage;
