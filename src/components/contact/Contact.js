import React from 'react';
import Title from '../layout/Title';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

function Contact() {
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="CONTACT WITH ME" />
      </div>
      <div className="w-full mt-10">
        {/* Use a responsive grid layout */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
}

export default Contact;
