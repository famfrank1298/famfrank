import { useMediaQuery } from "@/hooks/use-media-query";
import { ModeToggle } from "../ui/ModeToggle/modetoggle";
import "./navbar.css";
import { Hamburger } from "../ui/MiniDropdown/hamburger";
import Link from "next/link";

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
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <a href="mailto:mensahfrank330@gmail.com">Contact</a>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
