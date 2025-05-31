
const projects = [
  {
    title: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida.",
    stack: ["HTML", "CSS", "JS", "Figma", "React"],
    imageUrl: "#", // Placeholder
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida.",
    stack: ["HTML", "CSS", "JS", "Figma", "React"],
    imageUrl: "#",
    repoUrl: "#",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold text-center mb-10 relative">
        <span className="px-4 bg-white z-10 relative">Featured Project</span>
        <div className="absolute top-1/2 w-full h-0.5 bg-gray-300 -z-0"></div>
      </h2>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/2 bg-gray-300 h-64 rounded-md"></div>
              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
                <hr className="border-t border-gray-300" />
                <div className="text-sm text-gray-500 flex justify-center md:justify-start gap-2 flex-wrap">
                  {project.stack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="flex justify-center md:justify-start gap-4 text-gray-600">
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
