const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

      <span className="absolute w-10 h-10 bg-white rounded-full shadow-[0_0_25px_white] animate-bubble left-[10%]" style={{ top: "100vh" }}></span>

      <span className="absolute w-8 h-8 bg-white rounded-full shadow-[0_0_20px_white] animate-bubble left-[30%]" style={{ top: "100vh", animationDuration: "8s" }}></span>

      <span className="absolute w-12 h-12 bg-white rounded-full shadow-[0_0_30px_white] animate-bubble left-[60%]" style={{ top: "100vh", animationDuration: "12s" }}></span>

      <span className="absolute w-6 h-6 bg-white rounded-full shadow-[0_0_15px_white] animate-bubble left-[80%]" style={{ top: "100vh", animationDuration: "6s" }}></span>

    </div>
  );
};

export default ParticlesBackground;