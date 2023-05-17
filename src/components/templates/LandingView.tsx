import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext, enterAnimation } from "@constants";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <motion.div {...enterAnimation}>
        <Image
          src="/images/landing/intro.png"
          alt="RULEBREAKERS"
          width={1494 * 0.4}
          height={2060 * 0.4}
          onLoadingComplete={() =>
            setAssets && setAssets((prevState) => [(prevState[0] = true)])
          }
        />
      </motion.div>
    </div>
  );
};

export default LandingView;
