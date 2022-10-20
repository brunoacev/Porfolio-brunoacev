import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-r max-w-full px-10 justify-evenly mx-auto items-center  WorkExperience">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">
        Experiências
      </h3>

      <div className="w-full flex  overflow-y-hidden overflow-x-scroll p-10 ml-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 WorkExperienceBox">
        <ExperienceCard />
      </div>
    </div>
  );
};

export default WorkExperience;
