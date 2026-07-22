"use client";
import { Divider } from "fj-elements";
import Hero from "./components/HomePage/Hero/Hero";
import AboutMe from "./components/HomePage/AboutMe/AboutMe";
import Skills from "./components/HomePage/Skills/Skills";
import Projects from "./components/HomePage/Projects/Projects";
import Experience from "./components/HomePage/Experience/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <AboutMe />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
    </>
  );
}
