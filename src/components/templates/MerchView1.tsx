import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext, enterAnimation } from "@constants";
import { BrandBox, MerchQuotes } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const MerchView1: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="w-full h-full bg-custom-teal">
      <div
        className="w-[90%] mx-auto
        h-full flex flex-col items-center justify-center"
      >
        <motion.div {...enterAnimation} className="w-full">
          <div className="w-full bg-custom-black h-20 flex items-center justify-center" />
          {/* banner */}
          <div className="w-full bg-white h-10 flex items-center justify-center">
            <p className="px-5 whitespace-nowrap overflow-hidden uppercase text-base lg:text-lg 2xl:text-2xl text-center text-black font-neuebitBold tracking-[0.22em]">
              {`rob banks // use space magic // be a real life action figure
              // time travel // get drained (with style)`}
            </p>
          </div>
          <div className="relative w-full pb-10">
            <Image
              src="/images/merch/merch_images.png"
              width={3800}
              height={3267}
              alt="merch images"
              priority
              onLoadingComplete={() =>
                setAssets && setAssets((prevState) => [(prevState[0] = true)])
              }
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
              <BrandBox />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MerchView1;
