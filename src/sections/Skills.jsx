import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Skills() {
  const data = [
    {
      title: "Frontend",
      techStack: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "React Query",
        "Tailwind CSS",
        "ShadCN",
        "Material UI",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "SASS",
        "GSAP",
        "Framer Motion",
        "React Three Fiber",
        "SEO",
      ],
    },
    {
      title: "Backend",
      techStack: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "WebSocket",
      ],
    },
    {
      title: "Tools",
      techStack: [
        "Git",
        "GitHub",
        "Jira",
        "BitBucket",
        "Postman",
        "Docker",
        "GitHub Actions",
        "CI/CD",
      ],
    },
    {
      title: "AI Tools",
      techStack: ["OpenAI", "Cursor", "Claude", "Trae", "Warp", "Windsurf"],
    },
    {
      title: "Other",
      techStack: [
        "Agile",
        "REST API",
        "GraphQL",
        "SDLC",
        "Performance Optimization",
        "LLM Integrations",
      ],
    },
  ];

  useGSAP(() => {
    gsap.from("#skill-container", {
      opacity: 0,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#skill-container",
        start: "top 100%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    gsap.from(".skill-block", {
      opacity: 0,
      scale: 0.8,
      stagger: 1,
      filter: "blur(4px)",
      ease: "power3.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: "#skill-container",
        start: "top 35%",
        end: "bottom 0%",
        scrub: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skill-container",
        start: "top top",
        end: "+=500%",
        scrub: true,
        pin: true,
        onEnterBack: () => {
          document.getElementsByTagName("figure")[0].style.opacity = 1;
          document.getElementById("desk-nav").style.opacity = 1;
        },
      },
    });

    tl.to(".skill-block", {
      xPercent: -100 * (data.length - 1),
      onComplete: () => {
        document.getElementsByTagName("figure")[0].style.opacity = 0;
        document.getElementById("desk-nav").style.opacity = 0;
      },
    });

    tl.to(
      "#skill-bar div",
      {
        width: "100%",
        ease: "none",
      },
      0
    );
  });

  return (
    <div id="Skills">
      <div
        id="skill-container"
        className="relative h-screen w-full bg-transparent backdrop-blur-3xl py-20 overflow-x-hidden"
        style={{
          backgroundSize: "120px 120px",
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)`,

          "--mask-stop": "10%",
                WebkitMaskImage: `
             linear-gradient(to bottom, transparent, black var(--mask-stop)),
            linear-gradient(to top, transparent, black var(--mask-stop))
          `,
          WebkitMaskComposite: "destination-in",
          maskComposite: "intersect",
        }}
      >
        <p
          className={` tracking-[0.5rem] uppercase text-black/80 absolute top-[10%] md:top-[15%] xl:top-[20%] left-[50%] xl:translate-x-0 -translate-x-[50%] text-center xl:left-[5%]`}
        >
          My Technical Skills
        </p>

        <div
          style={{ width: `${100 * data.length}vw` }}
          className="flex items-center justify-center h-full"
        >
          {data.map((skill, index) => (
            <div
              key={index}
              className="skill-block w-screen flex xl:flex-row flex-col justify-center items-center isolate relative gap-0 xl:gap-10"
            >
              <div className="p-4 text-[60px] md:text-[120px] xl:text-[150px] font-semibold font-sans text-transparent bg-gradient-to-br from-gold/30 to-black bg-clip-text">
                {skill.title}
              </div>
              <div className="w-full md:w-[500px] flex flex-wrap xl:justify-start justify-center md:px-0 px-2">
                {skill.techStack.map((tech, idx) => (
                  <p
                    key={idx}
                    className="group text-base md:text-2xl xl:text-xl font-mono text-black/70 animate-float whitespace-nowrap"
                  >
                    <span className="font-bold text-black/90">{`{`}</span>
                    <span className="tracking-wider group-hover:bg-gold/30 px-2">{`${tech}`}</span>
                    <span className="font-bold text-black/90">{`}`}</span>&nbsp;
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          id="skill-bar"
          className="w-[150px] h-2 bg-[#fff] rounded-full mx-auto -mt-20 xl:-mt-14"
        >
          <div className="h-2 bg-gold rounded-full w-1/3 animate-skill-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
