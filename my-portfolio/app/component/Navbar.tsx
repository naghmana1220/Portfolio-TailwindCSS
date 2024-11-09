import React from 'react'
import Link from 'next/link'
import { AiOutlineCloudDownload } from "react-icons/ai";


const Navbar = () => {
    return(
        <div className="bg-white z-50 sticky top-0">
            <header className="text-gray-300 bg-slate-800 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
    
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
    stroke="currentColor"
     strokeLinecap="round"
      strokeLinejoin="round" 
     strokeWidth="2" 
     className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
     


      <span className="ml-3 text-xl  text-pink-400
      I am"> 
        Naghmanas Portfolio
        </span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-pink-400 text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-white ">
      Home
      </Link>
      <Link href={"#about"} className="mr-5 hover:text-white ">
      About
      </Link>
      <Link href={"#skills"} className="mr-5 hover:text-white">
      Skills
      </Link>
      <Link href={"#project"} className="mr-5 hover:text-white">
      Projects
      </Link>
      <Link href={"#Contact"} className="mr-5 hover:text-white">
      Contact
      </Link>
    </nav>
    <a href="/assests/CV-02/new cv (2).pdf">
    <button className="inline-flex items-center hover:text-white text-black bg-gradient-to-br from-purple-400 to-pink-600 bg-gray-100 border-0 py-1 px-3 
    focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0">
      Download CV
      <AiOutlineCloudDownload className="text-xl ml-2" />
    </button>
    </a>
  </div>
</header>
</div>
    )
}
export default Navbar
