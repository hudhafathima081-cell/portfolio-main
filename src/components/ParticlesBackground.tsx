const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">

      {/* Bubble 1 */}
      <span className="absolute w-10 h-10 bg-white rounded-full opacity-60 blur-sm animate-bubble left-[10%] bottom-[-50px]"></span>

      {/* Bubble 2 */}
      <span className="absolute w-8 h-8 bg-white rounded-full opacity-50 blur-sm animate-bubble left-[30%] bottom-[-80px]"
        style={{ animationDuration: "8s" }}
      ></span>

      {/* Bubble 3 */}
      <span className="absolute w-12 h-12 bg-white rounded-full opacity-70 blur-sm animate-bubble left-[60%] bottom-[-60px]"
        style={{ animationDuration: "12s" }}
      ></span>

      {/* Bubble 4 */}
      <span className="absolute w-6 h-6 bg-white rounded-full opacity-60 blur-sm animate-bubble left-[80%] bottom-[-100px]"
        style={{ animationDuration: "6s" }}
      ></span>

    </div>
  );
};

export default ParticlesBackground;