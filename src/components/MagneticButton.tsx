import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MagneticButton = ({ children }: Props) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  });

  const smoothY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  });

  function move(
    e: React.MouseEvent<HTMLDivElement>
  ) {

    const rect =
      e.currentTarget.getBoundingClientRect();

    const centerX =
      rect.left + rect.width / 2;

    const centerY =
      rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  }

  function leave() {
    x.set(0);
    y.set(0);
  }

  return (

    <motion.div
      onMouseMove={move}
      onMouseLeave={leave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="inline-block"
    >
      {children}
    </motion.div>

  );
};

export default MagneticButton;