import Image from "next/image";
import { FC } from "react";
import { useWindowSize } from "src/hooks";

const MobileView: FC = () => {
  const [_, height] = useWindowSize();

  const miniHeight = height < 843;
  return (
    <div className="lg:hidden h-screen flex flex-col justify-between items-center bg-custom-black3">
      {/* warning section */}
      <div className="w-full">
        {miniHeight ? (
          <Image
            src="/images/mobile/warning2.png"
            width={430}
            height={321}
            alt="warning"
            className="py-2 pr-1 mx-auto"
          />
        ) : (
          <Image
            src="/images/mobile/warning.png"
            width={430}
            height={402}
            alt="warning2"
            className="py-2 pr-1 mx-auto"
          />
        )}
        <Image
          src="/images/mobile/desktop_only.png"
          width={824}
          height={192}
          alt="desktop only warning"
          className="relative px-2 mx-auto"
        />
        {/* familiar cartoon character */}
        <div
          className={`absolute ${
            miniHeight ? "top-[5%]" : "top-[12%]"
          } left-1/2 -translate-x-1/2`}
        >
          <Image
            src="/images/mobile/pika.png"
            width={536}
            height={804}
            alt="familiar cartoon character"
          />
        </div>
        <div className="w-full flex items-center justify-evenly px-2 pt-2">
          <div className="w-1/2 px-2">
            <p className="text-custom-green2 text-center font-mkHell text-4xl">
              all in time
            </p>
          </div>
          <div className="w-1/2 px-2 pt-2">
            <p className="pl-3 text-custom-green2 text-left leading-4 text-xl font-neuebit">
              store opens june thirtieth twenty twenty three &lt;3
            </p>
          </div>
        </div>
      </div>
      {/* large chinese characters */}
      <Image
        src="/images/mobile/characters1.png"
        width={536 * 0.5}
        height={275 * 0.5}
        alt="green characters"
      />
      {/* footer section */}
      <div className="w-full bg-custom-green2 flex items-center justify-center">
        <Image
          src="/images/mobile/characters2.png"
          width={305 * 0.6}
          height={50 * 0.6}
          alt="footer characters"
          className="py-6"
        />
      </div>
    </div>
  );
};

export default MobileView;
