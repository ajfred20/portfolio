import * as React from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";

export const Avatar = React.forwardRef<
  React.ElementRef<"div">,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex shrink-0 overflow-hidden rounded-full bg-neutral-200",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

export const AvatarImage = React.forwardRef<
  React.ElementRef<"img">,
  React.ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    width: number;
    height: number;
  }
>(({ className, src, width, height, ...props }, ref) => (
  <Image
    ref={ref}
    src={src}
    className={cn("h-full w-full object-cover", className)}
    alt={props.alt || "Avatar"}
    width={width}
    height={height}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = React.forwardRef<
  React.ElementRef<"div">,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center bg-neutral-500 text-neutral-100",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";
