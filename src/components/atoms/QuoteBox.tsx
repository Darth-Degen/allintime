import { FC } from "react";
import Image from "next/image";
import { useWindowSize } from "src/hooks";

interface Props {
  quote: string;
  author: string;
  icon: string;
}

const QuoteBox: FC<Props> = ({ quote, author, icon }) => {
  const [width] = useWindowSize();
  const ultraWideView = width > 1920;
  const tabletView = width < 1536;
  const mobileView = width < 1024;

  return (
    <div
      className="3xl:mt-20 quote bg-white w-[390px] h-[110px]  2xl:w-[420px] 2xl:h-[150px]
      flex justify-center items-center border-2 border-black rounded-lg drop-shadow-card"
    >
      <div className="w-full flex items-center justify-evenly py-0.5 3xl:py-4">
        {!mobileView && (
          <Image
            src={icon}
            width={ultraWideView ? 120 : tabletView ? 80 : 100}
            height={ultraWideView ? 120 : tabletView ? 80 : 100}
            alt="reviewer icon"
            className="px-2"
          />
        )}

        <div
          className="w-full xl:w-2/3 h-full flex flex-col items-start justify-evenly
          py-2 xl:py-6 px-3 xl:px-0"
        >
          <p className="text-[11px] 2xl:text-[13px] 4xl:text-base forma-bold">
            {author}
          </p>
          <p className="text-xs 2xl:text-sm 4xl:text-lg">{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
