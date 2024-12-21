"use client";

import { Project } from "@/utils/interfaces";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Filters from "./filters";
import { SectionHeading, SlideIn, TextReveal, Transition } from "./ui";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { Button } from "./ui/button";
import { useCursorVariants } from "@/utils/context";
import { Dialog } from "./ui/dialog";
import { ProjectsProvider, useProjects } from "@/utils/project-context";
import { useRouter } from "next/navigation";

interface ProjectProps {
  data: Project[];
}

const Projects = ({ data }: ProjectProps) => {
  return (
    <ProjectsProvider data={data}>
      <section className="md:p-8 p-4 relative" id="projects">
        <SectionHeading className="md:pl-16">
          <SlideIn className="text-white/40">Selected</SlideIn>
          <br />
          <SlideIn>works</SlideIn>
        </SectionHeading>
        <Filters />
        <ProjectContainer />
      </section>
    </ProjectsProvider>
  );
};

export default Projects;

const ProjectContainer = () => {
  const { filteredProjects, setSingleProject } = useProjects();
  const [showDialog, setShowDialog] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const numProjectToShow = 5;

  const projects = [
    {
      _id: "1",
      title: "Collocate",
      description: "Project Management Web Application",
      image: {
        url: "/assets/1.png",
      },
      link: "https://collocate.vercel.app",
      enabled: true,
      category: "Web",
    },
    {
      _id: "2",
      title: "Luro",
      description: "Social Media Marketing Tool",
      image: {
        url: "/assets/2.png",
      },
      link: "https://luro-ai.vercel.app/",
      enabled: true,
      category: "App",
    },
    {
      _id: "3",
      title: "Brainwave",
      description: "AI-powered chatbot for mental health support",
      image: {
        url: "/assets/3.png",
      },
      link: "https://brainwave-9ja.vercel.app/",
      enabled: true,
      category: "Web",
    },
    {
      _id: "4",
      title: "Linkify",
      description: "Link shortening service",
      image: {
        url: "/assets/4.png",
      },
      link: "https://linkify-io.vercel.app/",
      enabled: true,
      category: "Web",
    },
    {
      _id: "5",
      title: "Canvax",
      description: "No-code app builder",
      image: {
        url: "/assets/5.png",
      },
      link: "https://aj-canvax.vercel.app/",
      enabled: true,
      category: "App",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        layout
        className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3"
      >
        {projects.slice(0, numProjectToShow).map((project, index) => (
          <Transition
            transition={{ delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            key={project._id}
          >
            <Card {...project} />
          </Transition>
        ))}
      </motion.div>
      <Dialog showDialog={showDialog} setShowDialog={setShowDialog} />
    </AnimatePresence>
  );
};

const Card = ({ title, description, image, link }: Project) => {
  const [hover, setHover] = useState(false);
  const { setVariant } = useCursorVariants();
  const router = useRouter();

  const mouseEnter = () => {
    setHover(true);
    setVariant("PROJECT");
  };
  const mouseLeave = () => {
    setHover(false);
    setVariant("DEFAULT");
  };

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <motion.div
      layout
      className="relative rounded-xl md:rounded-3xl overflow-hidden aspect-square bg-secondary/30 md:px-4 cursor-pointer"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={handleClick}
    >
      <div className="absolute top-2 right-2 w-full h-full flex justify-end md:hidden">
        <div className="bg-white size-8 rounded-full text-black grid place-items-center">
          <ArrowUpRight size={20} />
        </div>
      </div>
      <div className="md:py-8 relative">
        <motion.div
          animate={{ y: hover ? -10 : 0 }}
          className="flex justify-between items-center max-md:hidden"
        >
          <p className="text-sm md:text-xl font-semibold max-md:opacity-0">
            {title}
          </p>
          <button className="flex gap-2 items-center justify-center max-md:px-4">
            <TextReveal className="max-md:text-sm">Visit</TextReveal>
            <span className="bg-black text-white/80 rounded-full p-1">
              <ArrowUpRight className="size-4 md:size-6" />
            </span>
          </button>
        </motion.div>
        <div className="overflow-hidden max-md:hidden">
          <motion.p
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: hover ? -10 : 0, opacity: hover ? 1 : 0 }}
            className="absolute text-white/50"
          >
            {description}
          </motion.p>
        </div>
      </div>
      <Image
        src={image.url}
        width={500}
        height={500}
        alt={title}
        className="object-cover h-full w-full object-center rounded-xl md:rounded-t-3xl"
      />
    </motion.div>
  );
};
