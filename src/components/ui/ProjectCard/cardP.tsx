import { useMediaQuery } from "@/hooks/use-media-query";
import "./cardP.css";
import ScrollAnimation from "@/components/ScrollAnimation/scrollAnimation";

interface ProjectCardProps {
  title: string;
  imgLink: string;
  desc: string;
  date: string;
  stack: string;
  webLink?: string;
  isGame?: boolean;
  shortDesc: string;
}

const Card: React.FC<ProjectCardProps> = ({
  title,
  imgLink,
  desc,
  date,
  stack,
  webLink,
  isGame,
  shortDesc,
}) => {
  const link = webLink ? "Website" : "No Link";
  const shortenDesc = useMediaQuery("(max-width: 800px)");
  const mobileView = useMediaQuery("(max-width: 700px)");

  return (
    <div className="card-container animate">
      <ScrollAnimation />
      <h3 className="text-center mb-2">{title}</h3>
      <div className="image-border">
        <div className="desc">
          <p>
            {mobileView
              ? shortDesc
              : !shortenDesc
              ? desc
              : desc.substring(0, 60) + "..."}
          </p>
          <a href={webLink} target="_blank">
            {isGame ? (
              <p className="urlP">Play Now</p>
            ) : (
              <p className="urlP">{link}</p>
            )}
          </a>
        </div>
        <img className="pImage" src={imgLink}></img>
        <p className="buttonText">{date}</p>
      </div>
      <h4 className="text-center mt-5">Tech Stack: {stack}</h4>
    </div>
  );
};

export default Card;
