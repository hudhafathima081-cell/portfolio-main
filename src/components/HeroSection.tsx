import { TypeAnimation } from "react-type-animation";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

import heroImg from "../assets/huda8.png";

const HeroSection = () => {

  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  // 3D IMAGE ROTATION
  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement>
  ) => {

    const rect =
      e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientY -
        rect.top -
        rect.height / 2) / 25;

    const y =
      (e.clientX -
        rect.left -
        rect.width / 2) / 25;

    setRotate({
      x: -x,
      y,
    });
  };

  const handleMouseLeave = () => {
    setRotate({
      x: 0,
      y: 0,
    });
  };

  // CONTACT SCROLL
  const handleContactClick = () => {

    const section =
      document.getElementById("contact");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };

  return (

    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        overflow-hidden
        relative
      "
    >

      {/* PREMIUM CINEMATIC LIGHTS */}
      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
        "
      >

        {/* GOLD LIGHT */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[-180px]
            left-[-180px]

            w-[500px]
            h-[500px]

            bg-yellow-400/10

            rounded-full

            blur-[140px]
          "
        />

        {/* BLUE LIGHT */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-220px]
            right-[-220px]

            w-[550px]
            h-[550px]

            bg-blue-500/10

            rounded-full

            blur-[160px]
          "
        />

        {/* CENTER LIGHT */}
        <motion.div
          animate={{
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
            absolute
            top-1/2
            left-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-[400px]
            h-[400px]

            bg-white/5

            rounded-full

            blur-[120px]
          "
        />

      </div>

      {/* SPARKLES */}
      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.3, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            top-1/4
            left-2/3

            text-yellow-300
            text-xl
          "
        >
          ✨
        </motion.div>

      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
        "
      >

        <div
          className="
            grid
            md:grid-cols-2
            gap-10
            items-center
          "
        >

          {/* LEFT SIDE */}
          <div>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                text-primary
                font-medium
                mb-3
              "
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
              "
            >

              <span className="text-white">
                Hudha
              </span>{" "}

              <span
                className="
                  text-yellow-400
                  drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]
                "
              >
                Fathima
              </span>

            </motion.h1>

            {/* TYPING TEXT */}
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "BCA Student",
                2000,
                "Frontend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="
                text-lg
                md:text-xl

                text-gray-300

                mt-4
                block
              "
            />

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 1,
              }}
              className="
                text-gray-400
                mt-4
                max-w-lg
                leading-relaxed
              "
            >
              A motivated and detail-oriented
              BCA graduate with a strong
              foundation in computer
              applications, programming,
              and software development.
            </motion.p>

            {/* BUTTONS */}
            <div
              className="
                flex
                gap-4
                mt-8
                flex-wrap
              "
            >

              {/* DOWNLOAD */}
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="/resume/Huda_Resume.pdf"
                download
                className="
                  flex
                  items-center
                  gap-2

                  bg-yellow-400
                  text-black

                  px-6
                  py-3

                  rounded-xl

                  font-medium

                  shadow-lg

                  transition-all
                  duration-300

                  hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]
                "
              >

                <Download size={18} />

                Download Resume

              </motion.a>

              {/* CONTACT */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={handleContactClick}
                className="
                  flex
                  items-center
                  gap-2

                  border
                  border-yellow-400

                  text-yellow-400

                  px-6
                  py-3

                  rounded-xl

                  transition-all
                  duration-300

                  hover:bg-yellow-400
                  hover:text-black

                  hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]
                "
              >

                <Mail size={18} />

                Contact Me

              </motion.button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              flex
              justify-center
              relative
            "
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            {/* IMAGE GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute

                w-[320px]
                h-[320px]

                bg-yellow-400/20

                blur-[120px]

                rounded-full
              "
            />

            {/* HERO IMAGE */}
            <motion.img
              src={heroImg}
              alt="Huda"

              animate={{
                y: [0, -20, 0],
                scale: [1, 1.03, 1],
              }}

              style={{
                transform: `
                  perspective(1000px)
                  rotateX(${rotate.x}deg)
                  rotateY(${rotate.y}deg)
                `,
                transition:
                  "transform 0.1s ease-out",
              }}

              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}

              className="
                relative

                w-[260px]
                sm:w-[320px]
                md:w-[400px]

                object-contain

                drop-shadow-[0_0_35px_rgba(255,215,0,0.45)]
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;