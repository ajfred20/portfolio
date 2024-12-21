"use client";

import Image from "next/image";
import { Button, SlideIn, TextReveal, Transition } from "./ui";
import { About } from "@/utils/interfaces";
import { useState } from "react";
import { PageLoad } from "./ui/page-load";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";

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
        <div className="absolute inset-0 rounded-full " />
      </div>
    </button>
  );
}

interface HeroProps {
  about: About;
}

export const Hero = ({ about }: HeroProps) => {
  const [hideLoader, setHideLoader] = useState(true);

  return (
    <section className="min-h-screen w-full relative flex items-center justify-center py-20 hero-gradient">
      <span className="blob size-1/2 absolute top-20 left-0 -z-10" />
      {hideLoader ? (
        <PageLoad hideLoader={hideLoader} setHideLoader={setHideLoader} />
      ) : (
        <div className="max-w-8xl mx-auto px-4 flex flex-col items-center text-center">
          <Transition>
            <Image
              src="/assets/fred.png"
              width={200}
              height={200}
              alt={about.name}
              className="rounded-full size-28 object-cover mb-8 bg-white"
              priority
            />
          </Transition>

          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="hero-title">
                <span className="gradient-text">Creative</span> frontend
                <br />
                dev💚 from <span className="gradient-text">Naija</span>👀
              </h1>
            </div>

            <p className="text-white/60 max-w-lg mx-auto">
              I am a 15yr old techie who develops webpages, user interfaces &
              programs that drag attention
            </p>

            <div className="flex flex-col gap-4 items-center">
              <Link href="https://wa.me/+2349091614903/">
                <GradientButton />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
