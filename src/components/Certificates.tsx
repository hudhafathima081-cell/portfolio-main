import MagneticButton from "@/components/MagneticButton";

const Certificates = () => {

  return (

    <section
      id="certificates"
      className="
        py-24
        text-white
        relative
        overflow-hidden
      "
    >

      <div
        className="
          max-w-5xl
          mx-auto
          px-6
          relative
          z-10
        "
      >

        {/* HEADING */}
        <h2
          className="
            text-4xl
            md:text-5xl

            font-bold

            text-center

            mb-16
          "
        >

          My{" "}

          <span
            className="
              text-yellow-400

              drop-shadow-[0_0_15px_rgba(255,215,0,0.25)]
            "
          >
            Certificates
          </span>

        </h2>

        {/* CARD */}
        <div
          className="
            bg-[#0f172a]/40

            rounded-3xl

            p-8

            max-w-md
            mx-auto

            border
            border-yellow-400/20

            shadow-lg

            transition-all
            duration-300

            hover:border-yellow-400/40

            hover:shadow-[0_0_30px_rgba(255,215,0,0.12)]

            hover:-translate-y-1
          "
        >

          {/* TITLE */}
          <h3
            className="
              text-2xl
              font-bold

              text-white
            "
          >
            Web Development Internship
          </h3>

          {/* COMPANY */}
          <p
            className="
              mt-3

              text-gray-400

              text-sm
            "
          >
            Zephyr Company • 2026
          </p>

          {/* BUTTON */}
          <div className="mt-8">

            <MagneticButton>

              <a
                href="certificates/HudhaFathima.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2

                  bg-yellow-400
                  text-black

                  px-6
                  py-3

                  rounded-xl

                  font-medium

                  transition-all
                  duration-300

                  hover:scale-105

                  hover:shadow-[0_0_20px_rgba(255,215,0,0.25)]
                "
              >
                View Certificate
              </a>

            </MagneticButton>

          </div>

        </div>

      </div>

    </section>

  );

};

export default Certificates;