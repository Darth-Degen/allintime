import { motion } from "framer-motion";
import { FC } from "react";
import { MerchQuotes, MovingText } from "@components";

const MerchView2: FC = () => {
  return (
    <div className="w-full h-full bg-merch-gradient">
      <div className="flex flex-col items-center justify-center max-w-[2200px] mx-auto py-32">
        <MerchQuotes />
      </div>
      <MovingText text="be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp •&nbsp;" />
    </div>
  );
};

export default MerchView2;
