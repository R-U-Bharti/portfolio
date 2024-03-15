import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Pages/Navbar'
import 'animate.css'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'
import Fade from 'react-reveal/Fade'
import { BiSolidUpArrow } from 'react-icons/bi'
import Heading from './Pages/Heading'
import 'atropos/css'
import Atropos from 'atropos/react';
import { Toaster } from 'react-hot-toast'

function App() {


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the top of the page (Y position is 0)
      setIsVisible(window.scrollY > 0);
    };

    // Add the event listener to detect scrolling
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>

      <Toaster
        toastOptions={{
          duration: 1500,
          style: {
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            userSelect: 'none'
          },
          error: {
            duration: 3000,
            style: {
              border: '1px solid rgba(255,0,0,0.10)',
              background: 'rgba(120, 0, 0, 0.25)',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 500
            },
          },
          success: {
            duration: 3000,
            style: {
              border: '1px solid rgba(0,255,0,0.10)',
              background: 'rgba(0, 120, 0, 0.25)',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 500
            },
          },
        }}
      />

      <div className='relative noto'>


        <div id='home' className='md:h-[100vh] p-4 md:p-8 dark:bg-[#16171d] bg-[#f9f9f9]'>
          <ul class="background dark:bg-[#0a0a0a] bg-gray-100">
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
            <li className='dark:bg-[#ffffff54] bg-[#a8a8a854]'></li>
          </ul>

          <Navbar />
          <Fade duration={300} bottom >
            <Home />
          </Fade>
        </div>

        <Fade duration={300} bottom>
          <div id='experience' className='h-full md:h-max bg-transparent backdrop-blur-lg border-t border-b relative'>
            <div className=' p-4 md:p-20 z-50'>
              <Heading title={'Work Experience'} logo={'./experienceLogo.webp'} />
              <Experience />
            </div>
          </div>
        </Fade>

        <Fade duration={300} bottom>
          <div id='skills' className='h-full md:h-max bg-transparent backdrop-blur-lg border-t border-b relative'>
            <div className=' p-4 md:px-20 md:py-10 z-50'>
              <Heading title={'Skills'} logo={'./experienceLogo.webp'} />
              <Skills />
            </div>
          </div>
        </Fade>

        <Fade duration={300} bottom>
          <div id='Contact' className='h-full md:h-max backdrop-blur-lg border-t border-b relative'>
            <div className=' p-4 z-50'>
              <Heading title={"Lets' Talk"} logo={'./experienceLogo.webp'} />
              <Contact />
            </div>
          </div>
          <div className='z-50 dark:bg-black/80 bg-white/50 text-center font-semibold tracking-wider dark:text-white border-t text-black/80 text-xs py-1'>
        Designed By @ R U Bharti
      </div>
        </Fade>

        {
          isVisible &&
          <div onClick={handleBackToTop} className='bg-neon w-max md:p-4 p-2 hover:animate-bounce md:text-xl text-md rounded-full fixed bottom-4 right-2 md:bottom-2 md:right-2 hover:bg-neonDark hover:shadow-md hover:shadow-neon border border-neonDark hover:border-neonFade transition-all duration-300 cursor-pointer group'>
            <a className='transform group-hover:translate-y-6 text-white '><BiSolidUpArrow /></a>
          </div>
        }


      </div>
    </>
  )
}

export default App