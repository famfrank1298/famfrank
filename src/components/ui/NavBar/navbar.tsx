import { ModeToggle } from "../ModeToggle/modetoggle";
import "./navbar.css";

export default function menubar() {
  return (
    <div className="navbar-container">
      <h1 className="logo">𝔽𝔸𝕄</h1>
      <ul className="nav-list">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
}
