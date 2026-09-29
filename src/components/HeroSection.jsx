import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const headline = "WELCOME ITZFIZZ".split("");
const STATS = [
  { id: "1", value: "58%", label: "Increase in pick up point use" },
  { id: "2", value: "23%", label: "Decrease in customer phone calls" },
  { id: "3", value: "27%", label: "Increase in repeat orders" },
  { id: "4", value: "40%", label: "Decrease in support tickets" },
];

export default function HeroSection() {
  const wrapperRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-letter", {
        opacity: 0,
        y: 30,
        stagger: 0.04,
        duration: 0.6,
      });
    },
    { scope: wrapperRef },
  );
  return (
    <section ref={wrapperRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl md:text-5xl tracking-[0.3em] uppercase font-semibold flex flex-wrap justify-center">
          {headline.map((char, i) => (
            <span key={i} className="hero-letter inline-block">
              {char === " " ? "\u00A0\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl px-6">
          {STATS.map((s) => (
            <div key={s.id} className="hero-stat text-center">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
