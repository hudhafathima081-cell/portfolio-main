import { motion } from "framer-motion";
import heroImg from "../assets/huda8.png";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="
        fixed
        inset-0
        bg-[#020617]
        flex
        items-center
        justify-center
        z-[9999]
      "
    >

      {/* IMAGE ANIMATION */}
      <motion.img
        src={heroImg}
        alt="Loading"
        initial={{
          y: 300,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          w-[220px]
          md:w-[350px]
          drop-shadow-[0_0_40px_rgba(255,215,0,0.8)]
        "
      />

    </motion.div>
  );
};

export default Loader;