import Image from "next/image";
import { FC } from "react";
import { Button, HatTabs, RacksDottedLine } from "@components";
import { useWindowSize } from "src/hooks";

const CorduroyHat: FC = () => {
  const [width] = useWindowSize();
  const tabletView = width < 1536 && width > 1024;
  const mobileView = width < 1024;
  return (
    <div className="w-full h-full bg-noisy-brown pt-64 pb-32">
      <div className="w-full max-w-[1900px] mx-auto px-32">
        <Image
          src="/images/corduroy_hat/three_hats.png"
          width={1808}
          height={522}
          alt="corduroy hats"
          className="w-full mb-20"
        />
        <div className="flex items-start justify-between font-black uppercase text-custom-yellow2">
          <p className="text-4xl text-left">
            corduroy dad hat
            <br />
            AIT // v1
          </p>
          <p className="text-sm text-right">
            “good” brown
            <br />
            stylish brain container
            <br />
            Did you hear the one about the corduroy hat?
            <br />
            it made headlines.
          </p>
        </div>
        <div className="w-full flex items-center justify-center py-16">
          <p className="text-center uppercase sarcastic-hat text-custom-yellow2 text-2xl">
            it goes on your head
          </p>
        </div>
        <div className="flex items-end justify-between uppercase text-custom-yellow2 pb-16">
          <p className="text-2xl text-left font-secondary whitespace-nowrap">
            0.11kg (probably)
          </p>
          <HatTabs className="h-4" />
          <p className="font-secondary text-sm text-right leading-7">
            pieces
            <br />
            <span className="text-[50px] font-secondary">01/200</span>
          </p>
        </div>
        <div className="w-full max-w-[1900px] mx-auto text-custom-yellow2">
          <p className="font-black uppercase text-3xl">corduroy dad hat</p>
          <p className="font-secondary uppercase">a really nice brown</p>
          <p className="font-secondary uppercase">custom embroidery & tags</p>
          <p className="font-secondary uppercase">stickers</p>
          <div className="w-full flex items-center justify-between -translate-y-5">
            <p className="font-secondary uppercase whitespace-nowrap w-fit">
              cost: 5 racks
            </p>
            <div className="relative w-full px-4">
              <RacksDottedLine className="w-full fill-custom-yellow2" />
              <Image
                src="/images/nice_crewneck/racks.png"
                width={tabletView ? 80 : mobileView ? 50 : 120}
                height={tabletView ? 80 : mobileView ? 50 : 120}
                alt="racks aka dolla dolla bill"
                className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
              />
            </div>
            <Button
              className="w-fit h-16 bg-custom-yellow2 px-20 uppercase text-[#312A29]
              !rounded-full font-secondary text-[30px] whitespace-nowrap"
              onClick={() => console.log("buy racks")}
            >
              Buy Racks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorduroyHat;
