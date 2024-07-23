"use client";

import NavBar from "@/components/NavBar/navbar";
import Hero from "@/components/Hero/hero";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills/skills";
import Footer from "@/components/Footer/footer";
import Projects from "@/components/Ventures/projects";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
    },
  });
}

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
    <PostHogProvider client={posthog}>
      <div>
        {/* <div ref={cursorRef} className="cursor"></div> */}
        <NavBar />
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </PostHogProvider>
  );
}
