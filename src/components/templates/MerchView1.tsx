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
          <div className="relative w-full -z-10">
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
