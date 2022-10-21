import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">
        Sobre
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://scontent.fjdo10-1.fna.fbcdn.net/v/t39.30808-6/312353582_2338873949611161_4377401417134157985_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=DYWh8vZ3hEcAX_U5rmW&_nc_ht=scontent.fjdo10-1.fna&oh=00_AT8ssuMVbBa4kAQCjFOpYX9T7bsNSFp5tXCmEBPwsnyqLw&oe=635624A1"
        className="-mb-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-contain md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibold">
          Um pouco sobre meu{" "}
          <span className="underline decoration-[#F7ab0a]/50 tracking-[3px]">
            Background
          </span>
        </h4>
        <p className="text-sm">
          Iniciei minha jornada dedicando mais de 6 anos na área de atendimento
          ao público e gestão de times, tenho um background fortalecido com
          SoftSkills em comunicação, organização de metas e o cuidado com
          equipes. Vejo grandes desafios na área de tecnologia na qual me
          interesso bastante por ciclos de desenvolvimentos continuos e aberto
          para novos projetos.
        </p>
      </div>
    </div>
  );
};

export default About;
