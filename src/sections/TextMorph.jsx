import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GtropySvg from "../components/GtropySvg";
import AadrikaSvg from "../components/AadrikaSvg";
import SwipewireSvg from "../components/SwipewireSvg";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

export default function TextMorph() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#tm-container",
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: true,
      },
    });


    // Step 1 → Aadrika → Gtropy
    tl.to(
      "#aadrika-path-1",
      { morphSVG: "#gtropy-path-1", ease: "power2.inOut" },
      "step1"
    ).to(
      "#aadrika-path-2",
      { morphSVG: "#gtropy-path-2", ease: "power2.inOut" },
      "step1"
    );

    // Step 2 → Gtropy → Swipe (use the SAME visible paths!)
    tl.to(
      "#aadrika-path-1",
      { morphSVG: "#swipe-path-1", ease: "power2.inOut" },
      "step2"
    ).to(
      "#aadrika-path-2",
      { morphSVG: "#swipe-path-2", ease: "power2.inOut" },
      "step2"
    );
  });

  return (
    <div
      id="tm-container"
      className="h-screen w-full flex-col gap-4 flex justify-center items-start"
    >
      <AadrikaSvg width="1000" height="100" fill="#ff0000" className="my-svg-1" />
      <GtropySvg
        width="1000"
        height="100"
        fill="#ff0000"
        className="my-svg-2"
        style={{ visibility: "hidden" }}
      />
      <SwipewireSvg
        width="1000"
        height="100"
        fill="#ff0000"
        className="my-svg-3"
        style={{ visibility: "hidden" }}
      />
    </div>
  );
}
