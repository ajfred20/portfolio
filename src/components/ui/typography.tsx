"use client";

import { cn } from "@/utils/cn";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, useState } from "react";

interface SectionHeadingProps extends HTMLMotionProps<"h3"> {}

export const SectionHeading = ({
  className,
  ...props
}: SectionHeadingProps) => {
  return (
    <motion.h3
      className={cn(
        "text-4xl md:text-6xl font-semibold md:px-4 px-2 pb-10 mx-auto",
        className
      )}
      {...props}
    />
  );
};

interface TextRevealProps {
  children?: React.ReactNode;
  className?: string;
}

export const TextReveal = ({
  children = "",
  className = "",
}: TextRevealProps) => {
  const [hover, setHover] = useState(false);

  if (typeof children !== "string") {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn("relative cursor-pointer", className)}
    >
      <div className="overflow-hidden">
        {children.split("").map((char, i) => (
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: hover ? "-100%" : 0 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            key={i}
            className="inline-block "
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      <div className="absolute top-0 overflow-hidden">
        {children.split("").map((char, i) => (
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: hover ? "0%" : "100%" }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            key={i}
            className="inline-block "
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export function PerspectiveText({
  children,
  hover,
}: {
  children: string;
  hover?: boolean;
}) {
  return (
    <motion.div className="relative overflow-hidden whitespace-pre">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: hover ? "-100%" : 0 }}
        layout
        transition={{ delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
        className="py-2"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: hover ? 0 : "100%" }}
        layout
        transition={{ delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
        className="absolute left-0 top-0 py-2"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
