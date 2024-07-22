import Card from "../ui/ProjectCard/cardP";
import "./projects.css";

export default function Projects() {
  return (
    <div>
      <h1 className="section-title">Projects</h1>
      <hr className="border-line" />
      <div className="project-grid">
        <Card
          title="Find Your Roof"
          imgLink="/projectSC/fyr_sc.png"
          desc="A centralized platform aimed to assist homeless individuals in the City of Chicago find homes, jobs, and other organizations"
          date="May 2024"
          stack="Next.js, Typescript, Supabase"
          webLink="https://findyourroof.netlify.app/"
        />
        <Card
          title="Omega Delta Phi"
          imgLink="/projectSC/odphi_sc.png"
          desc="The inaugural fraternity website of Omega Delta Phi - Beta Iota Chapter at UIC."
          date="December 2023"
          stack="Next.js, Typescript, Tailwind CSS"
          webLink="https://omegadeltaphi-bi.vercel.app/"
        />
      </div>
    </div>
  );
}
