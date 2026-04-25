import { useState } from "react";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!form.title || !form.description) return;

    setProjects([...projects, form]);

    setForm({ title: "", description: "" });
  };

  return (
    <section id="projects" className="py-20 px-5 text-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
        Projects
      </h2>

      {/* Project List */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default ProjectsSection;