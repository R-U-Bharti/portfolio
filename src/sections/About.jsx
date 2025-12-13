import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `I create high-performance digital experiences—React and Next.js on the surface, optimized Node.js and AI integrations under the hood. 

📈 Proven track record of boosting system efficiency, optimizing load times, and elevating A11y (Accessibility) standards.
👥 Experienced in collaborating with cross-functional teams, ensuring solutions align with both business goals and user needs.
🌐 Built and optimized platforms serving 10,000–50,000+ users with reliability and smooth UX.
🔧 Strong focus on best practices, clean architecture, and maintainability across the stack.
📚 Committed to continuous learning, staying updated with modern tools, patterns, and industry trends.`;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="About" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex xl:-mt-20 flex-col items-center justify-between gap-16 px-5 md:px-10 pb-16 lg:flex-row  text-white/80">
        <img
          ref={imgRef}
          src="profile.jpg"
          alt="man"
          className="h-[600px] rounded-3xl px-5 md:px-10"
        />
        <AnimatedTextLines text={aboutText} className={"w-full px-5 md:px-10"} />
      </div>
    </section>
  );
};

export default About;
