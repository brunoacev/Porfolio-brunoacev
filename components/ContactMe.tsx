import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:brunoacev@gmail.com?subject=${formData.subject}&body=
    Olá, meu nome é ${formData.name}. 
    Motivo do Contato: ${formData.message}. 
    Email para retorno:(${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[5px] text-gray-500 text-1xl">
        Contato
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl font-semibold text-center">
          Encaminhe uma mensagem via email, telefone, ou{" "}
          <a
            href="https://wa.me/+5585985436862"
            target="_blanck"
            className="decoration-[#F7AB0A]/50 underline"
          >
            {" "}
            WhatsApp.
          </a>
        </h4>

        <div className="space-y-10 ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />

            <p>+55 (85) 98543-6862</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>Fortaleza, Ceará - BR</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>brunoacev@gmail.com</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Nome"
              className="contactInput"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="E-mail"
              className="contactInput"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            placeholder="Título"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            placeholder="Assunto"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-3 rounded-md text-black font-bold text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
