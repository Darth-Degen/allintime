import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
  text: string;
}

const MovingText: FC<Props> = ({ text }) => {
  return (
    <div className="w-full flex items-center justify-center bg-white overflow-hidden py-1">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="text-3xl uppercase text-center font-neuebitBold text-black tracking-[0.3em] whitespace-nowrap"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default MovingText;
