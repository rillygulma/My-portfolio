import React from 'react'
import {useTypewriter, Cursor } from "react-simple-typewriter";
import {FaWhatsapp, FaTwitter, FaGithub, FaReact, FaNodeJs} from "react-icons/fa";
import {SiTailwindcss, SiFigma } from "react-icons/si";


function LeftBanner() {
        const githubUrl = 'https://github.com/rillygulma';
        const twitterUrl = 'https://twitter.com/home';
        const whatsappUrl = 'https://wa.me/23435504017';

        const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer. ", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
  return (
    <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-3'>
                <h4 className='text-xl font-normal'>HELLO TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'>Hi, I'm {" "} 
                <span className='text-designColor capitalize'>Rilwanu Idris</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>
                    a <span>{text}</span>
                   <Cursor
                     cursorBlinking="false"
                     cursorStyle="|"
                     cursorColor="#ff014f" 
                   
                   />
                    </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>I use amination as a third dimension by which to simplipy 
                    expriences and kuiding thro each and every interaction. I'm not 
                    adding motion just to spruce things up, but doing it in ways that.  
                    </p>
            </div>
            <div className='flex justify-between'>
              <div>
              <h2 className='text-base uppercase font-tittleFont mb-4'>
                Find me in
                </h2>
                <div className='flex gap-4'>
                  <a href={whatsappUrl} target='_blank' rel='noreferrer'>
                  <span className='bannerIcon'>
                    <FaWhatsapp />
                  </span>
                  </a>
                  <a href={twitterUrl} target='_blank' rel='noreferrer'>
                  <span className='bannerIcon'>
                    <FaTwitter />
                  </span>
                  </a>
                  <a href={githubUrl} target='_blank' rel='noreferrer'>
                  <span className='bannerIcon'>
                    <FaGithub />
                  </span>
                  </a>
                </div>
              </div>
              <div>
              <h2 className='text-base uppercase font-tittleFont mb-4'>
                BEST SKILL ON
                </h2>
                <div className='flex gap-4'>
                  <span className='bannerIcon'>
                    <FaReact />
                  </span>
                  <span className='bannerIcon'>
                    <FaNodeJs />
                  </span>
                  <span className='bannerIcon'>
                    <SiTailwindcss />
                  </span>
                  <span className='bannerIcon'>
                    <SiFigma />
                  </span>
                </div>
              </div>
            </div>
        </div>
  )
}

export default LeftBanner
