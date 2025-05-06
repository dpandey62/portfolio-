import React from 'react';

function Body_page() {
  return (
    <div className="flex flex-col  p-5 items-center text-center bg-gradient-to-b from-gray-900 to-black py-10 text-gray-300">
      {/* Profile Image */}
      <img 
        src="/Dpandey1.jpg" 
        className="w-41 h-47 object-cover rounded-full border-4 border-gray-600 shadow-lg" 
        alt="Dpandey"
      />
      
      {/* Name */}
      <p className="mt-4  text-4xl md:text-6xl font-bold tracking-wide text-white">DEV PANDEY</p>

      {/* Title */}
      <p className="text-xl text-[#4FC3F7] mt-2">MERN Stack Developer</p>

      {/* Description */}
      <p className="mt-4 max-w-xl text-sm md:text-lg leading-relaxed">
      I am a results-driven MERN stack developer with a strong foundation in crafting end-to-end web applications. 
  With a deep understanding of modern JavaScript frameworks, I specialize in building responsive, scalable, 
  and high-performance solutions. My passion lies in delivering clean code, intuitive interfaces, and 
  robust backends that enhance user engagement and drive business growth.
      </p>

      {/* Contact Button */}
      <button className="mt-6 px-6 py-3 bg-[#4FC3F7] text-black font-semibold rounded-full border border-gray-600 shadow-md hover:bg-[#3BAFDA] transition">
        Contact Me
      </button>
    </div>
  );
}

export default Body_page;
