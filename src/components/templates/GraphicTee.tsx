import { FC, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { slideUp } from "src/constants";

const GraphicTee: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const slideUpAnimation = slideUp(isInView, false);

  return (
    <div className="w-full h-full bg-custom-black2">
      <motion.div
        className="w-full h-full flex flex-col items-center max-w-[1900px] mx-auto mt-[300px] px-32"
        // {...slideUpAnimation}
        ref={ref}
      >
        <Image
          src="/images/graphic_tee/header_text.png"
          width={3566}
          height={375}
          alt="it's a graphic tee!"
          className="mb-6"
        />
        <Image
          src="/images/graphic_tee/graphic_tee.png"
          width={1808}
          height={1246}
          alt="graphic tee"
        />
        <Image
          src="/images/graphic_tee/tee_models.png"
          width={1808}
          height={967}
          alt="familiar graphic tee models"
          className="my-10"
        />
      </motion.div>
    </div>
  );
};

export default GraphicTee;
