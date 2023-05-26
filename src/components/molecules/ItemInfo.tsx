import { FC } from "react";
import Image from "next/image";
import { RacksDottedLine, Button } from "@components";
import { useWindowSize } from "src/hooks";

interface Props {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  textColor: string;
  price: number;
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
      className={`w-full max-w-[1900px] mx-auto pt-10 ${padding && "px-32"}`}
      style={{ color: textColor }}
    >
      <p className="font-black uppercase text-3xl">{title}</p>
      <p className="font-secondary uppercase">{description1}</p>
      <p className="font-secondary uppercase">{description2}</p>
      <p className="font-secondary uppercase">{description3}</p>
      <div className="w-full flex items-center justify-between -translate-y-5">
        <p className="font-secondary uppercase whitespace-nowrap w-fit">
          {`cost: ${price.toLocaleString()} racks`}
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
          className={`w-fit h-16 font-bold !rounded-full text-black ${
            buttonBorder && "border-2"
          }
          font-secondary text-[30px] px-20 uppercase whitespace-nowrap`}
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
            borderColor: buttonBorder,
          }}
          onClick={() => console.log("buy racks")}
        >
          Buy Racks
        </Button>
      </div>
    </div>
  );
};

export default ItemInfo;
