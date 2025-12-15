import React from "react";

const Experience = () => {
  const jobEntries = [
    {
      title: "Job Title",
      company: "Company Name",
      dates: "Apr 2018 - Dec 2022",
      responsibilities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula",
      ],
    },
    {
      title: "Job Title",
      company: "Company Name",
      dates: "Apr 2018 - Dec 2022",
      responsibilities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis vivamus facilisis ligula",
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold text-center mb-10 relative">
        <span className="px-4 bg-white z-10 relative">Experience</span>
        <div className="absolute top-1/2 w-full h-0.5 bg-gray-300 -z-0"></div>
      </h2>

      {jobEntries.map((job, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row md:justify-between gap-6 mb-10 ${index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
        >
          {/* Left: Job Details */}
          <div className="md:w-1/3 border-t md:border-t-0 md:border-r border-gray-300 pt-4 md:pt-0 md:pr-4 text-center md:text-right">
            <h3 className="text-lg font-medium">{job.title}</h3>
            <p className="text-sm text-gray-600">{job.company}</p>
            <div className="border-t mt-2 pt-2 text-sm text-gray-500">
              {job.dates}
            </div>
          </div>

          {/* Right: Responsibilities */}
          <ul className="md:w-2/3 list-disc list-inside space-y-2 text-sm text-gray-700">
            {job.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;




