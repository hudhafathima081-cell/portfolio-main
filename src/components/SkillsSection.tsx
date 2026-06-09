import { Heart, Code } from "lucide-react";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const skillGroups = [

  {
    title: "Soft Skills",

    icon: Heart,

    skills: [
      { name: "Communication", level: 90 },
      { name: "Adaptability", level: 85 },
      { name: "Patience & Empathy", level: 95 },
      { name: "Time Management", level: 80 },
    ],
  },

  {
    title: "Technical Skills",

    icon: Code,

    skills: [
      { name: "C Programming", level: 75 },
      { name: "C++", level: 75 },
      { name: "Java", level: 70 },
      { name: "MS Office", level: 85 },
      { name: "HTML", level: 80 },
      { name: "Google Meet / Zoom", level: 90 },
    ],
  },

];

const SkillBar = ({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) => (

  <AnimatedSection delay={delay}>

    <div className="mb-5">

      <div
        className="
          flex
          justify-between
          mb-2
        "
      >

        <span
          className="
            text-sm
            font-medium
            text-white
          "
        >
          {name}
        </span>

        <span
          className="
            text-xs
            text-primary
            font-semibold
          "
        >
          {level}%
        </span>

      </div>

      {/* BAR */}
      <div
        className="
          h-2
          rounded-full

          bg-white/10

          overflow-hidden
        "
      >

        <AnimatedSection
          delay={delay + 0.2}
        >

          <div
            className="
              h-full
              rounded-full

              bg-gradient-to-r
              from-yellow-400
              to-yellow-300

              transition-all
              duration-700
            "
            style={{
              width: `${level}%`,
            }}
          />

        </AnimatedSection>

      </div>

    </div>

  </AnimatedSection>

);

const SkillsSection = () => (

  <section
    id="skills"
    className="
      min-h-screen
      py-20
      text-white
      transition-all
      duration-700
    "
  >

    <div className="container mx-auto px-6">

      <SectionHeading
        title="Skills"
        subtitle="What I bring to the table"
      />

      {/* GRID */}
      <div
        className="
          grid
          md:grid-cols-2
          gap-8

          max-w-4xl
          mx-auto
        "
      >

        {skillGroups.map((group, gi) => (

          <AnimatedSection
            key={group.title}
            delay={gi * 0.15}
          >

            {/* CARD */}
            <div
              className="
                p-6

                rounded-3xl

                bg-[#0f172a]/40

                border
                border-yellow-400/20

                transition-all
                duration-300

                hover:-translate-y-2

                hover:border-yellow-400/40

                hover:shadow-[0_0_30px_rgba(255,215,0,0.12)]
              "
            >

              {/* HEADER */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-5
                "
              >

                <div
                  className="
                    w-12
                    h-12

                    rounded-xl

                    bg-yellow-400/10

                    flex
                    items-center
                    justify-center
                  "
                >

                  <group.icon
                    className="text-primary"
                    size={20}
                  />

                </div>

                <h3
                  className="
                    font-semibold
                    text-white
                  "
                >
                  {group.title}
                </h3>

              </div>

              {/* SKILLS */}
              {group.skills.map((skill, si) => (

                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={
                    gi * 0.15 + si * 0.05
                  }
                />

              ))}

            </div>

          </AnimatedSection>

        ))}

      </div>

    </div>

  </section>

);

export default SkillsSection;