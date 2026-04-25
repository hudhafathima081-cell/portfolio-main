const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      
      {/* Bubble 1 */}
      <span className="absolute w-6 h-6 bg-white/30 rounded-full left-[10%] bottom-[-50px] animate-bubble"></span>

      {/* Bubble 2 */}
      <span className="absolute w-4 h-4 bg-white/20 rounded-full left-[30%] bottom-[-60px] animate-bubble delay-200"></span>

      {/* Bubble 3 */}
      <span className="absolute w-8 h-8 bg-white/25 rounded-full left-[60%] bottom-[-70px] animate-bubble delay-500"></span>

      {/* Bubble 4 */}
      <span className="absolute w-3 h-3 bg-white/20 rounded-full left-[80%] bottom-[-80px] animate-bubble delay-700"></span>

      {/* Bubble 5 */}
      <span className="absolute w-5 h-5 bg-white/30 rounded-full left-[50%] bottom-[-90px] animate-bubble delay-1000"></span>

    </div>
  );
};

export default ParticlesBackground;