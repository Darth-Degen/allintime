import Image from "next/image";
import { FC } from "react";
import { useWindowSize } from "src/hooks";

const MobileView: FC = () => {
  const [width, height] = useWindowSize();

  const miniHeight = height < 843;
  const tabletWidth = width > 750 && height >= 1180;
  return (
    <div className="lg:hidden min-h-screen flex flex-col justify-between items-center bg-custom-black3">
      {/* warning section */}
      <div className="w-full">
        <div className="relative">
          {/* {miniHeight || tabletWidth ? ( */}
          {/* <Image
            src="/images/mobile/warning2.png"
            width={12920}
            height={963}
            alt="warning"
            className="py-2 pr-1 mx-auto"
          /> */}
          {/* ) : ( */}
          <Image
            src="/images/mobile/warning.png"
            width={1720}
            height={1284}
            alt="warning2"
            className="py-2 pr-1 mx-auto"
          />
          {/* )} */}
          {/* familiar cartoon character */}
          <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2`}>
            <Image
              src="/images/mobile/pika.png"
              width={536 * 0.8}
              height={804 * 0.8}
              alt="familiar cartoon character"
            />
          </div>
        </div>
        <div className="border-4 border-custom-green2 flex items-center gap-4 px-4 py-2.5 -z-10 mx-2 my-1">
          <Image
            src="/images/mobile/gear.png"
            width={60}
            height={60}
            alt="gear"
            className="w-[60px] h-[60px]"
          />
          <div className="pl-0 flex flex-col justify-start text-custom-green2">
            <p className="text-3xl tracking-wider font-neuebitBold md:text-4xl leading-7">
              website is desktop only
            </p>
            <p className="text-base md:text-xl font-neuebit tracking-wide leading-none">
              ticket sales and store will be available on mobile, but until
              then, go check out the website on desktop.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-evenly px-2 pt-0 gap-2">
          <div className="w-1/2 ">
            <p className="text-custom-green2 text-center font-mkHell text-4xl sm:text-[50px]">
              all in time
            </p>
          </div>
          <div className="w-1/2  pt-2">
            <p className=" text-custom-green2 text-left leading-4 text-xl sm:text-4xl font-neuebitBold tracking-wide">
              store opens june thirtieth twenty twenty three &lt;3
            </p>
          </div>
        </div>
      </div>
      {/* large chinese characters */}
      <Image
        src="/images/mobile/characters1.png"
        width={536 * 0.6}
        height={275 * 0.6}
        alt="green characters"
        className="py-8"
      />
      {/* footer section */}
      <div className="w-full bg-custom-green2 flex items-center justify-center">
        <Image
          src="/images/mobile/characters2.png"
          width={305 * 0.6}
          height={50 * 0.6}
          alt="footer characters"
          className="py-6 sm:py-10"
        />
      </div>
    </div>
  );
};

export default MobileView;
