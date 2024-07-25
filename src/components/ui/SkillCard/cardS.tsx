import ScrollAnimation from "@/components/ScrollAnimation/scrollAnimation";
import "./cardS.css";

interface SkillCardProps {
  name: string;
  link: string;
  color: string;
}

const Card: React.FC<SkillCardProps> = ({ name, link, color }) => {
  return (
    <div className="cardContainer animate">
      <ScrollAnimation />
      <div className="skill-border" style={{ backgroundColor: color }}>
        <img className="cardImg" src={link} alt="logo" />
      </div>
      <h4 className="ml-4">{name}</h4>
    </div>
  );
};

export default Card;
