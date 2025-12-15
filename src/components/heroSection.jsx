import React from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="
      flex flex-col items-center justify-center
      min-h-[calc(100svh-64px)]
      pt-16
      text-center
      px-4 sm:px-6 lg:px-8
    ">

      <h1 className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        font-semibold
        leading-tight
        mb-4
      ">
        Hi, I’m <span className="block sm:inline">Md. Abul Hasan</span>
      </h1>

      <p className="
        text-base
        sm:text-lg
        md:text-xl
        text-gray-600
        max-w-xl
      ">
        I design and build things.
      </p>

      <div className="mt-10 animate-bounce">
        <ChevronDown className="
          w-5 h-5
          sm:w-6 sm:h-6
          text-gray-800
        " />
      </div>
    </section>
  );
};

export default HeroSection;
