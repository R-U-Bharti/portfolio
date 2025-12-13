import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import AadrikaSvg from "../components/AadrikaSvg";
import GtropySvg from "../components/GtropySvg";
import SwipewireSvg from "../components/SwipewireSvg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

export default function Experience() {
  const data = [
    {
      role: "Frontend Developer",
      company: <SwipewireSvg />,
      location: "Chennai",
      duration: "07 - 2025*",
      tech_stack: [
        "React.js",
        "Next.js",
        "GSAP",
        "REST APIs",
        "Git",
        "Tailwind CSS",
      ],
      responsibilities: [
        "Built scalable SaaS features improving data speed by 60%.",
        "Created smooth GSAP/Framer animations for better UX.",
        "Integrated 15+ APIs and optimized load performance.",
        "Led sprints and improved delivery through CI/CD.",
      ],
    },
    {
      role: "Software Developer",
      company: <GtropySvg style={{ visibility: "hidden" }} />,
      location: "Delhi",
      duration: "01/2024 – Feb 2025",
      tech_stack: [
        "React.js",
        "Node.js",
        "REST APIs",
        "GitHub",
        "Redux Toolkit",
      ],
      responsibilities: [
        "Built real-time IoT dashboards for 10,000+ users.",
        "Improved debugging and reduced bugs by 30%.",
        "Enhanced app stability and scalability.",
        "Reduced technical debt by 25%.",
      ],
    },
    {
      role: "Software Developer",
      company: <AadrikaSvg style={{ visibility: "hidden" }} />,
      location: "Ranchi",
      duration: "Aug 2022 – Dec 2023",
      tech_stack: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "GitHub",
        "REST APIs",
      ],
      responsibilities: [
        "Built govt platforms used by 50,000+ citizens.",
        "Mentored 15 interns on React and UI basics.",
        "Improved security and performance by 20%.",
        "Developed modular UI components.",
      ],
    },
  ];

  useGSAP(() => {
    // Get viewport-specific Y offset
    const getYOffset = () => {
      const vw = window.innerWidth;
      if (vw < 640) return -24; // mobile
      if (vw < 1024) return -28; // tablet
      return -30; // desktop
    };

    const yOffset = getYOffset();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#exp-container",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: 5,
        ease: "power3.inOut",
      },
    });

    // Step 1 → Swipewire → Gtropy
    tl.to(
      "#swipe-path-1",
      { morphSVG: "#gtropy-path-1", duration: 1 },
      "step1"
    ).to("#swipe-path-2", { morphSVG: "#gtropy-path-2", duration: 1 }, "step1");

    // Step 2 → Gtropy → Aadrika
    tl.to(
      "#swipe-path-1",
      { morphSVG: "#aadrika-path-1", duration: 1 },
      "step2"
    ).to(
      "#swipe-path-2",
      { morphSVG: "#aadrika-path-2", duration: 1 },
      "step2"
    );

    // Content animations with viewport-specific offsets
    tl.to(".exp-content-up", { y: yOffset, delay: 0.1 }, "step1");
    tl.to(".exp-content-up", { y: yOffset * 2, delay: 0.1 }, "step2");
  }, []);

  const renderResp = ind => {
    return (
      <>
        {data.map((item, idx) => (
          <div
            key={idx}
            className="exp-content-up shrink-0 text-start tracking-wider grid grid-cols-12"
          >
            <span className="col-span-1 mt-2.5 lg:mt-3">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                className="size-[6px] sm:size-[7px] lg:size-[8px]"
                viewBox="0 0 26 26"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M26,13c0,7.18-5.818,13-13,13C5.82,26,0,20.18,0,13C0,5.82,5.82,0,13,0C20.182,0,26,5.82,26,13z" />
                </g>
              </svg>
            </span>
            <span className="col-span-11 -ml-10 text-sm sm:text-base lg:text-lg">
              {item.responsibilities[ind]}
            </span>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div
        className="h-screen w-screen flex justify-center items-center px-4 sm:px-8 lg:px-12 py-10 overflow-x-clip"
        id="exp-container"
      >
        {/* Max-width container for better large screen layout */}
        <div className="w-full max-w-[1800px] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 xl:gap-20">
          {/* SVG Logo Section */}
          <div className="w-full lg:w-[48%] xl:w-[45%] text-start flex justify-center lg:justify-end">
            <div className="w-full max-w-[550px] lg:max-w-[650px] xl:max-w-[700px]">
              <SwipewireSvg
                width="100%"
                height="100"
                fill="#ff0000"
                className="-ml-10 sm:-ml-12 lg:-ml-14 drop-shadow-xl drop-shadow-zinc-400"
              />
              <GtropySvg
                width="100%"
                height="auto"
                fill="#ff0000"
                className="-ml-10 sm:-ml-12 lg:-ml-14"
                style={{ visibility: "hidden" }}
              />
              <AadrikaSvg
                width="100%"
                height="auto"
                fill="#ff0000"
                className="-ml-10 sm:-ml-12 lg:-ml-14"
                style={{ visibility: "hidden" }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[52%] xl:w-[55%] max-w-[800px]">
            <div className="w-full flex flex-col gap-4 sm:gap-5 lg:gap-6 leading-[26px] sm:leading-[30px] lg:leading-[34px]">
              {/* Role and Duration */}
              <div className="flex flex-col justify-start h-[26px] sm:h-[30px] lg:h-[34px] leading-[26px] sm:leading-[30px] lg:leading-[34px] overflow-hidden">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="exp-content-up flex h-full w-full justify-between shrink-0 text-base sm:text-lg lg:text-xl xl:text-2xl"
                  >
                    <span className="font-semibold">{item.role}</span>
                    <span className="text-sm sm:text-base lg:text-lg">
                      {item.duration}
                    </span>
                  </div>
                ))}
              </div>

              {/* Responsibilities */}
              <ul className="ml-4 sm:ml-5 h-full space-y-0">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <li
                    key={idx}
                    className="h-[26px] sm:h-[30px] lg:h-[34px] leading-[26px] sm:leading-[30px] lg:leading-[34px] overflow-hidden"
                  >
                    {renderResp(idx)}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="h-[26px] sm:h-[30px] lg:h-[34px] leading-[26px] sm:leading-[30px] lg:leading-[34px] flex flex-col overflow-hidden w-full">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="exp-content-up flex flex-col h-full shrink-0 overflow-hidden w-full"
                  >
                    <div className="flex gap-x-3 sm:gap-x-4 lg:gap-x-5 flex-wrap w-full">
                      {item.tech_stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="shrink-0 underline text-xs sm:text-sm lg:text-base font-semibold text-gray-700 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
