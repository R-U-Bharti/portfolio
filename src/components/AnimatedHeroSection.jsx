import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedHeroTextLines } from "./AnimatedHeroTextLines";

const AnimatedHeroSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
  ready = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split("  ") : [title];
  useGSAP(() => {
    if (ready === false) return;
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });
    tl.fromTo(
      ".text-up-1",
      {
        y: "10vh",
        duration: 2,
        ease: "circ.out",
      },
      { y: 0, duration: 2, ease: "circ.out" },
      "up-anim"
    );
    tl.fromTo(
      ".text-up-2",
      {
        y: "30vh",
        duration: 2,
        ease: "circ.out",
      },
      { y: 0, duration: 2, ease: "circ.out" },
      "up-anim"
    );
  }, [ready]);
  return (
    <div ref={contextRef} className="flex flex-col justify-between h-screen">
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-4 pt-20 md:gap-8 h-full"
        >
          <p
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            className={`text-xs md:text-sm font-light tracking-[0.4rem] uppercase px-5 md:px-10 `}
          >
            <div className="text-up-1 text-[var(--theme-color)]">{subTitle}</div>
          </p>
          <div className="px-5 md:px-10">
            <h1
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              className={`text-up-2 text-[var(--theme-color)] lg:py-0 py-4 lg:pt-0 pt-5 flex flex-col gap-12 uppercase banner-text-responsive sm:gap-16 md:block `}
            >
              {titleParts.map((part, index) => (
                <span key={index}>{part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-5 md:px-10 ${textColor} flex justify-end `}>
        <div className="py-12 sm:py-16 px-0 w-full xl:w-[45vw] text-end">
          <AnimatedHeroTextLines
            text={text}
            ready={ready}
            className={`font-light uppercase value-text-responsive text-[var(--theme-color)]`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeroSection;
