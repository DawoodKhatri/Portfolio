import SkillHeading from "@/components/skills/heading";
import SkillSection from "@/components/skills/skillSection";
import { SKILLS } from "@/constants/skills";
import React from "react";


export const metadata = {
  title: "Tech I Work With",
  description: "Explore the tools driving my digital creations.",
};

const SkillsPage = () => {
  return (
    <div className="min-h-[calc(100vh-102px)] flex flex-col justify-center items-center gap-8 md:gap-16 p-8 md:p-16">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex-[1] text-center md:text-start animate__animated animate__fadeInLeft">
          <SkillHeading />
        </div>
        <div className="flex-[1]">
          <SkillSection title="Web" skills={SKILLS.FRONTEND} />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly gap-10 animate__animated animate__fadeIn">
        <SkillSection title="Database" skills={SKILLS.DATABASE} />
        <SkillSection title="Mobile" skills={SKILLS.MOBILE} />
        <SkillSection title="Additional" skills={SKILLS.ADDITIONAL} />
      </div>
    </div>
  );
};

export default SkillsPage;
