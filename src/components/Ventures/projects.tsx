import { useMediaQuery } from "@/hooks/use-media-query";
import Card from "../ui/ProjectCard/cardP";
import "./projects.css";

export default function Projects() {
  const shortDate = useMediaQuery("(max-width: 880px)");
  const isTablet = useMediaQuery("(min-width: 750px)");

  return (
    <div id="projects">
      <h1 className="section-title">Projects</h1>
      <hr className="border-line" />
      <div className="project-grid">
        <Card
          title="Portfolio Website"
          imgLink="/projectSC/portfolio_sc.png"
          desc="I'm happy to say...you are on it right now!"
          date="July 2024"
          stack="Next.js, Google Analytics, Shadcn/UI"
          shortDesc="You are on it! :)"
          webLink="https://famfrank.vercel.app/"
        />
        <Card
          title="FamFinance AI Chatbot"
          imgLink="/projectSC/famfinance_sc.png"
          desc="Created an AI chatbot for investment support, using NLP for precise responses and Firebase for secure user authentication."
          date="July 2024"
          stack="Next.js, Firebase, OpenAI"
          shortDesc="AI-powered chatbot for investment support"
          webLink="https://famfinacechatbot.vercel.app/"
        />
        <Card
          title="Pantry Tracker"
          imgLink="/projectSC/pantry_sc.png"
          desc="Track, manage, and update your pantry inventory with CRUD operations, ensuring you never lose track of your food items."
          date="July 2024"
          stack="Next.js, Firebase, Material UI"
          shortDesc="Manage pantry inventory with CRUD operations"
          webLink="https://pantrytracker-mu.vercel.app/"
        />
        <Card
          title="Find Your Roof"
          imgLink="/projectSC/fyr_sc.png"
          desc="A centralized platform aimed to assist homeless individuals in the City of Chicago find homes, jobs, and other organizations"
          date="May 2024"
          stack="Next.js, Typescript, Supabase"
          webLink="https://findyourroof.netlify.app/"
          shortDesc="Homeless Assistance Website"
        />
        <Card
          title="Omega Delta Phi"
          imgLink="/projectSC/odphi_sc.png"
          desc="The inaugural fraternity website of Omega Delta Phi - Beta Iota Chapter at UIC."
          date={shortDate ? "Dec 2023" : "December 2023"}
          stack="Next.js, Typescript, Tailwind CSS"
          webLink="https://omegadeltaphi-bi.vercel.app/"
          shortDesc="Beta Iota Fraternity Website"
        />
        <Card
          title="Maps with Friends"
          imgLink="/projectSC/mwf_sc.png"
          desc="Familiar with GeoGuesser? Well this is our rendition of the infamous game with AI assistance!"
          date="May 2023"
          stack="React, Javascript, Supabase"
          shortDesc="GeoGuesser with AI Assistance"
        />
        {isTablet ? (
          <div>
            <Card
              title="Car Crash Tracker"
              imgLink="/projectSC/cct_sc.png"
              desc="Filter through the City of Chicago Car Crash database and check the weather at a given latitude and longitude"
              date={shortDate ? "Sep 2022" : "September 2022"}
              stack="Replit, Javascript, Google Maps API"
              webLink="https://famfrank1298.github.io/C.C-Tracker-and-Weather/"
              shortDesc="Car Crash and Weather Tracker"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      {isTablet ? (
        <div>
          <h1 className="section-title">Games</h1>
          <hr className="border-line" />
          <div className="project-grid">
            <Card
              title="Collect `Em All"
              imgLink="/projectSC/dbz_sc.png"
              desc="Simple mini arrow game where you collect the dragon balls while avoiding obstacles"
              date={shortDate ? "Oct 2022" : "October 2022"}
              stack="Replit, Javascript, CSS"
              webLink="https://famfrank1298.github.io/Dragon_Ball_Game/"
              isGame={true}
              shortDesc="Mini Arrow Game"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
