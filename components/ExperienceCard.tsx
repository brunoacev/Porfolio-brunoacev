import React from "react";
import { motion } from "framer-motion";
import javascript from "../public/images/javascript.svg";
import css3 from "../public/images/css3.svg";
import html5 from "../public/images/html5.svg";
import Image from "next/image";

type Props = {};
const ExperienceCard = (props: Props) => {
  const dataSource = [
    {
      urlLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6IZ9Jg0kUpmTVURlNc_MSdWWMDlOQcGreGHTtAGumo0pOxOi2XU_8jDD_kTDOU2ji9I&usqp=CAU",
      title: "Atendente Interno",
      subTitle: "Meireles e Freitas",
      icons: [javascript, css3, html5],
      start_endeed_Work: "Outubro/2020 até Junho/2022",
      list: [
        "Atendimento interno e SAC",
        "Desenvolvedor do projeto MF Law, proposto para trabalhar dados de jurimetrias onde foi desenvolvido landing page sobre o projeto. ",
        "Desenvolvedor do projeto MF Digital, proposto para centralizar todas as atividades internas em uma unica plataforma. ",
      ],
    },
    {
      urlLogo:
        "https://letraa.com.br/wp-content/uploads/2016/01/CNB_LogoAncar.png",
      title: "Atendimento Mall",
      subTitle: "Ancar Ivanhoe",
      start_endeed_Work: "Abril/2016 até Outubro/2019",
      icons: [],
      list: [
        "Iniciei como Orientador em Estácionamento",
        "Promovido para Atendente em Mall sobre Estacionamento e Recepção.",
        "Subistitudo de Supervisão de Equipes no setor de Estacionamento.",
      ],
    },
  ];
  return (
    <article className="flex ml-20 items-center">
      {dataSource.map((data, index) => (
        <div
          key={index}
          className=" h-full flex gap-5  p-2 shadow-xl xl:max-w-[600px] md:max-w-[400px] md:max-h-[600px] sm:max-w-[250px] sm:max-h-[600px] "
        >
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="invisible xl:visible xl:w-22 xl:h-22 md:visible md:w-16 md:h-16 sm:visible sm:h-10 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center "
            src={data.urlLogo}
            alt="logo"
          />

          <div className="px-0 md:px-10">
            <h4 className="text-2xl font-light sm:text-[15px]">{data.title}</h4>
            <p className="text-1xl font-bold mt-1 sm:text-[13px]">
              {data.subTitle}
            </p>
            <div className="flex space-x-2 my-2">
              {data.subTitle == "Meireles e Freitas" ? (
                <div>
                  <Image
                    src={data.icons[0]}
                    alt=""
                    className="h-10 w-10 rounded-full sm:h-5 sm:w-5"
                  />
                  <Image
                    src={data.icons[1]}
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                  <Image
                    src={data.icons[2]}
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                </div>
              ) : null}
            </div>
            <p className="uppercase py-5 text-gray-300 sm:text-[12px]">
              {data.start_endeed_Work}
            </p>
            <ul className="list-disc space-y-4 text-sm sm:text-[12px]">
              {data.list.map((dado, index) => (
                <li key={index}>{dado}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ExperienceCard;

// className="flex flex-row rounded-l items-center space-y-1 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10   hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
