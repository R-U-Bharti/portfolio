import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);
  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  const scrollToSection = section => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = ["Home", "Skills", "Experience", "About", "Contact"];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-6xl">
          {menuItems.map((section, index) => (
            <div key={index} ref={el => (linksRef.current[index] = el)}>
              <Link
                className="transition-all duration-300 cursor-pointer hover:text-yellow-500"
                to={`${section}`}
                smooth
                offset={0}
                duration={2000}
              >
                {section}
              </Link>
            </div>
          ))}
          <di>
            <a
              className="transition-all text-xl md:text-3xl duration-300 cursor-pointer text-zinc-400 hover:text-yellow-500"
              smooth
              offset={0}
              duration={2000}
              href="/Kumar R U Bharti-Frontend Developer.pdf"
              download={true}
            >
              {"{ Download Resume }"}
            </a>
          </di>
        </div>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p
              onClick={() =>
                window.open("mailto:kumarrubharti.rtcit@gmail.com", "_blank")
              }
              className="text-xl tracking-widest lowercase text-pretty cursor-pointer hover:text-yellow-500"
            >
              kumarrubharti.rtcit@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 text-sm leading-loose tracking-widest uppercase transition-colors duration-300"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        className="xl:hidden fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-5 md:right-10"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>

      <div
        style={{ transition: "opacity 0.25s ease" }}
        id="desk-nav"
        className="xl:block hidden fixed z-50 top-2 left-1/2 -translate-x-1/2"
      >
        <div className="flex items-center gap-8 px-6 py-2 rounded-xl border border-black/5 bg-white/10 backdrop-blur-md shadow-lg">
          {/* Navigation Links */}
          <div className="flex items-center gap-6 text-sm uppercase font-light">
            {menuItems.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(section)}
                className="text-black/70 hover:text-yellow-600 transition-all duration-300 cursor-pointer tracking-wide"
              >
                {section}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-black/10" />

          {/* Download Button */}
          <a
            href="/Kumar R U Bharti-Frontend Developer.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--theme-color)] text-white font-medium text-sm uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
