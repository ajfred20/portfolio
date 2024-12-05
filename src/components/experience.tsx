"use client";

import { formatDate } from "@/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading, PerspectiveText, SlideIn, Transition } from "./ui";

const Experience = () => {
  const currentDate = new Date();

  const experience = [
    {
      _id: "1",
      sequence: 1,
      enabled: true,
      forEducation: false,
      jobTitle: "Frontend Developer",
      company_name: "Tech Innovators Ltd.",
      jobLocation: "Lagos, Nigeria",
      startDate: new Date(2021, 5, 1), // June 2021
      endDate: new Date(2022, 11, 1), // December 2022
      summary:
        "Developed and maintained modern, responsive user interfaces for various client projects.",
      bulletPoints: [
        "Implemented reusable components using React and Tailwind CSS.",
        "Collaborated with designers to optimize UX/UI for client satisfaction.",
        "Improved website performance, reducing load times by 30%.",
      ],
    },
    {
      _id: "2",
      sequence: 2,
      enabled: true,
      forEducation: false,
      jobTitle: "Founder & Full Stack Developer",
      company_name: "Rydon Africa",
      jobLocation: "Lagos, Nigeria",
      startDate: new Date(2023, 0, 4), // January 2023
      endDate: currentDate, // Dynamic current date
      summary:
        "Leading the development of webpage and handling my startup at the same time.",
      bulletPoints: [
        "Leading My dev team.",
        "Handles all devs and Designers.",
        "Crafting the webpage for our anticipated startup launch.",
      ],
    },
  ];

  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="relative pb-20">
      <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />
      <SectionHeading className="pl-4 md:px-12 py-20">
        <SlideIn className="text-white/40">Experience</SlideIn>
        <br />
        <SlideIn>History</SlideIn>
      </SectionHeading>
      <div>
        {experience.map((exp, index) => (
          <Transition
            key={exp._id}
            className="py-4 md:py-8 border-b border-white/10 hover:bg-white/5 px-2 md:px-12"
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="flex items-center justify-between md:gap-8">
              <span className="max-md:hidden">0{index + 1}</span>
              <div className="md:text-5xl text-xl md:font-semibold flex-1">
                <PerspectiveText hover={hover === index}>
                  {exp.jobTitle}
                </PerspectiveText>
              </div>
              <div className="max-md:text-sm max-md:flex flex-col text-foreground/50">
                <span className="italic">
                  {formatDate(exp.startDate).month +
                    ", " +
                    formatDate(exp.startDate).year}
                </span>
                <span className="max-md:hidden">{" - "}</span>
                <span className="italic">
                  {formatDate(exp.endDate).month +
                    ", " +
                    formatDate(exp.endDate).year}
                </span>
              </div>
            </div>
            <div className="md:pl-12 py-2 text-foreground/50 max-md:text-sm flex items-center justify-between">
              <span>{exp.company_name}</span>
              <span>{exp.jobLocation}</span>
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: hover === index ? "100%" : 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <p className="text-foreground/60 py-2">{exp.summary}</p>
              <ul className="list-disc list-inside">
                {exp.bulletPoints.map((point, index) => (
                  <li key={index} className="text-foreground/80 max-md:text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Experience;
