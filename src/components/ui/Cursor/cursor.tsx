import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const onMouseMove = (event: { clientX: any; clientY: any }) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", onMouseMove);
  });
  return (
    <div id="cursor" className="cursor">
      <span></span>
    </div>
  );
}
