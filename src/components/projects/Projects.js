import React from 'react'
import Title from '../layout/Title'
import ProjectCard from './ProjectCard'
import { projectOne, projectThree, projectTwo, projectFour } from '../../assets/index'

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
          title="School Management System"
          des="A comprehensive platform designed for educational institutions, combining a dynamic landing page with an integrated management system. The landing page highlights the school's mission, programs, events, and admission details, while the management system streamlines administrative tasks such as student enrollment, attendance tracking, grade management, and communication between staff, students, and parents. This solution enhances user experience and operational efficiency for modern schools."
          src={projectOne} 
        />
        <ProjectCard 
          title="Quiz App"
          des="An interactive platform for creating, managing, and participating in quizzes. The app features customizable question formats, real-time scoring, and performance tracking, making it ideal for education, training, or entertainment. Users can challenge themselves or compete with others, while admins can create engaging quizzes with ease. With intuitive design and analytics, the app enhances learning and fun for individuals and groups alike."
          src={projectTwo}
        />
        <ProjectCard 
          title="Library Management System"
          des="A user-friendly platform designed to digitize and streamline library operations. It enables efficient cataloging, borrowing, and returning of books, along with real-time inventory tracking. Users can search for books by title, author, or subject, view availability, and manage their borrowing history. For librarians, the system simplifies administrative tasks like member management, overdue notifications, and report generation. Ideal for schools, universities, and public libraries to foster an organized and accessible reading environment."
          src={projectThree}
        />
        <ProjectCard 
          title="Med-Care App"
          des="A comprehensive healthcare platform designed to connect patients with medical services effortlessly. The app offers features such as online appointment scheduling, teleconsultations, prescription management, and health record storage. Users can search for doctors by specialty, access personalized health tips, and receive reminders for medications and checkups. With secure data handling and user-friendly design, the app promotes convenience and proactive healthcare management, making quality medical care accessible anytime, anywhere."
          src={projectFour}
        />
        <ProjectCard 
          title="School Management System"
          des="A comprehensive platform designed for educational institutions, combining a dynamic landing page with an integrated management system. The landing page highlights the school's mission, programs, events, and admission details, while the management system streamlines administrative tasks such as student enrollment, attendance tracking, grade management, and communication between staff, students, and parents. This solution enhances user experience and operational efficiency for modern schools."
          src={projectOne}
        />
        <ProjectCard 
          title="Quiz App"
          des="An interactive platform for creating, managing, and participating in quizzes. The app features customizable question formats, real-time scoring, and performance tracking, making it ideal for education, training, or entertainment. Users can challenge themselves or compete with others, while admins can create engaging quizzes with ease. With intuitive design and analytics, the app enhances learning and fun for individuals and groups alike."
          src={projectTwo}
        />
      </div>
    </section>
  )
}

export default Projects
