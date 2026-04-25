import { useState } from "react";

const ProjectsSection = () => {
  const [projects] = useState([
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React",
      link: "https://portfolio-main-beta-ivory.vercel.app/",
    },
  ]);

  return (
    <section id="projects" className="py-20 px-5 text-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 block hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
  {project.title}
</h3>
            <p className="text-gray-300 mt-2">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;