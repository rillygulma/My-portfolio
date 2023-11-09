import React from 'react'
import {Link} from "react-scroll"
import {logo} from "../../assets/index"
import { navLinksdata } from '../../constants'

function Navbar() {
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont 
    border-b-[1px] border-b-gray-600'>
      <div className='w-16 h-16 object-cover rounded-full
      '>
        <img src={logo} alt='logo' />
      </div>
      <div>
  <ul className='flex items-center gap-10'>
    {
      navLinksdata.map(({_id, title, link})=>(
        <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
        hover:text-designColor duration-300' 
        key ={_id}
        >
          <Link
          activeClass='active'
          to={link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
            {title}</Link>
        </li>
      ))
    }
  </ul>
      </div>
    </div>
  )
}

export default Navbar
