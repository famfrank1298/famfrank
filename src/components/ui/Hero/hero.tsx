import Image from "next/image";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="heroText">
        <h4>Hello All! I am</h4>
        <h1>Frank Mensah </h1>
        <h3 className="highlight">FullStack Developer and AI Enthusiast </h3>
        <h4>
          A Full-Stack Software Engineer based in Chicago, IL with expertise in{" "}
          <b className="highlight">C++</b>,{" "}
          <b className="highlight">JavaScript</b>, and{" "}
          <b className="highlight">React</b>, dedicated to delivering top-notch
          web applications through innovation and collaboration.
        </h4>
      </div>
      <div className="imageContainer">
        <img src="images/heroPic.jpg" className="heroImage"></img>
      </div>
    </div>
  );
}
