import { FC } from "react";
import Image from "next/image";

const GraphicTee: FC = () => {
  return (
    <div className="w-full h-full bg-custom-black2 pt-20">
      <div className="w-full h-full flex flex-col items-center max-w-[1900px] mx-auto mt-[500px] px-32">
        <p className="w-full text-center text-custom-yellow text-[70px] leading-[80px] xl:text-[200px] xl:leading-[190px]">
          it&apos;s a graphic tee
        </p>
        <Image
          src="/images/graphic_tee/graphic_tee.png"
          width={1808}
          height={1246}
          alt="graphic tee"
        />
        <Image
          src="/images/graphic_tee/tee_models.png"
          width={1808}
          height={967}
          alt="familiar graphic tee models"
          className="my-10"
        />
      </div>
    </div>
  );
};

export default GraphicTee;
