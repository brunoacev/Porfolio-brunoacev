import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Headers = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}

        <a
          href="https://github.com/brunoacev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon network="github" fgColor="gray" bgColor="transparent" />
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-azevedo-02736bb2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon network="linkedin" fgColor="gray" bgColor="transparent" />
        </a>
        <a
          href="https://wa.me/+5585985436862"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon network="whatsapp" fgColor="gray" bgColor="transparent" />
        </a>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <Link href="#contact">
          <SocialIcon
            network="email"
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
          />
        </Link>
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
            Envie um email
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Headers;
