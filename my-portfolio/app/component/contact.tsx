import React from "react";

const Contact = () => {
    return(
        <div id="Contact">
            <section className="text-gray-800 bg-[#bee7ed] body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-400 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        title="map"
        className="absolute inset-0"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7231.806206060738!2d67.06648358810595!3d25.003408284741234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x
        3eb3413d4031ed05%3A0xd2991f75e6080ce7!2sGulshan-E-Ghazi%205-D%20Sector%205%20D%20New%20Karachi%20Town%2C%20Karachi%2C%20
        Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731068782905!5m2!1sen!2s"
        style={{ filter: " contrast(1.2) opacity(0.16)" }}
      />
      <div className="bg-gray-100 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1 text-blue-700">
            Gulshan - e - Ghazi, 5-D ,New  Karachi Town.
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-blue-600 leading-relaxed">naghmana123@gmail.com</a>
          <h2 className="title-font font-semibold text-black racking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed text-blue-600">03234556787</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Contact
      </h2>
      <p className="leading-relaxed mb-5 text-gray-900">
    Feel Free to Contact
      </p>
      <form   action="https://formspree.io/f/mkgnbwqn"
  method="POST">
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-black">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-700 focus:border-gray-200 focus:ring-2 focus:ring-blue-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required/>
      </div>
      <div className="relative mb-4">
        <label 
        htmlFor="subject" 
        className="leading-7 text-sm text-black">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full bg-white rounded border border-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-900
           focus:border-blue-500 focus:ring-2 focus:ring-blue-500 h-32 
           text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
          required/>
      </div>
      <button className="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
        Send Message
      </button>
      </form>
    </div>
  </div>
</section>

        </div>
    )
}
export default Contact



