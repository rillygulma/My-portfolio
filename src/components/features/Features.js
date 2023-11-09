import React from 'react'
import Title from '../layout/Title'
import Card from './Card'
import {AiFillAppstore} from 'react-icons/ai'
import { SiAntdesign, SiProgress } from 'react-icons/si'
import { FaGlobe, FaMobile, FaBars } from 'react-icons/fa'

function Features() {
  return (
    <section id='features' className='w-full  py-20 border-b-[1px]
    border-b-black'
    >
        <Title title ="Features" des="What I Do"/>
        <diV className="grid grid-cols-3 gap-20"> 
          <Card 
          title ="Business Stratagy"
          des="Creating and implementing a new business strategy for a company. It may sometimes also include updating an 
               existing business strategy." 
          icon={<FaBars />}/>
          <Card 
          title ="App Development"
          des=" The process of designing, building, testing and deploying web-based applications that will be installed 
                on remote servers and delivered to users or customers via the internet."
          icon={<AiFillAppstore />}/>
          <Card 
          title ="SEO Optimisation"
          des="The process of improving the quality and quantity of website traffic to a website or a web page from search engines."
          icon={<SiProgress />}
          />
          <Card 
          title ="Mobile Development"
          des="The process of designing and building mobile apps for internal or external use that perform
               a specific function or functions beneficial to the user."
          icon={<FaMobile />}
          />
          <Card 
          title ="UX Design"
          des="Refers to the user's journey when interacting with a product or service. 
               UX design is the process of creating products or services that provide meaningful experiences for users "
          icon={<SiAntdesign />}
          />
          <Card 
          title ="Hosting Websites"
          des="When a hosting provider allocates space on a web server for a website to store its files, they are hosting a website. 
               Web hosting makes the files that comprise a website (code, images, etc.) available for viewing online."
          icon={<FaGlobe />}
          />
        </diV>
    </section>
  )
}

export default Features
