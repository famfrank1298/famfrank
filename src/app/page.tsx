"use client";

import NavBar from "@/components/NavBar/navbar";
import Hero from "@/components/Hero/hero";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills/skills";
import Footer from "@/components/Footer/footer";
import Projects from "@/components/Ventures/projects";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* <div ref={cursorRef} className="cursor"></div> */}
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
