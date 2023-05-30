import Image from "next/image";
import { FC } from "react";
import { Button, HatTabs, ItemInfo, RacksDottedLine } from "@components";
import { useWindowSize } from "src/hooks";

const CorduroyHat: FC = () => {
  const [width] = useWindowSize();
  const tabletView = width < 1536 && width > 1024;
  const mobileView = width < 1024;
  return (
    <div className="w-full h-full bg-noisy-brown py-32 xl:pt-64">
      <div className="w-full max-w-[1900px] mx-auto px-16 xl:px-32">
        <Image
          src="/images/corduroy_hat/three_hats.png"
          width={1808}
          height={522}
          alt="corduroy hats"
          className="w-full mb-20"
        />
        <div className="flex items-start justify-between font-black uppercase text-custom-yellow2">
          <p className="text-2xl lg:text-4xl text-left">
            corduroy dad hat
            <br />
            AIT // v1
          </p>
          <p className="text-[11px] lg:text-sm text-right">
            “good” brown
            <br />
            stylish brain container
            <br />
            Did you hear the one about the corduroy hat?
            <br />
            it made headlines.
          </p>
        </div>
        <div className="w-full flex items-center justify-center py-10 xl:py-16">
          <p className="text-center uppercase sarcastic-hat text-custom-yellow2 text-xl xl:text-2xl">
            it goes on your head
          </p>
        </div>
        <div className="flex items-end justify-between uppercase text-custom-yellow2 pb-16">
          <p className="text-base xl:text-2xl text-left font-secondary whitespace-nowrap">
            0.11kg (probably)
          </p>
          <HatTabs className="h-4 px-8 mb-1" />
          <p className="font-secondary text-sm text-right leading-4 xl:leading-7">
            pieces
            <br />
            <span className="text-3xl xl:text-[50px] font-secondary">
              01/200
            </span>
          </p>
        </div>
        <ItemInfo
          title="corduroy dad hat"
          description1="a really nice brown"
          description2="custom embroidery & tags"
          description3="stickers"
          textColor="#FABC2A"
          price={5}
          buttonBgColor="#FABC2A"
          buttonTextColor="#312A29"
        />
      </div>
    </div>
  );
};

export default CorduroyHat;
