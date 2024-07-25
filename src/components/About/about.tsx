import ScrollAnimation from "../ScrollAnimation/scrollAnimation";
import "./about.css";

export default function About() {
  return (
    <div id="about" className="animate">
      <ScrollAnimation />
      <h1 className="section-title">About Me</h1>
      <hr className="border-line" />
      <p className="about-text">
        From a young age, I was encouraged to pursue careers as a lawyer or
        doctor. While{" "}
        <b className="highlight">helping others was always a passion of mine</b>
        , I never felt drawn to those paths. <br />
        <br />
        During my junior year of high school, we were required to take a
        computer science class. Fascinated by its complexity and creativity, I
        realized this was a field where I could{" "}
        <b className="highlight">build meaningful solutions</b> and make a{" "}
        <b className="highlight">tangible impact on my community</b> on my
        terms. After graduating from the{" "}
        <b className="highlight">University of Illinois at Chicago</b>, I have
        continued to refine my skills, creating websites for various needs, such
        as my fraternity and homeless individuals in the City of Chicago, as
        well as creating simple projects on platforms such like Replit. <br />
        <br />
        Looking ahead, I am eager to delve deeper into artificial intelligence,
        integrating it into my applications, and continuing to develop
        technologies that benefit society. My internship experience at
        Productive Edge and my work on the Maps With Friends project are just
        the beginning of my journey in{" "}
        <b className="highlight">harnessing AI for the greater good</b>.
      </p>
    </div>
  );
}
