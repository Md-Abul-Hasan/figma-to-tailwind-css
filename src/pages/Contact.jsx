import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="pt-16 min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-semibold text-center mb-10 relative">
            <span className="px-4 bg-white relative z-10">Contact Me</span>
            <div className="absolute top-1/2 w-full h-0.5 bg-gray-300 -z-0"></div>
          </h2>
        </div>

        <p className="text-center">
          Name: Md. Abul Hasan
        </p>
        <p className="text-center">
          Email: hasansohan007@gmail.com
        </p>
        <p className="text-center">
          Phone : +8801722102705, +8801914305677
        </p>
      </div>
    </section>
  );
});

export default Contact;
