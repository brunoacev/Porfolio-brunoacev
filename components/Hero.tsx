import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Olá! Me chamo Bruno Azevedo!",
      "garoto.ama.cafe.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 object-cover mx-auto"
        src="https://avatars.githubusercontent.com/u/93809602?s=400&u=4f2a292848e7773ae1b9404d5240ec241ac09888&v=4"
        alt="foto perfil"
      />

      <div className="z-20">
        <h2 className="uppercase text-sm text-gray-500 pb-2 tracking-[10px]">
          Fullstack JS Developer
        </h2>
        <p className="text-4xl lg:text-5xl font-semibold px-10">
          {text}

          <Cursor cursorColor="#f7ab0a" />
        </p>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Sobre</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experiências</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contato</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
