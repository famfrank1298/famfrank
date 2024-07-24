import { useMediaQuery } from "@/hooks/use-media-query";
import { ModeToggle } from "../ui/ModeToggle/modetoggle";
import "./navbar.css";
import { Hamburger } from "../ui/MiniDropdown/hamburger";
import Link from "next/link";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 680px)");
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="navbar-container">
      <HoverCard>
        <HoverCardTrigger asChild>
          <h1 className="logo" onClick={handleScrollToTop}>
            <Link href="#" className="link-li">
              𝔽𝔸𝕄
            </Link>
          </h1>
        </HoverCardTrigger>
        <HoverCardContent className="w-60 flex justify-start">
          <div className="hover-logo text-center">
            <p>
              My full name initials are <b>F.A.M</b> (Frank Antwi Mensah)😎
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
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
              <Link href="#" className="link-li">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="link-li">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="link-li">
                Projects
              </Link>
            </li>
            <li>
              <a href="mailto:mensahfrank330@gmail.com" className="link-li">
                Contact
              </a>
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
