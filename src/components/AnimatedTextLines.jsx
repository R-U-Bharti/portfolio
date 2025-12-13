import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export const AnimatedTextLines = ({ text, className, ready }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const lines = text.split("\n").filter(line => line.trim() !== "");
  useGSAP(() => {
    if (ready === false) return;
    gsap.fromTo(
      ".text-up-3",
      {
        y: "20vh",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      },
      { y: 0, duration: 3, duration: 2, stagger: 0.3, ease: "power3.inOut" }
    );
  }, [ready]);

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <div
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          key={index}
          ref={el => (lineRefs.current[index] = el)}
        >
          <span className={`text-up-3 block tracking-wide ${index == 0 ? ' text-xl pb-4': 'text-base leading-relaxed lg:pt-0 pt-2'}`}>{line}</span>
        </div>
      ))}
    </div>
  );
};
