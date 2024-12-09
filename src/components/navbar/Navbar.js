import React from 'react'
import {Link} from "react-scroll"
import { navLinksdata } from '../../constants'

function Navbar() {
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont 
    border-b-[1px] border-b-gray-600'>
      <h1 className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-4xl font-bold py-4 px-6 rounded-lg shadow-lg">
          RILLY.TSX
      </h1>

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
