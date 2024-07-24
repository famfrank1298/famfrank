import "./footer.css";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isSmallMobile = useMediaQuery("(max-width: 400px)");

  return (
    <div className="footer">
      <div className="footerLinks">
        <a href="https://www.linkedin.com/in/frankmensah/" target="_blank">
          <img src="/footer/linkedin.png"></img>
        </a>
        <a href="https://github.com/famfrank1298" target="_blank">
          <img src="/footer/github.png"></img>
        </a>
        <a href="mailto:mensahfrank330@gmail.com">
          <img src="/footer/email.png"></img>
        </a>
      </div>
      <h4>Made with ❤️ by Frank Mensah</h4>
      <p className="opacity-50 mt-0 text-center">
        Icons by{" "}
        <a
          target="_blank"
          href="https://icons8.com"
          className="hover:opacity-75"
        >
          Icons8
        </a>{" "}
        &{" "}
        <a
          target="_blank"
          href="https://iconduck.com/"
          className="hover:opacity-75"
        >
          IconDuck
        </a>
      </p>
      {!isSmallMobile ? (
        <div className="arrowContainer mt-1" onClick={handleScrollToTop}>
          <div className="upArrow">⇑</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
