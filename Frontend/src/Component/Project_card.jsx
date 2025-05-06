import React from 'react';

function Project_card({ imageUrl, title, description, projectlink }) {
  return (
    <div className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-96 h-58 object-cover rounded-lg border border-gray-600"
      />
      <h3 className="mt-5 text-xl w-64 md:w-96  md:h-18 font-semibold text-white">{title}</h3>
      <p className="mt-2  w-64 md:w-96 md:h-12 text-gray-400">{description}</p>
      <a href={projectlink} target="_blank" rel="noopener noreferrer">
        <button className="mt-26 md:w-96 px-5 py-2 bg-[#4FC3F7] text-black rounded-full font-medium hover:bg-[#3BAFDA] transition">
          View Project
        </button>
      </a>
    </div>
  );
}

export default Project_card;
