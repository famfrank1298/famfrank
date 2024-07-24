import ScrollAnimation from "../ScrollAnimation/scrollAnimation";
import Card from "../ui/SkillCard/cardS";
import "./skills.css";

export default function Skills() {
  return (
    <div id="skills" className="animate">
      <ScrollAnimation />
      <h1 className="section-title">Skills</h1>
      <hr className="border-line" />
      <div className="skill-group">
        <h3 className="skills-subheading">Languages</h3>
        <ul className="skills-grid">
          <Card name="C++" link="/icons/c++.png" color="rgba(48,186,237,0.5)" />
          <Card name="Python" link="/icons/python.png" color="rgba(48)" />
        </ul>
      </div>
      <div className="skill-group">
        <h3 className="skills-subheading">Web Development</h3>
        <ul className="skills-grid">
          <Card
            name="HTML"
            link="/icons/html.png"
            color="rgba(255,111,0,0.5)"
          />
          <Card
            name="CSS"
            link="/icons/css.png"
            color="rgba(114,176,221, 0.5)"
          />
          <Card
            name="Tailwind CSS"
            link="/icons/tailwind.png"
            color="rgba(0,171,193,0.5)"
          />
          <Card
            name="Bootstrap"
            link="/icons/bootstrap.png"
            color="rgba(132,68,201,0.5)"
          />
          <Card
            name="Javascript"
            link="/icons/javascript.png"
            color="rgba(254,214,0,0.5)"
          />
          <Card
            name="Typescript"
            link="/icons/typescript.png"
            color="rgba(25,147,232,0.5)"
          />
          <Card
            name="React"
            link="/icons/react.png"
            color="rgba(127,221,234,0.5)"
          />
          <Card
            name="NextJS"
            link="/icons/nextjs.png"
            color="rgba(100,100,100,0.5)"
          />
        </ul>
      </div>
      <div className="skill-group">
        <h3 className="skills-subheading">Databases</h3>
        <ul className="skills-grid">
          <Card
            name="MongoDB"
            link="/icons/mongodb.png"
            color="rgba(86,176,69,0.5)"
          />
          <Card
            name="MySQL"
            link="/icons/mysql.png"
            color="rgba(223,242,254,0.5)"
          />
          <Card
            name="Supabase"
            link="/icons/supabase.png"
            color="rgba(35,178,68,0.5)"
          />
        </ul>
      </div>
      <div className="skill-group">
        <h3 className="skills-subheading">General Tools</h3>
        <ul className="skills-grid">
          <Card
            name="Github"
            link="/icons/github.png"
            color="rgba(100,100,100,0.5)"
          />
          <Card
            name="VS Code"
            link="/icons/vscode.png"
            color="rgba(41,182,246,0.5)"
          />

          <Card
            name="Figma"
            link="/icons/figma.png"
            color="rgba(123,77,254,0.5)"
          />
          <Card
            name="Postman"
            link="/icons/postman.png"
            color="rgba(255,148,24,0.5)"
          />
        </ul>
      </div>
      <div className="skill-group">
        <h3 className="skills-subheading">Project Management Tools</h3>
        <ul className="skills-grid">
          <Card
            name="Jira"
            link="/icons/jira.png"
            color="rgba(38,132,254,0.5)"
          />
          <Card
            name="BitBucket"
            link="/icons/bitbucket.png"
            color="rgba(32,150,242,0.5)"
          />
          <Card
            name="Trello"
            link="/icons/trello.png"
            color="rgba(0,129,203,0.5)"
          />
          <Card
            name="ClickUp"
            link="/icons/clickup.png"
            color="rgba(255,172,165,0.5)"
          />
        </ul>
      </div>
    </div>
  );
}
