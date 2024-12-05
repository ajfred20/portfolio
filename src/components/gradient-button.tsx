'use client'

import { cn } from "/src/utils/cn.ts";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
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
          <span className="text-sm">I'm available for work</span>
        </span>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:3px_3px]" />
      </div>
    </button>
  )
}

