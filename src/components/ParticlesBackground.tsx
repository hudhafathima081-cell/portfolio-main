const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">

      <span className="absolute w-12 h-12 bg-white rounded-full animate-bubble left-[10%] bottom-[-80px] shadow-[0_0_40px_10px_rgba(255,255,255,0.8)]"></span>

      <span className="absolute w-10 h-10 bg-white rounded-full animate-bubble left-[30%] bottom-[-100px] shadow-[0_0_30px_8px_rgba(255,255,255,0.7)]"
        style={{ animationDuration: "10s" }}
      ></span>

      <span className="absolute w-14 h-14 bg-white rounded-full animate-bubble left-[60%] bottom-[-90px] shadow-[0_0_50px_12px_rgba(255,255,255,0.9)]"
        style={{ animationDuration: "14s" }}
      ></span>

      <span className="absolute w-8 h-8 bg-white rounded-full animate-bubble left-[80%] bottom-[-120px] shadow-[0_0_25px_6px_rgba(255,255,255,0.7)]"
        style={{ animationDuration: "7s" }}
      ></span>

    </div>
  );
};

export default ParticlesBackground;