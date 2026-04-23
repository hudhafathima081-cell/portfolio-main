import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import heroImg from "../assets/huda8.png";

const HeroSection = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 25;
    const y = (e.clientX - rect.left - rect.width / 2) / 25;
    setRotate({ x: -x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* 🔵 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>
      </div>

      {/* ✨ Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/4 left-2/3 text-yellow-300 text-xl"
        >
          ✨
        </motion.div>

        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/2 left-3/4 text-yellow-200 text-lg"
        >
          ✦
        </motion.div>

        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-1/3 left-1/2 text-yellow-300 text-lg"
        >
          ✨
        </motion.div>
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-primary font-medium mb-3">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white">Huda</span>{" "}
            <span className="text-yellow-400">Fathima</span>
          </h1>

          <h2 className="text-lg md:text-xl text-gray-300 mt-4">
            Web Developer & BCA Student
          </h2>

          <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
            A motivated and detail-oriented BCA graduate with a strong 
            foundation in computer applications, programming, and 
            software development.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="/resume/Huda_Resume.pdf"
              download="Huda_Resume.pdf"
              className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 border border-yellow-400 text-yellow-400 px-5 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - ULTRA PREMIUM */}
        <div
          className="flex justify-center relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* 💛 Glow */}
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute w-[350px] h-[350px] bg-red-400/40 blur-[120px] rounded-full"
          />

          {/* ✨ Outer Glow */}
          <div className="absolute w-[450px] h-[450px] bg-yellow-400/400 blur-[160px] rounded-full"></div>

          {/* 💡 Light Beam */}
          <div className="absolute w-[200px] h-[400px] bg-white/10 blur-[100px] rotate-12"></div>

          {/* 👤 IMAGE WITH 3D + FLOAT */}
          <motion.img
            src={heroImg}
            alt="Huda"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.03, 1],
            }}
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              w-[300px] md:w-[420px]
              object-contain
              drop-shadow-[0_0_60px_rgba(255,215,0,0.9)]
              transition duration-300
            "
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;