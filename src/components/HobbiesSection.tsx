import {
  BookOpen,
  Puzzle,
  Music,
  Laptop,
  Gamepad2,
  Code,
  Car,
} from "lucide-react";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const hobbies = [

  {
    name: "Building Project",
    icon: Laptop,
  },

  {
    name: "Coding",
    icon: Code,
  },

  {
    name: "Reading",
    icon: BookOpen,
  },

  {
    name: "Puzzle Solving",
    icon: Puzzle,
  },

  {
    name: "Listening to Music",
    icon: Music,
  },

  {
    name: "Gaming",
    icon: Gamepad2,
  },

  {
    name: "Traveling",
    icon: Car,
  },

];

const HobbiesSection = () => (

  <section
    id="hobby"
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
        title="Hobbies"
        subtitle="What I enjoy in my free time"
      />

      {/* HOBBIES GRID */}
      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-6
        "
      >

        {hobbies.map((hobby, i) => (

          <AnimatedSection
            key={hobby.name}
            delay={i * 0.15}
          >

            {/* CARD */}
            <div
              className="
                w-40

                p-6

                rounded-3xl

                bg-[#0f172a]/40

                border
                border-yellow-400/15

                transition-all
                duration-300

                hover:-translate-y-2

                hover:border-yellow-400/40

                hover:shadow-[0_0_30px_rgba(255,215,0,0.12)]

                flex
                flex-col
                items-center
                gap-4
              "
            >

              {/* ICON */}
              <div
                className="
                  w-14
                  h-14

                  rounded-full

                  bg-yellow-400/10

                  flex
                  items-center
                  justify-center
                "
              >

                <hobby.icon
                  className="text-primary"
                  size={24}
                />

              </div>

              {/* TEXT */}
              <span
                className="
                  font-medium
                  text-white
                  text-sm
                  text-center
                "
              >
                {hobby.name}
              </span>

            </div>

          </AnimatedSection>

        ))}

      </div>

    </div>

  </section>

);

export default HobbiesSection;