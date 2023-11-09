import React from 'react'
import Title from '../layout/Title'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'


function Contact() {
    
  return ( 
    <section id='contact'className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
      < Title title="CONTACT"des="CONTACT WITH ME" />
      </div>
      <div className='w-full'>
        <div className='w-full h-auto flex justify-between'>
            <ContactLeft />
            <ContactRight />
        </div>
      </div>
      </section>
  
  )
}

export default Contact
