import { Flow } from "@/icons/flow";
import { Intellisense } from "@/icons/intellisense";
import { Keyboard } from "@/icons/keyboard";
import { MagicBranch } from "@/icons/magic-branch";
import { Prebuilds } from "@/icons/prebuilds";
import { Preview } from "@/icons/preview";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const content = [
  {
    icon: Prebuilds,
    title: "Resonance Feeds",
    text: "Curated content to align with your emotions and uplift your state of mind.",
  },
  {
    icon: Intellisense,
    title: "Growth Journeys",
    text: "Personalized paths to explore interests and foster meaningful growth.",
  },
  {
    icon: Flow,
    title: "Ripple Effects",
    text: "Track the positive chain reactions sparked by your actions and connections.",
  },
  {
    icon: MagicBranch,
    title: "Sparks of Inspiration",
    text: "Personalized prompts to ignite creativity and motivate action.",
  },
  {
    icon: Keyboard,
    title: "Mindful Moments",
    text: "Gentle nudges to pause and connect with the world beyond the screen.",
  },
  {
    icon: Preview,
    title: "Bloomsphere Map",
    text: "Visualize your impact and contributions in a global community of growth.",
  },
];

export const MoreFeatures = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "50vh"]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity, y }}
      className="mx-auto grid w-full max-w-[120rem] sm:grid-cols-3 gap-40 py-96 grid-cols-1 sm:gap-16 sm:py-48"
    >
      {content.map(({ icon: Icon, title, text }) => (
        <div key={title} className="sm:mb-12 flex flex-col items-center">
          <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#151515] sm:mx-auto">
            <Icon className="h-12 w-12 sm:mx-auto" />
          </span>
          <h3 className="mb-2 text-xl text-white text-center sm:text-lg">{title}</h3>
          <p className="text-md text-center sm:text-sm">{text}</p>
        </div>
      ))}
    </motion.section>
  );
};
