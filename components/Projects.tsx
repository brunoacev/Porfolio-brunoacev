import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  let i = 1;
  const projects = [1, 2, 3, 4, 5];
  const projectSource = [
    {
      urlImg:
        "https://live.staticflickr.com/65535/52441402382_a2f9f30329_b.jpg",
      title: "E-commerce",
      content:
        "Projeto FullStack em andamento de um E-commerce, replicando designer de Syafrini Nabilla on Dribble. Techs utilizadas: NextJs, Typscript, Redux, Sanity.io, Stripe API, Tailwind CSS",
      link: "https://brunoacev.github.io/Projeto-MF-Advocacia/",
    },
    {
      urlImg:
        "https://live.staticflickr.com/65535/52442396315_b33fe0a1be_b.jpg",
      title: "E-commerce",
      content:
        "Projeto pretende entregar uma plataforma para usuários com acesso a serviços como monitorias de clientes em debitos, sistema de discagem, pagina de controle administrativos e pagina de interação de usuários atraves de chat.",
      link: "https://brunoacev.github.io/Projeto-MF-Advocacia/",
    },
    {
      urlImg:
        "https://live.staticflickr.com/65535/52441889636_afc18148f0_h.jpg",
      title: "Projeto MF Advocacia",
      content:
        "Primeiro projeto de analises de dados proposto pelo grupo MF, para fins de prática do desenvolvedor.",
      link: "https://brunoacev.github.io/Projeto-MF-Advocacia/",
    },
  ];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">
        Projetos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {projectSource.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen overflow-scroll overflow-y-hidden ml-10 "
            key={i}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              src={project.urlImg}
              alt="Foto Case projeto"
              width={700}
            />
            <div className="space-y-10 px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case {i + 1} de {projectSource.length}
                </span>
                : {project.title}
              </h4>
              <p className="text-1xl text-center md:text-left">
                {project.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12 " />
    </div>
  );
};

export default Projects;
