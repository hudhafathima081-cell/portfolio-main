const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">

      <span className="absolute w-12 h-12 bg-white rounded-full animate-bubble left-[10%] bottom-[-80px] shadow-[0_0_40px_white]"></span>

      <span className="absolute w-10 h-10 bg-white rounded-full animate-bubble left-[30%] bottom-[-100px] shadow-[0_0_30px_white]"
        style={{ animationDuration: "10s" }}
      ></span>

      <span className="absolute w-14 h-14 bg-white rounded-full animate-bubble left-[60%] bottom-[-90px] shadow-[0_0_50px_white]"
        style={{ animationDuration: "14s" }}
      ></span>

      <span className="absolute w-8 h-8 bg-white rounded-full animate-bubble left-[80%] bottom-[-120px] shadow-[0_0_25px_white]"
        style={{ animationDuration: "7s" }}
      ></span>

    </div>
  );
};

export default ParticlesBackground;