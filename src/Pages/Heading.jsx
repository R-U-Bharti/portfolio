import React from 'react'
import '../index.css'

const Heading = (props) => {
  return (
    <div className='z-50 w-full flex flex-col items-center justify-center gap-4 cursor-default group transition-all ease-in-out duration-1000 mb-10 md:mb-20'>
        <div className='text-3xl md:text-4xl text-center font-bold tracking-wide uppercase bg-gradient-to-r dark:from-neonFade dark:to-purple-800 from-neonDark to-purple-800 bg-clip-text text-transparent noto'>{props?.title}</div>
        <div className='bg-gray-500 dark:bg-white h-[0.3vh] w-[50vw] md:w-[20vw] group-hover:w-[60vw] md:group-hover:w-[30vw] transition-all ease-in-out duration-500'></div>
    </div>
  )
}

export default Heading