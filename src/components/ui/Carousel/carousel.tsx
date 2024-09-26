import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "./carousel.css";

export function CarouselRoad() {
  const exp = [
    {
      company: "University of Illinois at Chicago",
      position: "Data Engineer Intern",
      duration: "June 2022 - August 2022",
      logo: "/logos/uic_logo.png",
      desc: "Utilized Microsoft Excel and Macros to deliver comprehensive data analysts on recycling data across campus as well as preform various data entries, transfers, and augmentation on assignments",
    },
    {
      company: "Productive Edge",
      position: "Full Stack Software Engineer Intern",
      duration: "June 2023 - August 2024",
      logo: "/logos/pe_logo.png",
      desc: "Through prompt engineer of openAI ChatGPT, created an AI model to match candidate resumes with job listings, categorizing candidates to optimize healthcare recruitment",
    },
    {
      company: "Headstarter AI",
      position: "Software Engineer Apprentice",
      duration: "July 2024 - September 2024",
      logo: "/logos/headstarter_logo.png",
      desc: "Built multiple AI centric applications and received coaching from many well established individuals in the field",
    },
  ];
  return (
    <Carousel className="carousel-container">
      <CarouselContent>
        {exp.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="card-div">
                <CardContent className="card-tag">
                  <img src={exp[index].logo} className="image-tag" />
                  <h3 className="position-tag">{exp[index].position}</h3>
                  <p className="company-tag">{exp[index].company}</p>
                  <p className="date-tag">{exp[index].duration}</p>
                  <p className="desc-tag">{exp[index].desc}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
