import React from "react";
import Image from "next/image";
import javascript from "../public/images/javascript.svg";
import css3 from "../public/images/css3.svg";
import git from "../public/images/git.svg";
import html5 from "../public/images/html5.svg";
import github from "../public/images/github.svg";
import mongodb from "../public/images/mongodb.svg";
import mui4 from "../public/images/mui4.svg";
import next from "../public/images/next.svg";
import mysql from "../public/images/mysql.svg";
import node from "../public/images/node.svg";
import react from "../public/images/react.svg";
import sass from "../public/images/sass.svg";
import postgres from "../public/images/postgres.png";
import sql from "../public/images/sql.png";

type Props = {};

type SkillProps = {
  urlType: string;
  levelHabilite: string;
};

const Skill = ({}: Props) => {
  const dataSkills: SkillProps[] = [
    {
      urlType: javascript,
      levelHabilite: "85%",
    },
    {
      urlType: css3,
      levelHabilite: "80%",
    },
    {
      urlType: git,
      levelHabilite: "100%",
    },
    {
      urlType: html5,
      levelHabilite: "100%",
    },
    {
      urlType: github,
      levelHabilite: "100%",
    },
    {
      urlType: mongodb,
      levelHabilite: "70%",
    },
    {
      urlType: mui4,
      levelHabilite: "50%",
    },
    {
      urlType: next,
      levelHabilite: "85%",
    },
    {
      urlType: mysql,
      levelHabilite: "50%",
    },
    {
      urlType: node,
      levelHabilite: "90%",
    },
    {
      urlType: react,
      levelHabilite: "100%",
    },
    {
      urlType: sass,
      levelHabilite: "100%",
    },
    {
      urlType: postgres,
      levelHabilite: "90%",
    },
    {
      urlType: sql,
      levelHabilite: "60%",
    },
  ];
  return (
    <ul className="group relative flex flex-wrap cursor-pointer gap-5 ">
      {dataSkills.map((skill, index) => (
        <li key={index} className="px-5 py-3 ">
          <Image src={skill.urlType} alt="Logo da Skill" layout="fixed" />

          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out ">
            <p className="text-sm font-bold text-[#7FAB0A] opacity-100">
              {skill.levelHabilite}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Skill;
