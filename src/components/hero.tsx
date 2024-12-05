"use client";

import Image from "next/image";
import { SlideIn, TextReveal, Transition } from "./ui";
import { About } from "@/utils/interfaces";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageLoad } from "./ui/page-load";
import { cn } from "/src/utils/cn";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function GradientButton({ className, ...props }: GradientButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px]",
        className
      )}
      {...props}
    >
      {/* Gradient border */}
      <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Inner background */}
      <div className="inline-flex h-full w-full cursor-pointer items-center justify-start rounded-full bg-black px-4 py-2.5 text-sm font-medium text-white backdrop-blur-3xl relative">
        {/* Pulsing green circle */}
        <div className="flex items-center mr-2">
          <div className="relative h-2 w-2">
            <div className="absolute inset-0 rounded-full bg-green-400"></div>
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
          </div>
        </div>

        {/* Button text */}
        <span className="relative z-10 flex items-center">
          <span className="text-sm">I&apos;m available for work</span>
        </span>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:3px_3px]" />
      </div>
    </button>
  );
}

export const Hero = ({ about }: { about: About }) => {
  const [hideLoader, setHideLoader] = useState(true);

  return (
    <section className="h-dvh w-dvw overflow-hidden relative">
      <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
      {hideLoader ? (
        <PageLoad hideLoader={hideLoader} setHideLoader={setHideLoader} />
      ) : (
        <div className="relative h-full w-full">
          <div className="flex items-center justify-center flex-col h-full pb-10">
            <Transition>
              <Image
                src="/assets/image.jpg"
                width={200}
                height={200}
                alt="Aj Fred"
                className="rounded-full size-28 object-cover"
              />
            </Transition>
            <div className="py-6 flex items-center flex-col">
              <h1 className="md:text-7xl text-3xl font-bold overflow-hidden">
                <SlideIn>Hola! I&apos;m AJ Fred</SlideIn>
              </h1>
              <h2 className="md:text-7xl text-3xl overflow-hidden">
                <SlideIn>A Web Developer</SlideIn>
              </h2>
            </div>
            <Transition viewport={{ once: true }} className="w-full">
              <p className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2 text-center">
                <span>
                  I craft amazing websites and user interfaces that drag
                  attention
                </span>
              </p>
            </Transition>
            <Transition viewport={{ once: true }}>
              <GradientButton />
            </Transition>
          </div>
        </div>
      )}
    </section>
  );
};
