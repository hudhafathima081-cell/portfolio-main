import { useState } from "react";

const ProjectsSection = () => {
  const [projects] = useState([
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React",
      link: "https://portfolio-main-beta-ivory.vercel.app/",
    },
    {
      title: "Book Haven",
      description: "Online book browsing website",
      link: "https://book-haven-delta.vercel.app/",
    },
  ]);

  return (
    <section id="projects" className="py-20 px-4 text-white">
      
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
        Projects
      </h2>

      {projects.map((project, index) => (
        <div key={index} className="max-w-3xl mx-auto mb-8">
          
          <div className="p-6 rounded-xl bg-white/10 border border-white/10 hover:scale-[1.02] transition">
            
            <h3 className="text-2xl font-semibold text-yellow-400">
              {project.title}
            </h3>

            <p className="text-gray-300 mt-3">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 px-5 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:scale-105 transition"
            >
              Visit Website
            </a>

          </div>

        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;