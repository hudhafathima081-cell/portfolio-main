import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import heroImg from "../assets/huda8.png";

const Loader = () => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setProgress((prev) => {

        if (prev >= 100) {

          clearInterval(interval);

          return 100;

        }

        return prev + 1;

      });

    }, 25);

    return () => clearInterval(interval);

  }, []);

  return (

    <div

      className="

        fixed

        inset-0

        bg-[#020617]

        flex

        flex-col

        items-center

        justify-center

        z-[9999]

      "

    >

      {/* IMAGE CONTAINER */}

      <div className="relative w-[180px] h-[220px]">

  {/* DARK IMAGE */}
  <img
    src={heroImg}
    alt="loading"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-contain
      grayscale
      brightness-50
      opacity-40
    "
  />

  {/* COLOR FILL */}
  <motion.div
  initial={{
    clipPath: "inset(100% 0% 0% 0%)",
    filter: "brightness(1.2) blur(8px)",
    opacity: 0.3,
  }}
  animate={{
    clipPath: `inset(${100 - progress}% 0% 0% 0%)`,
    filter: "brightness(1) blur(0px)",
    opacity: 1,
  }}
  transition={{
    ease: "easeOut",
    duration: 0.3,
  }}
  className="
    absolute
    inset-0
  "
>

  <img
    src={heroImg}
    alt="loading"
    className="
      w-full
      h-full
      object-contain
    "
  />

</motion.div>

</div>
      {/* PERCENTAGE */}

      <motion.h2

        className="

          text-yellow-400

          text-2xl

          font-bold

          mt-8

        "

      >

        {progress}%

      </motion.h2>

    </div>

  );

};

export default Loader;