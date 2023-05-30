import Image from "next/image";
import { FC } from "react";
import { useWindowSize } from "src/hooks";
import CulturePackImage from "../molecules/CulturePackImage";
import ItemInfo from "../molecules/ItemInfo";

const CulturePack: FC = () => {
  const [width] = useWindowSize();
  const mobileView = width < 1280;
  return (
    <div className="w-full h-full my-40">
      <div className="w-full max-w-[1900px] mx-auto px-32">
        <div className="relative w-full z-[+1]">
          <p
            className="text-[120px] leading-[110px] xl:text-[190px] xl:leading-[170px]
            2xl:text-[250px] 2xl:leading-[200px] font-black text-custom-white2 uppercase"
          >
            culture
            <br />
            builder
            <br />
            pack
            <span className="font-secondary text-[20px] 2xl:text-[40px] pl-3">
              01/200
            </span>
          </p>
          <p className="absolute bottom-10 right-0 w-40 font-secondary text-custom-white2 uppercase">
            * some assembly required
          </p>
          <Image
            src="/images/culture_pack/green_item.png"
            width={mobileView ? 288 : 575.5}
            height={mobileView ? 327.5 : 655}
            alt="culture pack"
            className="absolute top-0 right-10 z-[-1]"
          />
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 z-[-1]">
          {/* four images with descriptions */}
          <CulturePackImage
            image="/images/culture_pack/pen.png"
            description="an extremely powerful pen (smoke not included)"
          />
          <CulturePackImage
            image="/images/culture_pack/stickers.png"
            description="a sketchbook with the power to create entire worlds"
          />
          <CulturePackImage
            image="/images/culture_pack/pen.png"
            description="a hard enamel pin to add some ice to your backpack"
          />
          <CulturePackImage
            image="/images/culture_pack/stickers.png"
            description="stickers - go and spread the word. "
          />
        </div>
        <ItemInfo
          title="culture builder pack"
          description1="custom lamy pen"
          description2="custom sketchbook"
          description3="hard enamel pin"
          textColor="white"
          price={5}
          buttonBgColor="white"
          buttonTextColor="#3D7FFF"
          buttonBorder="#312A29"
        />
      </div>
    </div>
  );
};

export default CulturePack;
