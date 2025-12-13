import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {

  const experience = [
        {
            "role": "Frontend Developer",
            "company": "Swipewire Technologies",
            "location": "Chennai",
            "duration": "Jul 2025 – Present",
            "tech_stack": [
                "React.js",
                "React Query",
                "TypeScript",
                "GSAP",
                "Framer Motion",
                "Three.js",
                "REST APIs",
                "CI/CD",
                "Git",
                "Docker",
                "Tailwind CSS"
            ],
            "responsibilities": [
                "Built scalable SaaS features improving data speed by 60%.",
                "Created smooth GSAP/Framer animations for better UX.",
                "Integrated 15+ APIs and optimized load performance.",
                "Led sprints and improved delivery through CI/CD."
            ]
        },
        {
            "role": "Software Developer",
            "company": "Gtropy",
            "location": "Delhi",
            "duration": "Jan 2024 – Feb 2025",
            "tech_stack": [
                "React.js",
                "Node.js",
                "WebSocket",
                "REST APIs",
                "GitHub",
                "Redux Toolkit",
                "PostgreSQL",
                "CI/CD"
            ],
            "responsibilities": [
                "Built real-time IoT dashboards for 10,000+ users.",
                "Improved debugging and reduced bugs by 30%.",
                "Enhanced app stability and scalability.",
                "Reduced technical debt by 25%."
            ]
        },
        {
            "role": "Software Developer",
            "company": "Aadrika Enterprises",
            "location": "Ranchi",
            "duration": "Aug 2022 – Dec 2023",
            "tech_stack": [
                "React.js",
                "Redux Toolkit",
                "JavaScript",
                "MongoDB",
                "REST APIs",
                "UI/UX"
            ],
            "responsibilities": [
                "Built govt platforms used by 50,000+ citizens.",
                "Mentored 15 interns on React and UI basics.",
                "Improved security and performance by 20%.",
                "Developed modular UI components."
            ]
        }
    ]

  const text = `I build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`;

  const serviceRefs = useRef([]);

  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);
  return (
    <section id="Experience" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Experience"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {experience.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(experience.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.company}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.role} &#8226; {service.location} &#8226; {service.duration}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.responsibilities.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-base md:text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {item}
                    </h3>
                    {itemIndex < service.responsibilities.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
