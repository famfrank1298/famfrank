"use client";

import NavBar from "@/components/NavBar/navbar";
import Hero from "@/components/Hero/hero";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills/skills";
import Footer from "@/components/Footer/footer";
import Projects from "@/components/Ventures/projects";
import About from "@/components/About/about";
import Roadmap from "@/components/Roadmap/roadmap";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Roadmap />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
