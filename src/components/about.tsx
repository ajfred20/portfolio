"use client";

import { About as AboutType, Timeline } from "@/utils/interfaces";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatDate } from "@/utils";
import { SlideIn, Transition } from "./ui";

interface AboutProps {
  about: AboutType;
  timeline: Timeline[];
}

const About = ({ about, timeline }: AboutProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter, sort, and limit to one timeline entry
  const education = timeline
    .filter((line) => line.forEducation && line.enabled === true)
    .sort((a, b) => a.sequence - b.sequence)
    .slice(0, 1); // Only include the first item

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen py-20 px-4 md:px-8 relative"
      id="about"
    >
      <div className="max-w-5xl w-full">
        <h3 className="md:text-5xl text-l font-bold overflow-hidden uppercase pb-8 text-center">
          <SlideIn>Watashi ni tsuite no jōhō wa kochira</SlideIn>
        </h3>
        <Transition viewport={{ once: true }}>
          <p className="text-xl md:text-4xl text-foreground/50 ">
            As a Web developer with 3+ years of experience, I have honed my
            skills in JavaScript and am currently learning TypeScript to expand
            my expertise. I pride myself on being a quick learner and attentive
            listener, which allows me to collaborate effectively with clients to
            create efficient and scalable solutions. My focus is on developing
            applications that solve real-world problems.
          </p>
        </Transition>
        <div className="pt-10">
          <div className="py-10 overflow-hidden grid w-full">
            {education.map((edu, index) => (
              <Transition key={edu._id}>
                <TimelineCard
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  timeline={edu}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

interface TimelineCardProps {
  timeline: Timeline;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  index: number;
}

const TimelineCard = ({
  timeline,
  activeIndex,
  setActiveIndex,
  index,
}: TimelineCardProps) => (
  <>
    <div className="border-b border-primary/20 py-4">
      <div
        className="flex items-center justify-between gap-4 cursor-pointer select-none"
        onClick={() => setActiveIndex(index)}
      >
        <span>0{index + 1}</span>
        <span className="text-xl md:text-3xl font-bold flex-1">
          Jnr. Frontend Developer
        </span>
        <div className="relative size-6 flex items-center justify-center">
          <span className="bg-primary w-4 md:w-6 h-0.5 absolute" />
          <motion.span
            initial={{ rotate: 90 }}
            animate={{
              rotate: activeIndex === index ? 0 : 90,
            }}
            className="absolute bg-primary w-4 md:w-6 h-0.5 rotate-90"
          />
        </div>
      </div>
      <motion.div
        initial={{
          height: activeIndex === index ? "100%" : 0,
        }}
        animate={{
          height: activeIndex === index ? "100%" : 0,
        }}
        className="overflow-hidden"
      >
        <p className="text-foreground/60 py-4 max-md:text-sm">
          {timeline.summary}
        </p>
        <div className="flex justify-between items-center pb-3 text-foreground/80">
          <div className="max-md:text-sm">
            <span>Cubicle Dev Agency</span>
            <br />
            <span>Lagos, Nigeria</span>
          </div>
          <div className="max-md:text-xs">
            <span>06-2021</span>
            {" - "}
            <span>12-2022</span>
          </div>
        </div>
        <ul className="list-disc list-inside">
          <li className="text-foreground/80 max-md:text-sm">
            Built responsive and scalable web pages for clients.
          </li>
        </ul>
      </motion.div>
    </div>

    <div className="border-b border-primary/20 py-4">
      <div
        className="flex items-center justify-between gap-4 cursor-pointer select-none"
        onClick={() => setActiveIndex(index)}
      >
        <span>0{index + 2}</span>
        <span className="text-xl md:text-3xl font-bold flex-1">
          Freelance Developer
        </span>
        <div className="relative size-6 flex items-center justify-center">
          <span className="bg-primary w-4 md:w-6 h-0.5 absolute" />
          <motion.span
            initial={{ rotate: 90 }}
            animate={{
              rotate: activeIndex === index ? 0 : 90,
            }}
            className="absolute bg-primary w-4 md:w-6 h-0.5 rotate-90"
          />
        </div>
      </div>
      <motion.div
        initial={{
          height: activeIndex === index ? "100%" : 0,
        }}
        animate={{
          height: activeIndex === index ? "100%" : 0,
        }}
        className="overflow-hidden"
      >
        <p className="text-foreground/60 py-4 max-md:text-sm">
          {timeline.summary}
        </p>
        <div className="flex justify-between items-center pb-3 text-foreground/80">
          <div className="max-md:text-sm">
            <span>Upwork, Fiverr etc</span>
            <br />
            <span>Remote</span>
          </div>
          <div className="max-md:text-xs">
            <span className="italic">09-2023</span>
            {" - "}
            <span className="italic">Present</span>
          </div>
        </div>
        <ul className="list-disc list-inside">
          <li className="text-foreground/80 max-md:text-sm">
            Implementing reusable components using React and Tailwind CSS.
          </li>
          <li className="text-foreground/80 max-md:text-sm">
            Collaboration with designers to optimize UX/UI for client
            satisfaction.
          </li>
          <li className="text-foreground/80 max-md:text-sm">
            Improving website performance, reducing load times by 30%.
          </li>
        </ul>
      </motion.div>
    </div>
  </>
);
