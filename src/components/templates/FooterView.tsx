import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family";
import Image from "next/image";
import { FC } from "react";
import ExpIcon from "../@icons/ExpIcon";

const FooterView: FC = () => {
  return (
    <div className="w-full h-full xl:mt-40">
      <div className="w-full max-w-[1900px] mx-auto px-12 xl:px-32 font-pangram text-center">
        <Image
          src="/images/footer/design_trends.png"
          width={3288}
          height={1233}
          alt="design trends"
          className="xl:px-32"
        />
        <p
          className="mt-5 text-center text-xl lowercase text-white"
          style={{ fontFamily: "Times New Roman" }}
        >
          *JK i worked really hard on this &lt;3 scum
        </p>
        <div className="flex items-center justify-between pt-40 pb-8">
          <Image
            src="/images/footer/all_in_time_bubbles.png"
            width={2146}
            height={427}
            alt="all in time bubbles"
            className="h-20 xl:h-32 w-fit"
          />
          <div className="flex flex-col items-center">
            <ExpIcon className="h-20" fill="white" />
            <p className="-mt-2 text-white font-pangram">powered by EXP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterView;
