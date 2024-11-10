"use client"
import React from "react";
import Image from "next/image";
import girl from '../../public/assests/Pictures/girl2.png'
import Link from "next/link";



const Hero = () => {
    return(
        <section className="text-gray-200 bg-[#181818] body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl  text-3xl mb-1 font-medium  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        I am
        <br className="hidden lg:inline-block" />
      Web Developer,
        UI/UX Designer
            </h1>
          
      <div className="w-[200px] h-[2px] bg-gray-400 rounded-xl mt-1"></div>
      <p className="mb-8 leading-relaxed mt-2">
      I am a dedicated and enthusiastic web development student with approximately nine months of experience in modern web technologies. My journey began with mastering the fundamentals of HTML and CSS, where I learned to create structured and visually appealing web pages. I quickly transitioned into JavaScript, enhancing 
      my ability to make interactive and dynamic user experiences.
      </p>
      <div className="flex justify-center ">
        <Link href={"#Contact"} >
        <button className="inline-flex  text-black hover:text-white from-blue-500 bg-gradient-to-br   to-pink-500 via-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
          Contact
        </button>
       </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      

      <Image  className="ml-20"
      src = {girl}
      width={300}
      height={400}
      alt="girl"
      placeholder="blur" 
  />
    </div>
  </div>
</section>

        
    )
}
export default Hero