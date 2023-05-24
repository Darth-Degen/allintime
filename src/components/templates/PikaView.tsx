import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { enterAnimation } from "@constants";

const PikaView: FC = () => {
  return (
    <div className="w-full h-full bg-pikachu-gradient">
      <motion.div
        {...enterAnimation}
        className="relative flex flex-col items-center justify-center pt-8 w-fit max-w-[70%] mx-auto h-full"
      >
        <Image
          src="/images/pika/available_packages_bubbles.png"
          width={7203}
          height={2189}
          alt="available packages"
          className="w-[80%]"
        />
        <div className="flex items-center justify-between w-full px-20 -translate-y-20">
          <Image
            src="/images/pika/characters.png"
            width={351.2}
            height={250.8}
            alt="japanese characters"
            className="w-1/4 pl-10 pb-10 2xl:pb-32"
          />
          <Image
            src="/images/pika/pika.png"
            width={2710}
            height={4064}
            alt="familiar sweatshirt model"
            className="w-1/3 xl:-translate-y-8 2xl:-translate-y-16 z-50"
          />
          <Image
            src="/images/pika/characters.png"
            width={351.2}
            height={250.8}
            alt="japanese characters"
            className="w-1/4 pr-10 pb-10 2xl:pb-32"
          />
        </div>
      </motion.div>
      <Image
        src="/images/pika/clouds_stock.png"
        width={1537}
        height={330}
        alt="adobe stock clouds"
        className="z-[-1] absolute left-0 right-0 w-full -translate-y-40 2xl:-translate-y-80"
      />
    </div>
  );
};

export default PikaView;
