import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { enterAnimation } from "@constants";

const PikaView: FC = () => {
  return (
    <div className="w-full h-full bg-pikachu-gradient">
      <motion.div
        {...enterAnimation}
        className="relative flex flex-col items-center justify-center w-fit max-w-[70%] mx-auto h-full"
      >
        <Image
          src="/images/pika/available_packages_bubbles.png"
          width={7203}
          height={2189}
          alt="available packages"
          className="w-full py-10 translate-y-10 xl:translate-y-20 2xl:translate-y-5"
        />
        <div className="flex items-center justify-between w-full px-16 -translate-y-24 2xl:-translate-y-32">
          <Image
            src="/images/pika/characters.png"
            width={351.2}
            height={250.8}
            alt="japanese characters"
            className="w-[30%] pb-10 2xl:pb-32"
          />
          <Image
            src="/images/pika/pika.png"
            width={2710}
            height={4064}
            alt="familiar sweatshirt model"
            className="w-[40%] 2xl:-translate-y-20 z-50"
          />
          <Image
            src="/images/pika/characters.png"
            width={351.2}
            height={250.8}
            alt="japanese characters"
            className="w-[30%] pb-10 2xl:pb-32"
          />
        </div>
      </motion.div>
      <Image
        src="/images/pika/clouds_stock.png"
        width={1537}
        height={330}
        alt="adobe stock clouds"
        className="w-full -mt-56 xl:-mt-60 2xl:-mt-96 opacity-80 z[+1]"
      />
    </div>
  );
};

export default PikaView;
