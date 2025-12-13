import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeroSection from "../components/AnimatedHeroSection";
import mediaQuery from '../components/MediaQuery.jsx';

const Hero = ({ ready }) => {

const { isMobile } = mediaQuery();

  const isCMobile = useMediaQuery({ maxWidth: 853 });

  const text = `I develop high-performance React/Next.js
   applications, optimized Node.js backends and 
   AI-driven solutions.`;
  const mobileText = `I develop high-performance React and 
  Next.js applications, optimized Node.js 
  backends and  AI-driven solutions.`;

  return (
    <section id="home" className="flex flex-col justify-between min-h-screen">
      <AnimatedHeroSection
        subTitle={"Frontend Developer | AI Enthusiast"}
        title={"R U  Bharti"}
        ready={ready}
        text={isMobile ? mobileText : text}
        textColor={"text-black"}
      />
      <figure
        className="fixed inset-0 -z-50"
        style={{
          width: "100vw",
          height: "100vh",
          transition: "opacity 0.25s ease",
        }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.3} />
          <Float speed={0.1}>
            <Planet scale={isCMobile ? 0.7 : 0.9} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
