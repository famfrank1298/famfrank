import ScrollAnimation from "../ScrollAnimation/scrollAnimation";
import { CarouselRoad } from "../ui/Carousel/carousel";

export default function Roadmap() {
  return (
    <div id="roadmap" className="animate">
      <ScrollAnimation />
      <h1 className="section-title">My Journey</h1>
      <hr className="border-line" />
      <CarouselRoad />
    </div>
  );
}
