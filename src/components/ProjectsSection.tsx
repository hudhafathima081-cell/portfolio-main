import { useState } from "react";

const ProjectsSection = () => {

  const [projects] = useState([

    {
      title: "Portfolio Website",

      description:
        "Personal portfolio built with React",

      link:
        "https://portfolio-main-beta-ivory.vercel.app/",
    },

    {
      title: "Book Haven",

      description:
        "Online book browsing website",

      link:
        "https://lumen-booklibrary.vercel.app/",
    },

  ]);

  return (

    <section
      id="projects"
      className="
        py-20
        px-4
        text-white
      "
    >

      {/* HEADING */}
      <h2
        className="
          text-4xl
          font-bold
          text-center
          mb-14
        "
      >

        <span
          className="
            text-yellow-400

            drop-shadow-[0_0_15px_rgba(255,215,0,0.2)]
          "
        >
          Projects
        </span>

      </h2>

      {/* PROJECTS */}
      {projects.map((project, index) => (

        <div
          key={index}
          className="
            max-w-3xl
            mx-auto
            mb-8
          "
        >

          {/* CARD */}
          <div
            className="
              p-7

              rounded-3xl

              bg-[#0f172a]/40

              border
              border-yellow-400/15

              transition-all
              duration-300

              hover:-translate-y-1

              hover:border-yellow-400/40

              hover:shadow-[0_0_30px_rgba(255,215,0,0.12)]
            "
          >

            {/* TITLE */}
            <h3
              className="
                text-2xl
                font-semibold

                text-yellow-400
              "
            >
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                text-gray-300
                mt-3
                leading-relaxed
              "
            >
              {project.description}
            </p>

            {/* BUTTON */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-6

                px-5
                py-3

                bg-yellow-400
                text-black

                rounded-xl

                font-medium

                transition-all
                duration-300

                hover:scale-105

                hover:shadow-[0_0_20px_rgba(255,215,0,0.25)]
              "
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