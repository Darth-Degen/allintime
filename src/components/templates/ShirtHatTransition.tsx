import { FC } from "react";
import Image from "next/image";
import { ItemInfo } from "@components";

const ShirtHatTransition: FC = () => {
  return (
    <div className="relative w-full h-full bg-noisy-brown">
      <Image
        src="/images/graphic_tee/tee_transition.svg"
        width={9168}
        height={2103}
        alt="transition piece"
        className="-mt-3 w-full"
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
        <ItemInfo
          title="skullface tee"
          description1="100% organic knit"
          description2="front and back print"
          description3="2 custom tags"
          textColor="white"
          price={5}
          buttonBgColor="#FF0000"
          buttonTextColor="#312A29"
          padding
        />
      </div>
    </div>
  );
};

export default ShirtHatTransition;
