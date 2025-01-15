import { GithubIcon } from "@/icons/github";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  // in scrollYProgress = 0, opacity = 1, and so on
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
    >
      <motion.div
        style={{ position, scale, x: "-50%" }}
        className="fixed left-1/2 z-10 flex flex-col items-center px-4 md:px-8 lg:px-16"
      >
        <p className="text-lg md:text-xl font-light">
          <span className="font-medium">Bloom</span>
        </p>
        <p className="mb-4 text-center text-sm md:text-md font-light text-text">
          <a
            href="#"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            "A society grows great when old people plant trees whose shade they know they shall never sit in."
          </a>
        </p>

        <h1 className="mb-12 text-center font-heading text-2xl md:text-3xl leading-[1.2]">
          Connections
          <br />
          Reimagined
        </h1>
      </motion.div>
    </motion.section>
  );
};
