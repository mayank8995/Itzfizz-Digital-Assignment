import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroSection() {
  return (
    <section ref={wrapperRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center text-white"></div>
    </section>
  );
}
