import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { enterAnimation } from "@constants";
import { LandingBanner } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="w-full h-full bg-custom-teal">
      <div
        className="w-[90%] max-w-[2200px] mx-auto h-full bg-custom-black flex flex-col 
        items-center justify-center px-8 xl:px-20"
      >
        <motion.div {...enterAnimation} className="w-full px-10">
          <LandingBanner />
          <div className="relative w-full">
            {/* header text */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  
              text-center opacity-80 whitespace-nowrap font-mk-hell text-custom-teal"
            >
              <p className="text-[140px] xl:text-[180px] pt-20">all in time</p>
              <p className="text-lg xl:text-xl mt-20">
                a virtuous lifestyle,
                <br />
                with very little patience
              </p>
            </div>
            {/* footer text */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-14 w-full  
              text-center opacity-80 whitespace-nowrap px-8"
            >
              <div className="w-full flex justify-center items-center text-sm xl:text-base">
                <p className="font-secondary text-custom-teal mr-5">VOLUME 1</p>
                <div className="w-full h-[1px] bg-transparent border-b-2 xl:border-b-4 border-dotted border-custom-teal" />
                <p className="font-secondary text-custom-teal ml-5">
                  ESSENTIALS
                </p>
              </div>
            </div>
            <div className="w-fit mx-auto pl-14">
              <Image
                src="/images/landing/intro.png"
                alt="RULEBREAKERS"
                priority={true}
                width={1494 * 0.4}
                height={2060 * 0.4}
                onLoadingComplete={() =>
                  setAssets && setAssets((prevState) => [(prevState[0] = true)])
                }
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingView;
