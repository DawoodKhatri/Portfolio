import SkillCard from "@/components/skills/skillCard";
import SkillSection from "@/components/skills/skillSection";
import { SKILLS } from "@/constants/skills";
import React from "react";

const SkillsPage = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-20 p-10 lg:p-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex-[1]">
          <p className="font-bold text-4xl lg:text-5xl xl:text-6xl my-1">
            <span className="text-primary">Tech</span> I Work With
          </p>

          <p className="font-semibold text-xl lg:text-2xl xl:text-3xl my-2">
            Explore the tools driving my digital creations.
          </p>
          <p className="text-sm lg:text-base xl:text-lg">
            I thrive on curiosity, always open and excited to learn new
            technologies that push the boundaries of what&apos;s possible in web
            development.
          </p>
        </div>
        <div className="flex-[1]">
          <SkillSection title="Web" skills={SKILLS.FRONTEND} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 [&>div]:flex-[1]">
        <SkillSection title="Database" skills={SKILLS.DATABASE} />
        <SkillSection title="Mobile" skills={SKILLS.MOBILE} />
        <SkillSection title="Additional" skills={SKILLS.ADDITIONAL} />
      </div>
    </div>
  );
};

export default SkillsPage;
