import Image from "next/image";
import React from "react";
import myimage from '../../public/assests/Pictures/my-image3.png'


const About = () => {
    return(
        <div id="about">
            <section className="text-gray-400 bg-[#bea9a9] body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <Image
        className="object-cover transform ml-16  object-center rounded"
        alt="MyImage"
        src= {myimage}
        width={400}
        height={200}
        
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-pink-900 ">
        About Me
      </h1>
     

      <p className="mb-5 leading-relaxed text-gray-900">
      I am a dedicated student who has recently completed my pre-medical studies with impressive grades and
       am now embarking on a new academic adventure at Jinnah University, pursuing a Bachelors in Psychology.
       
      </p>
      <p className="mb-5 leading-relaxed  text-gray-900">
      Driven by a passion for technology,
      I am also enrolled in the Governor Sindh Initiative, focusing on Applied Cloud Generative AI Engineering. 
      After nine months of rigorous training in HTML, CSS, JavaScript, and Next.js, 
      I m proud to have successfully cleared my first quarter and am 
      eager to blend my interests in psychology and technology .
      </p>
      <div className="flex justify-center">
        <a href={"/assests/CV-02/new cv (2).pdf"}>
        <button className="inline-flex text-black  hover:text-white bg-gradient-to-br from-blue-500  to-pink-600 via-purple-600  border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
          View CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default About