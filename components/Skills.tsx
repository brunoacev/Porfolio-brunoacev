import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className=" flex relative flex-col text-center md:text-left lx:flex-row max-w-[400px] xl:px-10 min-h-screen justify-center mx:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">
        Skills
      </h3>

      <h3 className="absolute top-36  tracking-[2px] text-gray-500 text-sm text-center">
        Posicione o cursor para visualizar nivel das skills
      </h3>

      <div className="grid grid-cols-1  ">
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
