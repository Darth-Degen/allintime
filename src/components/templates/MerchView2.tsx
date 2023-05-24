import { motion } from "framer-motion";
import { FC } from "react";
import { enterAnimation } from "@constants";
import { MerchQuotes } from "@components";

const MerchView2: FC = () => {
  return (
    <div className="w-full h-full bg-merch-gradient">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          {...enterAnimation}
          className="w-full flex items-center justify-center py-20"
        >
          <MerchQuotes />
        </motion.div>
      </div>
      <div className="mt-10 mb-20 w-full bg-white h-10 flex items-center justify-center">
        <p className="pl-5 whitespace-nowrap overflow-hidden uppercase text-2xl text-left text-black font-neuebitBold tracking-[0.5em]">
          {`be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp `}
        </p>
      </div>
    </div>
  );
};

export default MerchView2;
