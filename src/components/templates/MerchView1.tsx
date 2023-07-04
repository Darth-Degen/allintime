import { motion } from "framer-motion";
import { FC } from "react";
import { enterAnimation } from "@constants";
import { BrandBox } from "@components";
import Image from "next/image";

const MerchView1: FC = () => {
  return (
    <div className="w-full h-full bg-custom-teal">
      <div
        className="w-[85%] max-w-[2200px] mx-auto
        h-full flex flex-col items-center justify-center"
      >
        <motion.div {...enterAnimation} className="w-full">
          <div className="w-full bg-custom-black h-40 flex items-center justify-center" />
          {/* banner */}
          <div className="w-full bg-[#EBEBEB] h-6 xl:h-8 flex items-center justify-center">
            <p
              className="px-2 whitespace-nowrap overflow-hidden uppercase xl:text-lg text-center 
              text-black font-neuebitBold tracking-[0.2em] xl:tracking-[0.32em] 2xl:tracking-[0.41em] 3xl:tracking-[0.7em]"
            >
              {`rob banks // use space magic // be a real life action figure
              // time travel // get drained (with style)`}
            </p>
          </div>
          <div className="relative w-full -mt-20 -z-10">
            <Image
              src="/images/merch/merch_images.png"
              width={3800}
              height={3267}
              alt="merch images"
              priority={true}
            />
            <div className="absolute top-[63%] left-1/2 transform -translate-x-1/2">
              <BrandBox />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MerchView1;
