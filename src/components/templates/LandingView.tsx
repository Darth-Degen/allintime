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
        className="w-[85%] max-w-[2200px] mx-auto h-full bg-custom-black flex flex-col 
        items-center justify-center px-8 xl:px-20"
      >
        <motion.div {...enterAnimation} className="w-full px-10">
          <LandingBanner />
          <div className="relative w-full">
            {/* header text */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2">
              <p className="text-[140px] xl:text-[170px] pt-20 font-mkHell text-center opacity-[.85] saturate-125 whitespace-nowrap font-mk-hell text-[#3BB39A]">
                all in time
              </p>
              <p className="text-lg xl:text-xl font-mkHell text-center whitespace-nowrap font-mk-hell text-custom-teal">
                a virtuous lifestyle,
                <br />
                with very little patience
              </p>
            </div>
            {/* footer text */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full  
              text-center opacity-80 whitespace-nowrap px-8"
            >
              <div className="w-full flex justify-center items-center text-sm xl:text-base ">
                <p className="font-pangram text-custom-teal mr-1 pb-2 tracking-widest">
                  VOLUME 1
                </p>
                <div className="w-full h-[1px] bg-transparent border-b-2 xl:border-b-[3px] 2xl:border-b-4 border-dotted border-custom-teal" />
                <p className="font-pangram text-custom-teal ml-1 pb-2 tracking-widest">
                  ESSENTIALS
                </p>
              </div>
            </div>
            <div className="w-fit mx-auto pl-14">
              <Image
                src="/images/landing/intro.jpg"
                alt="AIT"
                priority={true}
                width={1494 * 0.3}
                height={2060 * 0.3}
                onLoadingComplete={() =>
                  setAssets && setAssets((prevState) => [(prevState[0] = true)])
                }
                className="rounded-[100px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-[85%] max-w-[2200px] mx-auto bg-custom-black h-40 flex items-center justify-center" />
      {/* banner */}
      {/* <div className="w-[85%] max-w-[2200px] mx-auto  bg-[#EBEBEB] h-6 xl:h-8 flex items-center justify-center">
        <p
          className="px-2 whitespace-nowrap overflow-hidden uppercase xl:text-lg text-center 
              text-black font-neuebitBold tracking-[0.2em] xl:tracking-[0.32em] 2xl:tracking-[0.41em] 3xl:tracking-[0.7em]"
        >
          {`rob banks // use space magic // be a real life action figure
              // time travel // get drained (with style)`}
        </p>
      </div> */}
    </div>
  );
};

export default LandingView;
