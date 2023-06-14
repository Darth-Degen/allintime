import { FC } from "react";
import Image from "next/image";
import { RacksDottedLine, Button } from "@components";
import { useWindowSize } from "src/hooks";

interface Props {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4?: string;
  textColor: string;
  price: number | string;
  buttonBgColor: string;
  buttonTextColor: string;
  buttonBorder?: string;
  padding?: boolean;
}

const ItemInfo: FC<Props> = ({
  title,
  description1,
  description2,
  description3,
  description4,
  textColor,
  price,
  buttonBgColor,
  buttonTextColor,
  buttonBorder,
  padding = false,
}) => {
  const [width] = useWindowSize();
  const tabletView = width < 1536 && width > 1024;
  const mobileView = width < 1024;
  return (
    <div
      className={`w-full max-w-[1900px] mx-auto pt-4 xl:pt-10 flex flex-col gap-2 ${
        padding && "px-32"
      }`}
      style={{ color: textColor }}
    >
      <p className="forma-bold uppercase text-xl xl:text-2xl">{title}</p>
      <p className="forma uppercase text-xs xl:text-base">{description1}</p>
      <p className="forma uppercase text-xs xl:text-base">{description2}</p>
      <p className="forma uppercase text-xs xl:text-base">{description3}</p>
      {description4 && (
        <p className="forma uppercase text-xs xl:text-base">{description4}</p>
      )}
      <div className="w-full flex items-center justify-between -translate-y-4 xl:-translate-y-[13px]">
        <p className="forma uppercase text-xs xl:text-base whitespace-nowrap w-fit">
          {`cost: ${price} racks`}
        </p>
        <div className="relative w-full px-4">
          <RacksDottedLine className="w-full" style={{ fill: textColor }} />
          <Image
            src="/images/nice_crewneck/racks.png"
            width={tabletView ? 80 : mobileView ? 50 : 120}
            height={tabletView ? 80 : mobileView ? 50 : 120}
            alt="racks aka dolla dolla bill"
            className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
          />
        </div>
        <Button
          className={`w-fit h-10 xl:h-12 font-bold -mt-1 !rounded-full text-black ${
            buttonBorder && "border"
          }
          font-pangram text-xl xl:text-3xl px-8 xl:px-16 uppercase whitespace-nowrap`}
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
            borderColor: buttonBorder,
          }}
          onClick={() => console.log("buy racks")}
          disabled={true}
        >
          Buy Racks
        </Button>
      </div>
    </div>
  );
};

export default ItemInfo;
