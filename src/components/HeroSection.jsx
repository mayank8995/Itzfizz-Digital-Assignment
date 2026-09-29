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
  const visualRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-letter", {
        opacity: 0,
        y: 30,
        stagger: 0.04,
        duration: 0.6,
      }).from(
        ".hero-stat",
        {
          opacity: 0,
          y: 20,
          scale: 0.98,
          duration: 0.5,
          stagger: 0.15,
        },
        "-=0.3",
      );

      gsap.to(visualRef.current, {
        x: () => wrapperRef.current.clientWidth - visualRef.current.offsetWidth,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          // markers: true,
        },
      });
    },

    { scope: wrapperRef },
  );

  return (
    <section ref={wrapperRef} className="wrapper relative h-[250vh] bg-black">
      <div className=" sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.4em] mr-[-0.4em] text-white/90">
          {headline.map((char, i) => (
            <span key={i} className="hero-letter inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl px-6">
          {STATS.map((s) => (
            <div
              key={s.id}
              className="hero-stat rounded-2xl border border-white/10 bg-white/3 px-6 py-5 text-center transition-colors hover:border-white/30"
            >
              <div className="text-3xl font-semibold tabular-nums text-white">
                {s.value}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <img
          ref={visualRef}
          src={`${import.meta.env.BASE_URL}sports-car.svg`}
          alt="rocket"
          className="absolute top-[15vh] left-0  will-change-transform"
        />
      </div>
    </section>
  );
}
