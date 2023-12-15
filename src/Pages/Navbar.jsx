import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {


  const [isToggled, setIsToggled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)
  const [modalOpen2, setModalOpen2] = useState(false)

  let menu = [
    { name: "Home", link: "#home" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Training", link: "#training" },
    { name: "Skills", link: "#skills" },
    // { name: "Download CV", link: cv_url },
    { name: "Contact", link: "#Contact" },
  ]

  let cv_url = "https://drive.google.com/file/d/1KwjTSQBYL6_WOiChyWwLCXzTi9tTQqVl/view?usp=drivesdk"

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
    setModalOpen(false)
    setModalOpen2(false)
  };

  return (
    <>
      <nav className={`animate__animated animate__slideInDown animate__faster flex items-center justify-between border-black dark:border-white border-b-2 md:border-b pb-4`}>
        <div onClick={() => setModalOpen2(true)} className="cursor-pointer text-2xl flex gap-4 items-center font-semibold animate__animated animate__slideInRight  animate__faster">
          <img src='./icon.jpg' className='w-9 h-9 rounded-full ' alt="" srcset="" />
          <a className='md:text-[1.7vw]'>Portfolio</a>
        </div>

        <div className='hidden md:flex gap-6 items-center text-lg  animate__animated animate__slideInLeft  animate__faster'>
          {
            menu?.map((elem) => <>
              <a href={elem?.link} className='hover:text-neon md:text-[1.35vw] font-semibold hover:drop-shadow'>{elem?.name}</a>
            </>)
          }
          <button className='text-sm button1 px-4 py-2 dark:text-white text-black hover:text-white' onClick={() => setModalOpen(true)} >Download CV</button>
        </div>

        <div className="md:hidden visible animate__animated animate__slideInLeft  animate__faster flex flex-col items-center justify-center cursor-pointer drop-shadow transition-all duration-200 w-[4vw] h-[4vw] rounded-full" onClick={handleToggleClick}>
          <div className={`w-7 h-[2px] bg-gray-900 dark:bg-white transform transition-all duration-300 ${isToggled ? 'rotate-45' : 'rotate-0'}`}></div>
          <div className={`w-7 h-[2px] bg-gray-900 dark:bg-white my-1.5 transform transition-all duration-300 ${isToggled ? 'hidden' : 'visible'}`}></div>
          <div className={`w-7 h-[2px] bg-gray-900 dark:bg-white transform transition-all duration-300 ${isToggled ? '-rotate-45' : 'rotate-0'}`}></div>
        </div>

      </nav>

      {/* =======Mobile Menu======= */}
      <div className={`md:hidden flex flex-col items-center justify-center bg-none dark:bg-zinc-900 bg-gray-200 transition-all duration-300 gap-8 text-xl overflow-clip ${isToggled ? 'h-[85vh] border-b-2 border-black dark:border-white animate__animated animate__fadeIn animate__faster' : 'h-[0vh]'}`}>
        {
          menu?.map((elem) => <>
            <a onClick={handleToggleClick} href={elem?.link} className='group hover:text-neon font-semibold hover:drop-shadow pb-2 w-[40vw] text-center'>
              <span>{elem?.name}</span>
              <div className='transition-all duration-500 ease-in-out mt-2 h-[0vh] group-hover:h-[0.1vh] w-[0vw] group-hover:w-[40vw] bg-gray-900 dark:bg-white'></div>
            </a>
          </>)
        }
        <button onClick={() => (setModalOpen(true), setIsToggled(false))} className='text-sm button px-4 py-2 bg-white dark:bg-black dark:text-white text-black hover:bg-white hover:text-black'>Download CV</button>
      </div>

      {modalOpen && <dialog style={{zIndex: 999}} className='h-screen w-screen top-0 fixed bg-transparent backdrop-blur-lg animate__animated animate__zoomIn animate__faster flex flex-col gap-10 items-center justify-center'>
        <span className=' text-xl text-white bg-red-300 hover:bg-red-400 absolute top-2 md:top-4 right-2 md:right-4 rounded-full p-1 px-3 cursor-pointer z-50 select-none' onClick={() => setModalOpen(false)}>&times;</span>
        <img src={'./cvQr.png'} alt="" srcset="" className='mix-blend-difference md:p-0 p-4 md:h-[30vw]' />
        <a href='./CV.pdf' download={true} className='button3 dark:text-[#1BFD9C] text-green-800 dark:hover:text-[#82ffc9] hover:text-white' >Download CV</a>
      </dialog>}

      {modalOpen2 && <dialog style={{zIndex: 999}} className='h-screen w-screen top-0 fixed bg-transparent backdrop-blur-lg animate__animated animate__zoomIn animate__faster flex flex-col gap-10 items-center justify-center'>
        <span className=' text-xl text-white bg-red-300 hover:bg-red-400 absolute top-2 md:top-4 right-2 md:right-4 rounded-full p-1 px-3 cursor-pointer z-50 select-none' onClick={() => setModalOpen2(false)}>&times;</span>
        <img src={'./myPage.png'} alt="" srcset="" className='mix-blend-difference md:p-0 p-4 md:h-[30vw]' />
      </dialog>}

    </>

  );
};

export default Navbar;
