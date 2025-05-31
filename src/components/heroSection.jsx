// HeroSection.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react'; // Optional: for the arrow icon

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl md:text-6xl font-semibold mb-4">
        Hi, I’m John Smith
      </h1>
      <p className="text-lg md:text-xl text-gray-600">
        I design and build things.
      </p>
      <div className="mt-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-800" />
      </div>
    </section>
  );
};

export default HeroSection;
