import { FC } from "react";
import Image from "next/image";
import { Button, RacksDottedLine } from "@components";
import { useWindowSize } from "src/hooks";

const ShirtHatTransition: FC = () => {
  const [width] = useWindowSize();
  const tabletView = width < 1536 && width > 1024;
  const mobileView = width < 1024;
  return (
    <div className="relative w-full h-full bg-noisy-brown">
      <Image
        src="/images/graphic_tee/tee_transition.svg"
        width={9168}
        height={2103}
        alt="transition piece"
        className="-mt-3 w-full"
      />
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-full">
        <div className="relative w-full max-w-[1785px] mx-auto px-32 text-white">
          <p className="font-secondary uppercase text-3xl">skullface tee</p>
          <p className="font-secondary uppercase text-xl">100% organic knit</p>
          <p className="font-secondary uppercase text-xl">
            front and back print
          </p>
          <p className="font-secondary uppercase text-xl">2 custom tags</p>
          <div className="w-full flex items-center justify-between -translate-y-5">
            <p className="font-secondary uppercase whitespace-nowrap w-fit text-xl">
              cost: <span className="font-thin">5 racks</span>
            </p>
            <div className="relative w-full px-4">
              <RacksDottedLine className="w-full fill-white" />
              <Image
                src="/images/nice_crewneck/racks.png"
                width={tabletView ? 80 : mobileView ? 50 : 120}
                height={tabletView ? 80 : mobileView ? 50 : 120}
                alt="racks aka dolla dolla bill"
                className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
              />
            </div>
            <Button
              className="w-fit h-16 bg-custom-red font-bold
              !rounded-full text-black font-secondary text-[30px] px-20 uppercase whitespace-nowrap"
              onClick={() => console.log("buy racks")}
            >
              Buy Racks
            </Button>
          </div>
          <div className="absolute right-32 top-0 text-custom-red">
            <p className="text-right">pieces</p>
            <p className="text-[50px] leading-10 pt-2">01/200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShirtHatTransition;
