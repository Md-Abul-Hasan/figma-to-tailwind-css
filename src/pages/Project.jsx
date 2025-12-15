import OtherProjects from "./OtherProjects";

const projects = [
  {
    title: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida.",
    stack: ["HTML", "CSS", "JS", "Figma", "React"],
    imageUrl: "#",
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
    <>
      <OtherProjects />

      <section className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-14 relative">
            <span className="px-4 bg-gray-50 relative z-10">
              Featured Project
            </span>
            <span className="absolute left-0 top-1/2 w-full h-[1px] bg-gray-300 -z-0"></span>
          </h2>

          {/* Projects */}
          <div className="space-y-20">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`
                  flex flex-col
                  md:flex-row
                  items-center
                  gap-10
                  ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}
                `}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 h-64 sm:h-72 bg-gray-300 rounded-lg">
                  {/* Replace with <img /> later */}
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <hr className="border-gray-300" />

                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-gray-500">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white rounded-md shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-center md:justify-start gap-6 text-xl">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ↗️
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
