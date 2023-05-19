import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext, enterAnimation } from "@constants";
import { MerchQuotes } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const MerchView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="w-full h-full bg-custom-teal">
      <div
        className="bg-custom-black w-[90%] mx-auto
        h-full flex flex-col items-center justify-center"
      >
        <motion.div {...enterAnimation} className="w-full">
          {/* banner */}
          <div className="w-full bg-white h-10 flex items-center justify-center">
            <p className="text-xl text-center text-black">
              {`rob banks // use space magic // be a real life action figure
              // time travel // get drained (with style)`}
            </p>
          </div>
          <div className="flex items-center justify-evenly w-full py-10">
            <Image
              src="/images/merch/shirt.png"
              width={464}
              height={1153}
              alt="black t shirt"
            />
            <Image
              src="/images/merch/hoodie.png"
              width={464}
              height={1153}
              alt="hoodie"
            />
            <Image
              src="/images/merch/cap.png"
              width={464}
              height={1153}
              alt="cap"
            />
          </div>
        </motion.div>
      </div>
      <div
        className="bg-merch-gradient mx-auto w-full h-full 
        flex flex-col items-center justify-center"
      >
        <motion.div
          {...enterAnimation}
          className="w-full flex items-center justify-center py-20"
        >
          <MerchQuotes />
        </motion.div>
      </div>
    </div>
  );
};

export default MerchView;
