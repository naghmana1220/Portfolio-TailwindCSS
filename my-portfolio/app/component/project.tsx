import React from "react";
import Link from "next/link";
import Image from "next/image";
import CarWebsite from '../../public/assests/Projects/CarWebsite.png'
import ResumeBuilder from '../../public/assests/Projects/ResumeBuilder.png'
import SimplePortfolioInterface from '../../public/assests/Projects/Simple-Portfolio-Interface.png'

const Project = () => {
      return (
        <div id="project">
            <section className="text-gray-900 bg-[#bea9a9] body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-pink-900">
        My Projects
      </h1>
      
      
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">

As a student with nine months of experience in HTML, CSS, and JavaScript,I have developed a variety of projects that showcase my skills.
I created a basic calculator and a to-do list application using HTML and CSS, which improved my understanding of user interfaces and functionality.
Additionally, I built a car selling website using Next.js and Tailwind CSS, which allowed me to explore responsive design and server-side rendering.
Through these experiences, I have gained a solid foundation in front-end development and a passion for creating dynamic web applications.

  </p>
    </div>
    {/* project-1 */}
    <div className="flex flex-wrap -m-5 -mt-16" >
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            width={300}
            height={300}
           alt="CarWebsite" 
            src= {CarWebsite}
            className="absolute inset-0 w-full h-full object-cover
            object-center"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4
            bg-white border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium
             text-blue-500 mb-1">
              Car-Selling Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Car-Selling Website
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I created a Car selling website using  Tailwind CSS.
            </p>
            <Link 
            target="_blank"
            href={"https://mini-hackathon-car-selling-website-assignment-tcez.vercel.app"} >
            <p className="leading-relaxed  text-blue-500 hover:underline ">
                View Project..
            </p>
         </Link>
          </div>
        </div>
      </div>
    {/* project-2 */}
    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            width={300}
            height={300}
           alt="Resume" 
            src= {ResumeBuilder}
            className="absolute inset-0 w-full h-full object-cover
            object-center"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4
            bg-white border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium
             text-blue-500 mb-1">
              Resume-Builder-Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Resume
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I have created a user-friendly resume using HTML and CSS
            </p>
            <Link
             target="_blank" 
            href={"https://static-interactive-resume-millestone.vercel.app"} >
            <p className="leading-relaxed  text-blue-500 hover:underline">
                View Project..
            </p>
         </Link>
          </div>
        </div>
      </div>


      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            width={300}
            height={300}
           alt="PortfolioInterface" 
            src= {SimplePortfolioInterface}
            className="absolute inset-0 w-full h-full object-cover
            object-center"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4
            bg-white border-gray-200 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium
             text-blue-500 mb-1">
              Portfolio-Simple-Interface
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Portfolio
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I have created a Simple-Portfolio-Interface by using HTML and CSS.
            </p>
            <Link
            target="_blank" 
            href={"https://portfolio-simple-interface-css-html.vercel.app"} >
            <p className="leading-relaxed  text-blue-500 hover:underline">
                View Project..
            </p>
         </Link>
          </div>
        </div>
      </div>
     
      

     

    </div>
  </div>
</section>

        </div>
    )
}
export default Project