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

      <div className="relative w-[180px] h-[180px] overflow-hidden">

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

            opacity-20

          "

        />

        {/* COLOR LOAD FROM BOTTOM */}

        <motion.div

          initial={{ height: 0 }}

          animate={{ height: `${progress}%` }}

          transition={{ ease: "linear" }}

          className="

            absolute

            bottom-0

            left-0

            w-full

            overflow-hidden

          "

        >

          <img

            src={heroImg}

            alt="loading"

            className="

              w-[180px]

              h-[180px]

              object-contain

              drop-shadow-[0_0_30px_rgba(255,215,0,0.9)]

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