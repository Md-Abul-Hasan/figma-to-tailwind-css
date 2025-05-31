import React from "react";

const otherProjects = [
  {
    title: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis.",
    stack: ["HTML", "CSS", "JS"],
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis.",
    stack: ["HTML", "CSS", "JS"],
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis.",
    stack: ["HTML", "CSS", "JS"],
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis.",
    stack: ["HTML", "CSS", "JS"],
    repoUrl: "#",
    liveUrl: "#",
  },
];

export default function OtherProjects() {
  return (
    <section className="bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold text-center mb-10 relative">
        <span className="px-4 bg-white z-10 relative">Othered project</span>
        <div className="absolute top-1/2 w-full h-0.5 bg-gray-300 -z-0"></div>
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-md flex-shrink-0"></div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
                <hr className="border-t border-gray-300" />
                <div className="text-sm text-gray-500 flex gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 text-gray-600">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <span role="img" aria-label="repo">🔗</span>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <span role="img" aria-label="external">↗️</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
