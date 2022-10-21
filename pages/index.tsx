import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Headers from "../components/Headers";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      <Head>
        <title>Portfólio brunoacev</title>
      </Head>

      <Headers />
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center ">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
