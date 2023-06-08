import { motion } from "framer-motion";
import { FC } from "react";
import { MerchQuotes } from "@components";

const MerchView2: FC = () => {
  return (
    <div className="w-full h-full bg-merch-gradient">
      <div className="flex flex-col items-center justify-center max-w-[2200px] mx-auto py-32">
        <MerchQuotes />
      </div>
      <div className="marquee-w">
        <div className="marquee">
          <span className="uppercase xl:text-2xl text-black font-neuebitBold tracking-[0.4em]">
            {`be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp • `}
          </span>
        </div>
        <div className="marquee marquee2 uppercase xl:text-2xl text-black font-neuebitBold tracking-[0.5em]">
          <span>
            {`be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp • be a real life pfp • `}
            &nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};

export default MerchView2;
