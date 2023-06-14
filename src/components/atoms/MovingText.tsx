import { motion } from "framer-motion";
import { FC, useEffect } from "react";

interface Props {
  text: string;
  direction: "forward" | "reverse";
}

const MovingText: FC<Props> = ({ text, direction = "forward" }) => {
  if (direction === "forward") {
    const transition = {
      initial: { x: "100%" },
      animate: { x: "-100%" },
    };
  } else {
    const transition = {
      initial: { x: "100%" },
      animate: { x: "-100%" },
    };
  }
  return (
    <div className="relative w-full h-10 flex items-center justify-center bg-white overflow-hidden py-1">
      {direction === "forward" ? (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute text-3xl uppercase text-center font-neuebitBold text-black tracking-[0.3em] whitespace-nowrap"
          >
            {text}
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "linear",
              delay: 13,
            }}
            className="absolute text-3xl uppercase text-center font-neuebitBold text-black tracking-[0.3em] whitespace-nowrap"
          >
            {text}
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute text-3xl uppercase text-center font-neuebitBold text-black tracking-[0.3em] whitespace-nowrap"
          >
            {text}
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "linear",
              delay: 13,
            }}
            className="absolute text-3xl uppercase text-center font-neuebitBold text-black tracking-[0.3em] whitespace-nowrap"
          >
            {text}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default MovingText;
