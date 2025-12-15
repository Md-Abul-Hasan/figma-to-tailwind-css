import React from "react";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12 relative">
        <span className="px-4 bg-white relative z-10">
          About Me
        </span>
        <span className="absolute left-0 top-1/2 w-full h-[1px] bg-gray-300 -z-0"></span>
      </h2>

      {/* Content */}
      <article className="
        flex flex-col
        md:flex-row
        items-center
        gap-8
      ">
        {/* Text */}
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eius
          corporis voluptas autem rerum non sit repudiandae quaerat.
          Consectetur delectus placeat mollitia nesciunt, quod earum.
          Unde soluta recusandae sequi voluptatibus, eius ab officia odio,
          rem hic corrupti amet cupiditate modi tempora distinctio et ducimus?
          Molestiae nisi praesentium sit excepturi? Aperiam?
        </p>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/images/images.jpg"
            alt="About"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </article>
    </section>
  );
};

export default About;
