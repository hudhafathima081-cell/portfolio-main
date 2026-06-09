import SpotlightCard from "@/components/SpotlightCard";
import MagneticButton from "@/components/MagneticButton";

const Certificates = () => {

  return (

    <section
      id="certificates"
      className="
        py-24
        bg-[#020617]
        text-white
        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          bg-yellow-400/10
          blur-[140px]
          rounded-full
        "
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-center
            mb-16
            text-white
          "
        >
          My{" "}

          <span
            className="
              text-yellow-400
              drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]
            "
          >
            Certificates
          </span>
        </h2>

        {/* CARD */}
        <SpotlightCard>

          <div
            className="
              bg-gradient-to-br
              from-yellow-400
              to-yellow-300

              text-black

              rounded-3xl

              p-8

              max-w-2xl
              mx-auto

              shadow-2xl

              border
              border-yellow-200/40

              backdrop-blur-xl

              transition-all
              duration-500

              hover:scale-[1.02]
            "
          >

            {/* TITLE */}
            <h3
              className="
                text-3xl
                font-bold
              "
            >
              Web Development Internship
            </h3>

            {/* COMPANY */}
            <p
              className="
                mt-3
                text-black/70
                text-lg
              "
            >
              Zephyr Company • 2026
            </p>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                leading-relaxed
                text-black/80
              "
            >
              Completed internship training in
              frontend web development using
              React, Tailwind CSS, and modern
              UI/UX principles.
            </p>

            {/* BUTTON */}
            <div className="mt-8">

              <MagneticButton>

                <a
                  href="/certificate.png"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2

                    bg-black
                    text-white

                    px-6
                    py-3

                    rounded-xl

                    font-medium

                    transition-all
                    duration-300

                    hover:bg-[#111827]
                    hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]
                  "
                >
                  View Certificate
                </a>

              </MagneticButton>

            </div>

          </div>

        </SpotlightCard>

      </div>

    </section>
  );
};

export default Certificates;