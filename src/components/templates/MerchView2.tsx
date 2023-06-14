import { motion } from "framer-motion";
import { FC } from "react";
import { enterAnimation } from "@constants";
import { MerchQuotes, MovingText } from "@components";

const MerchView2: FC = () => {
  return (
    <div className="w-full h-full bg-merch-gradient">
      <div className="flex flex-col items-center justify-center max-w-[2200px] mx-auto">
        <motion.div {...enterAnimation} className="w-fit mx-auto py-32">
          <MerchQuotes />
        </motion.div>
      </div>
      <div className="w-full flex flex-col gap-0.5">
        <MovingText
          text="be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp •&nbsp;"
          direction="reverse"
        />
        <MovingText
          text="be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp •&nbsp;"
          direction="forward"
        />
      </div>
    </div>
  );
};

export default MerchView2;
