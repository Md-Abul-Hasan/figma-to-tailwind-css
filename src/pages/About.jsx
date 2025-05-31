import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold text-center mb-10 relative">
        <span className="px-4 bg-white z-10 relative">About Me</span>
        <div className="absolute top-1/2 w-full h-0.5 bg-gray-300 -z-0"></div>
      </h2>
      <article className="flex flex-row justify-center items-center p-4 gap-[2rem] sm:flex-row-2">
        <p className="sm:grid grid-rows-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eius corporis voluptas autem rerum non sit repudiandae quaerat. Consectetur delectus placeat mollitia nesciunt, quod earum. Unde soluta recusandae sequi voluptatibus, eius ab officia odio, rem hic corrupti amet cupiditate modi tempora distinctio et ducimus? Molestiae nisi praesentium sit excepturi? Aperiam?</p>
        <img src="src\assets\images\images.jpg" alt="Placeholder Image" className="grid"/>
      </article>
    </div>
  );
};

export default About;