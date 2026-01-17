import React from "react";
import { motion } from "motion/react";

const FloatingShape = ({ color, size, top, left, delay }) => {
  return (
    <motion.div
      animate={{
        y: ["0%", "100%", "0"],
        x: ["0%", "100%", "0"],
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
      aria-hidden="true"
      style={{ top, left }}
      className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl`}
    ></motion.div>
  );
};

export default FloatingShape;
