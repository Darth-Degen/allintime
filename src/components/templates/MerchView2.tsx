import { motion } from "framer-motion";
import { FC } from "react";
import { enterAnimation } from "@constants";
import { MerchQuotes } from "@components";

const MerchView2: FC = () => {
  return (
    <div className="w-full h-full bg-merch-gradient">
      <div className="flex flex-col items-center justify-center max-w-[2200px] mx-auto">
        <motion.div {...enterAnimation} className="w-fit mx-auto py-32">
          <MerchQuotes />
        </motion.div>
      </div>
      <div className="xl:mt-10 mb-10 xl:mb-20 w-full bg-[#EBEBEB] h-6 xl:h-8 flex items-center justify-center">
        <p className="pl-5 whitespace-nowrap overflow-hidden uppercase xl:text-xl text-left text-black font-neuebitBold tracking-[0.5em]">
          {`be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp `}
        </p>
      </div>
    </div>
  );
};

export default MerchView2;
