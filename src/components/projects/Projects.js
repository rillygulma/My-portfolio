import React from 'react'
import Title from '../layout/Title'
import ProjectCard from './ProjectCard'
import { projectOne, projectThree, projectTwo } from '../../assets/index'

function Projects() {
  return (
    <section 
    id='projects'
    className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center items-center text-center'>
      < Title
      title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
      des="My Projects" 
      />
      </div>
      <div className='grid grid-cols-3 gap-14'>
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem ipsum"
          src={projectThree} 
        />
        <ProjectCard 
          title="E-commerce Website"
          des="Lorem ipsum"
          src={projectOne}
        />
        <ProjectCard 
          title="Chatting App"
          des="Lorem ipsum"
          src={projectTwo}
        />
        <ProjectCard 
          title="E-commerce Website"
          des="Lorem ipsum"
          src={projectOne}
        />
        <ProjectCard 
          title="Chatting App"
          des="Lorem ipsum"
          src={projectTwo}
        />
        <ProjectCard 
          title="SOCIAL MEDIA CLONE"
          des="Lorem ipsum"
          src={projectThree}
        />
      </div>
    </section>
  )
}

export default Projects
