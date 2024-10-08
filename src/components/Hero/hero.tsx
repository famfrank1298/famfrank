import Image from "next/image";
import "./hero.css";
import { Button } from "../ui/Button/button";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width: 490px)");

  return (
    <div className="hero-container">
      <div className="heroText">
        <h4>Hello All! I am</h4>
        <h1>Frank A Mensah </h1>
        {isMobile ? (
          <h3 className="highlight">FullStack Developer</h3>
        ) : (
          <h3 className="highlight transform transition-transform duration-300 hover:scale-105">
            FullStack Developer and AI Enthusiast{" "}
          </h3>
        )}

        <h4>
          A Full-Stack Software Engineer based in Chicago, IL with expertise in{" "}
          <b className="highlight">C++</b>,{" "}
          <b className="highlight">JavaScript</b>, and{" "}
          <b className="highlight">React</b>, dedicated to delivering top-notch
          web applications through innovation and collaboration.
        </h4>
        <Button className="resumeBtn">
          <a href="/Mensah_Resume.pdf" target="_blank">
            <h3>★ Resume ★</h3>
          </a>
        </Button>
      </div>
      <div className="imageContainer">
        <img src="images/heroPic.jpg" className="heroImage"></img>
      </div>
    </div>
  );
}
