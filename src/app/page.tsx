import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import {
  HoverImageLink,
  ParallaxText,
  SectionHeading,
  SlideIn,
  TextReveal,
  Transition,
} from "@/components/ui";

import { UserObject } from "@/utils/interfaces";
import Experience from "@/components/experience";
import { ContactUs } from "@/components/contact-us";
import Link from "next/link";
import { Hero } from "@/components/hero";

export default async function Home() {
  const res = await fetch(
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  );

  const { user } = (await res.json()) as UserObject;
  if (!user) return null;
  const {
    about,
    testimonials,
    services,
    skills,
    projects,
    social_handles,
    timeline,
    email,
  } = user;

  return (
    <main className="relative">
      <Transition className="fixed md:top-8 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40">
        <Link href={"/"}>
          <TextReveal className="font-semibold ">Aj Fred</TextReveal>
        </Link>
      </Transition>
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
      <Experience />
      {/* ===SKILLS SECTION=== */}
      <section id="skills">
        {/* Parallax Text for Skills */}
        <ParallaxText baseVelocity={-5}>
          {[
            { name: "HTML", _id: "1", enabled: true, sequence: 1 },
            { name: "CSS", _id: "2", enabled: true, sequence: 2 },
            { name: "Next.js", _id: "3", enabled: true, sequence: 3 },
            { name: "React", _id: "4", enabled: true, sequence: 4 },
            { name: "Git", _id: "5", enabled: true, sequence: 5 },
            { name: "Framer Motion", _id: "6", enabled: true, sequence: 6 },
            { name: "JavaScript", _id: "7", enabled: true, sequence: 7 },
            { name: "TypeScript", _id: "8", enabled: true, sequence: 8 },
            { name: "Figma", _id: "9", enabled: true, sequence: 9 },
          ]
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>

        <ParallaxText baseVelocity={5}>
          {[
            { name: "HTML", _id: "1", enabled: true, sequence: 1 },
            { name: "CSS", _id: "2", enabled: true, sequence: 2 },
            { name: "Next.js", _id: "3", enabled: true, sequence: 3 },
            { name: "React", _id: "4", enabled: true, sequence: 4 },
            { name: "Git", _id: "5", enabled: true, sequence: 5 },
            { name: "Framer Motion", _id: "6", enabled: true, sequence: 6 },
            { name: "JavaScript", _id: "7", enabled: true, sequence: 7 },
            { name: "TypeScript", _id: "8", enabled: true, sequence: 8 },
            { name: "Figma", _id: "9", enabled: true, sequence: 9 },
          ]
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>

        <ParallaxText baseVelocity={-5}>
          {[
            { name: "HTML", _id: "1", enabled: true, sequence: 1 },
            { name: "CSS", _id: "2", enabled: true, sequence: 2 },
            { name: "Next.js", _id: "3", enabled: true, sequence: 3 },
            { name: "React", _id: "4", enabled: true, sequence: 4 },
            { name: "Git", _id: "5", enabled: true, sequence: 5 },
            { name: "Framer Motion", _id: "6", enabled: true, sequence: 6 },
            { name: "JavaScript", _id: "7", enabled: true, sequence: 7 },
            { name: "TypeScript", _id: "8", enabled: true, sequence: 8 },
            { name: "Figma", _id: "9", enabled: true, sequence: 9 },
          ]
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>
      </section>

      {/* ===SERVICES SECTION=== */}
      <section className="px-2 py-20 relative" id="services">
        <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10" />
        <SectionHeading className="md:pl-16 overflow-hidden">
          <SlideIn className="text-white/40">Here&apos;s how</SlideIn> <br />
          <SlideIn>I can help you</SlideIn>
        </SectionHeading>
        <div className="mx-auto pt-10">
          {services.slice(0, 3).map((service) => (
            <Transition key={service._id}>
              <HoverImageLink
                heading={service.name || "Service Name"} // Placeholder for heading
                href=""
                price="Contact for pricing" // Price remains unchanged
                imgSrc={service.image?.url || "https://via.placeholder.com/300"} // Placeholder image URL
                subheading={service.desc || "Service description goes here"} // Placeholder for subheading
              />
            </Transition>
          ))}
        </div>
        <Transition className="flex items-center py-10 md:hidden">
          <div className="p-4 rounded-full border border-white/50">
            <span>Discuss the project</span>
          </div>
        </Transition>
      </section>

      {/* ===PROJECTS SECTION=== */}
      {/* ===TESTIMONIALS SECTION=== */}
      <section className="py-20 relative" id="testimonials">
        <span className="blob size-1/2 absolute -top-20 left-0 blur-[100px] -z-10" />
        <SectionHeading className="md:pl-28">
          <SlideIn className="text-white/40">What My</SlideIn> <br />
          <SlideIn className="">Clients Say</SlideIn>
        </SectionHeading>
        <Testimonials data={testimonials} speed="normal" pauseOnHover />
        <Testimonials
          data={testimonials}
          pauseOnHover
          speed="normal"
          direction="right"
        />
      </section>

      {/* ===CONTACT US=== */}
      <div
        className="rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden"
        id="contact"
      >
        <ContactUs email={email} about={about} social_handle={social_handles} />
      </div>
    </main>
  );
}
