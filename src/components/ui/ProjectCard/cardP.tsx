import "./cardP.css";

interface ProjectCardProps {
  title: string;
  imgLink: string;
  desc: string;
  date: string;
  stack: string;
  webLink?: string;
  isGame?: boolean;
}

const Card: React.FC<ProjectCardProps> = ({
  title,
  imgLink,
  desc,
  date,
  stack,
  webLink,
  isGame,
}) => {
  const link = webLink ? "Website" : "No Link";

  return (
    <div className="card-container">
      <h3 className="text-center mb-2">{title}</h3>
      <div className="image-border">
        <div className="desc">
          <p>{desc}</p>
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
