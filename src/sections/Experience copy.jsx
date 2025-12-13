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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#exp-container",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
      },
    });

    // First transition: Move content to -30 and morph to Gtropy
    tl.to(".exp-content-up", {
      y: -30,
      duration: 1,
      onStart: () => {
        gsap.to("#swipe-path-1", {
          morphSVG: "#gtropy-path-1",
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to("#swipe-path-2", {
          morphSVG: "#gtropy-path-2",
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
    });

    // Second transition: Move content to -60 and morph to Aadrika
    tl.to(".exp-content-up", {
      y: -60,
      duration: 1,
      onStart: () => {
        gsap.to("#swipe-path-1", {
          morphSVG: "#aadrika-path-1",
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to("#swipe-path-2", {
          morphSVG: "#aadrika-path-2",
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
    });
  }, []);

  const renderResp = ind => {
    return (
      <>
        {data.map((item, idx) => (
          <div
            key={idx}
            className="exp-content-up shrink-0 text-start tracking-wider grid grid-cols-12"
          >
            <span className="col-span-1 mt-2.5">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                className="size-[7px]"
                viewBox="0 0 26 26"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M26,13c0,7.18-5.818,13-13,13C5.82,26,0,20.18,0,13C0,5.82,5.82,0,13,0C20.182,0,26,5.82,26,13z" />
                </g>
              </svg>
            </span>
            <span className="col-span-11 -ml-15">
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
        className="h-screen w-screen flex justify-center items-center p-10 *:leading-[28px] overflow-x-clip"
        id="exp-container"
      >
        <div className="w-1/2 h-1/2  text-4xl text-start pt-2">
          <SwipewireSvg
            width={650}
            height={100}
            fill="#ff0000"
            className="-ml-14 drop-shadow-xl drop-shadow-zinc-400"
          />
          <GtropySvg
            width={650}
            height={100}
            fill="#ff0000"
            className="-ml-14"
            style={{ visibility: "hidden" }}
          />
          <AadrikaSvg
            width={650}
            height={100}
            fill="#ff0000"
            className="-ml-14"
            style={{ visibility: "hidden" }}
          />
        </div>

        <div className="w-[45%] h-1/2 ">
          <div className="w-full flex flex-col gap-4 h-max">
            <div className="flex flex-col justify-start h-[28px] leading-[28px] overflow-hidden">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="exp-content-up flex h-full w-full justify-between shrink-0"
                >
                  <span className=" font-semibold">{item.role}</span>
                  <span className="">{item.duration}</span>
                </div>
              ))}
            </div>
            <ul className=" ml-4 h-full">
              {Array.from({ length: 4 }).map((_, idx) => (
                <li
                  key={idx}
                  className="h-[28px] leading-[28px] overflow-hidden"
                >
                  {renderResp(idx)}
                </li>
              ))}
            </ul>

            <div className="h-[28px] leading-[28px] flex flex-col overflow-hidden w-[90%]">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="exp-content-up flex flex-col h-full shrink-0 overflow-hidden w-full"
                >
                  <div className="flex gap-x-4 flex-wrap w-full ">
                    {item.tech_stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="shrink-0 underline text-sm font-semibold text-gray-700  mb-2"
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
    </>
  );
}
