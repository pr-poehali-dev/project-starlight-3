import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/23c63ab2-f2cf-4d83-a2c5-8bf61e90222b/files/6a36edcf-251f-40e8-b58d-4b7dc0ed662e.jpg"
          alt="ASTON WoW Server"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-medium">
          World of Warcraft · Private Server
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight mb-6 leading-none">
          ASTON
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Легендарный мир Азерота ждёт тебя. Кастомный контент, честный баланс и живое сообщество.
        </p>
        <a
          href="#play"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300 text-sm"
        >
          Начать приключение
        </a>
      </div>
    </div>
  );
}