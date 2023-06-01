import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family";
import Image from "next/image";
import { FC } from "react";
import ExpIcon from "../@icons/ExpIcon";

const FooterView: FC = () => {
  return (
    <div className="w-full h-full xl:mt-40">
      <div className="w-full max-w-[1900px] mx-auto px-12 xl:px-32 font-secondary text-center">
        BUY RACKS MODULE HERE
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
            className="h-10 xl:h-20 w-fit"
          />
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl h-12 w-20 flex items-center justify-center">
              <ExpIcon className="h-10" fill="#9CD9CC" />
            </div>
            <p className="mt-1 text-white font-secondary">powered by EXP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterView;
