import React from 'react'
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { contactImg } from '../../assets'

function ContactLeft() {
    const facebookUrl = 'https://web.facebook.com/?_rdc=1&_rdr'
    const twitterUrl = 'https://twitter.com/home';
    const whatsappUrl = 'https://wa.me/23435504017';
  return (
    <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg
         shadow-shadowOne flex flex-col gap-8 justify-center'>
            <img className='w-full h-65 object-cover rounded-lg mb-2'
            src={contactImg} alt='contactImg' />
            <div className='flex flex-col gap-4'>
                <h3 className='text-3xl font-bold text-white'>Rilwanu Idris</h3>
                <p className='text-lg font-normal text-gray-400'>
                    MERN Stack Developer
                </p>
                <p className='text-base text-gray-400 tracking-wide'>
                MERN developers are responsible for writing reusable, testable, and efficient code and developing and designing front end web applications. 
                They are in charge of applying CSS methodologies and tools into creating complete websites.
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Phone: <span className='text-lightText'>+234 8035504017 Or +234 8069358664</span>
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Email: <span className='text-lightText'>Rillygulma@gmail.com</span>
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                    Find me in
                </h2>
                <div className='flex gap-4'>
                    <a href={facebookUrl} target='_blank' rel='noreferrer'>
                    <span className='bannerIcon'>
                        <FaFacebookF />
                    </span>
                    </a>
                    <a href={twitterUrl} target='_blank' rel='noreferrer'>
                    <span className='bannerIcon'>
                        <FaTwitter />
                    </span>
                    </a>
                    <a href={whatsappUrl} target='_blank' rel="noreferrer">
                    <span className='bannerIcon'>
                        <FaWhatsapp />
                    </span>
                    </a>
                </div>
            </div>
        </div>
  )
}

export default ContactLeft
