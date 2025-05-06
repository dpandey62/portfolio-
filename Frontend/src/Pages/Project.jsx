import React from 'react';
import Project_card from '../Component/Project_card';

function Project() {
  const data = [
    {
      imageUrl: "/automobilerepair1-1.jpg",
      title: "Car Repair Website",
      description: "A responsive and user-friendly platform designed for vehicle service bookings, repair tracking, and customer engagement. It streamlines workshop operations and enhances customer satisfaction by allowing users to schedule appointments, get service estimates, and track their repair status in real time.",
      projectlink: "https://dpandey62.github.io/car-repair/",
    },
    {
      imageUrl: "/images.jpeg",
      title: "Restaurant Website",
      description: "A modern and responsive website designed for restaurants to highlight their brand, showcase menus with images and pricing, manage reservations, and provide contact details. Built with clean UI/UX in mind to enhance the dining experience digitally and attract more customers through a sleek online presence.",
      projectlink: "https://github.com/dpandey62/restraunt/tree/main/Restaurant-Website-master",
    },
    {
      imageUrl: "/311333118-103858c4-b426-4a8b-8225-e84c1c09b8d0.png", // Use an actual image for this project
      title: "Ecommerce Website",
      description:  "A full-featured eCommerce platform that enables users to browse products, add items to a cart, and complete secure checkouts. Includes features like product search, category filtering, responsive design, user authentication, and admin dashboard for managing inventory and orders.",
      projectlink: "https://dpandey62.github.io/Ecommerce-website/",
    },
  ];
  

  return (
    <div className="bg-black px-4">
      <div className="text-center">
        <p className="text-4xl font-bold mb-4 text-gray-300">Projects</p>
        <p className="text-xl text-[#4FC3F7]">Some of my work</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 py-10">
          {data.map((project, index) => (
            <Project_card
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectlink={project.projectlink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
