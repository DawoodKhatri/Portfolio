import SkillHeading from "@/components/skills/heading";
import SkillSection from "@/components/skills/skillSection";
import { SKILLS } from "@/constants/skills";
import React from "react";

const SkillsPage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-10 lg:gap-20 p-10 lg:p-20">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex-[1]">
          <SkillHeading />
        </div>
        <div className="flex-[1]">
          <SkillSection title="Web" skills={SKILLS.FRONTEND} />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly gap-10">
        <SkillSection title="Database" skills={SKILLS.DATABASE} />
        <SkillSection title="Mobile" skills={SKILLS.MOBILE} />
        <SkillSection title="Additional" skills={SKILLS.ADDITIONAL} />
      </div>
    </div>
  );
};

export default SkillsPage;
