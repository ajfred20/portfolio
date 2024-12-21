"use client";

import { motion } from "framer-motion";
import {
  Input,
  SectionHeading,
  SlideIn,
  Textarea,
  TextReveal,
  Transition,
} from "./ui";
import { useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { About, SocialHandle } from "@/utils/interfaces";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

interface ContactProps {
  email: string;
  social_handle: SocialHandle[];
  about: About;
}

export const ContactUs = ({ email, social_handle, about }: ContactProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success(
              "Message sent successfully! I'll get back to you soon."
            );
            form.current?.reset();
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
            toast.error("Failed to send message. Please try again later.");
            setLoading(false);
          }
        );
    }
  };

  return (
    <motion.section className="relative">
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px]" />
      <div className="p-4 md:p-8 md:px-16">
        <SectionHeading className="">
          <SlideIn className="text-white/40">You wanna chat,</SlideIn> <br />{" "}
          <SlideIn>let's do it.</SlideIn>
        </SectionHeading>
        <div className="grid md:grid-cols-2 gap-10 md:pt-16">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex gap-4">
              <Transition className="w-full">
                <Input
                  name="user_name"
                  placeholder="Full name"
                  className="border-0 border-b rounded-none"
                  required
                />
              </Transition>
            </div>
            <Transition className="w-full">
              <Input
                name="user_email"
                placeholder="Email"
                type="email"
                className="border-0 border-b rounded-none"
                required
              />
            </Transition>
            <div className="space-y-2">
              <Transition>
                <textarea
                  name="message"
                  className="w-full min-h-[100px] rounded-none border-0 border-b resize-none bg-transparent"
                  placeholder="Enter your message"
                  required
                />
              </Transition>
            </div>
            <div>
              <Transition>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover="whileHover"
                  initial="initial"
                  className="border border-white/30 px-8 py-2 rounded-3xl relative overflow-hidden"
                >
                  <TextReveal>
                    {loading ? "SENDING..." : "SEND MESSAGE"}
                  </TextReveal>
                </motion.button>
              </Transition>
            </div>
          </form>
          <div className="md:justify-self-end flex flex-col">
            <div className="pb-4">
              <Transition>
                <span className="text-white/90">Get in touch</span>
              </Transition>
              <div className="text-2xl md:text-4xl font-bold py-2">
                <Transition>
                  <TextReveal>ajfred2008@gmail.com</TextReveal>
                </Transition>
              </div>
              <Transition>
                <div className="pb-1 text-white/80">+2349091614903</div>
              </Transition>
              <Transition>
                <div className="text-white/80">Lagos, Nigeria</div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-between md:px-8 px-2 py-4 text-sm">
        <Transition>
          <div>&copy; {new Date().getFullYear()} Aj Fred</div>
        </Transition>
        <Transition>
          <p>
            Built by with 💚👀 @
            <Link href={"https://x.com/iamajfred_"} className="hover:underline">
              Aj Fred
            </Link>
          </p>
        </Transition>
      </footer>
    </motion.section>
  );
};
