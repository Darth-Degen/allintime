import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { enterAnimation } from "@constants";

const PikaView: FC = () => {
  return (
    <div className="w-full h-full bg-pikachu-gradient">
      <motion.div
        {...enterAnimation}
        className="relative flex flex-col items-center justify-center mt-14 xl:pt-8 w-fit max-w-[70%] mx-auto h-full"
      >
        <Image
          src="/images/pika/available_packages_bubbles.png"
          width={7203}
          height={2189}
          alt="available packages"
          className="w-full pb-10 xl:translate-y-20"
        />
        <div className="flex items-center justify-between w-full px-16 xl:px-32 -translate-y-20 xl:-mr-10">
          <Image
            src="/images/pika/characters.png"
            width={351.2}
            height={250.8}
            alt="japanese characters"
            className="w-1/4 pb-10 2xl:pb-32"
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
            className="w-1/4 pb-10 2xl:pb-32"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PikaView;
