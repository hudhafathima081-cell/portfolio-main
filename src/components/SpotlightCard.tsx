import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SpotlightCard = ({ children }: Props) => {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {

    const rect =
      e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (

    <motion.div
      onMouseMove={handleMouseMove}
      className="
        relative
        overflow-hidden
        rounded-2xl
      "
      style={{
        background:
          useMotionTemplate`
          radial-gradient(
            300px circle at
            ${mouseX}px ${mouseY}px,
            rgba(255,215,0,0.15),
            transparent 80%
          )
        `,
      }}
    >

      <div
        className="
          relative
          z-10
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
        "
      >
        {children}
      </div>

    </motion.div>
  );
};

export default SpotlightCard;