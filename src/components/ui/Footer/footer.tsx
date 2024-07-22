import "./footer.css";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <h4>Copyright © Frank Mensah 2024</h4>
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
      <div className="arrowContainer" onClick={handleScrollToTop}>
        <div className="upArrow">⇑</div>
      </div>
    </div>
  );
}
