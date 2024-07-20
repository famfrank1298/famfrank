import { useMediaQuery } from "@/hooks/use-media-query";
import { ModeToggle } from "../ModeToggle/modetoggle";
import "./navbar.css";
import { Hamburger } from "../MiniDropdown/hamburger";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 680px)");

  return (
    <div className="navbar-container">
      <h1 className="logo">𝔽𝔸𝕄</h1>
      <div>
        {isMobile ? (
          <ul className="nav-list">
            <li>
              <ModeToggle />
            </li>
            <li>
              <Hamburger />
            </li>
          </ul>
        ) : (
          <ul className="nav-list">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
