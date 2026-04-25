import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import heroImg from "../assets/huda8.png";

const HeroSection = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 25;
    const y = (e.clientX - rect.left - rect.width / 2) / 25;
    setRotate({ x: -x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    
     <section id="home" className="min-h-screen flex items-center bg-[#020617] overflow-hidden relative">
    
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
      </div>

      {/* ❗ MAIN FIX IS HERE */}
      <div className="w-full max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

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

            <div className="flex gap-4 mt-6 flex-wrap">
              <a
                href="/resume/Huda_Resume.pdf"
                download
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

          {/* RIGHT SIDE */}
          <div
            className="flex justify-center relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute w-[300px] h-[300px] bg-yellow-400/30 blur-[120px] rounded-full"
            />

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
                w-[260px] sm:w-[320px] md:w-[400px]
                object-contain
                drop-shadow-[0_0_60px_rgba(255,215,0,0.8)]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;