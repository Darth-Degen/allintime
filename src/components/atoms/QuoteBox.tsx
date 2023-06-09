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
      className="3xl:mt-20 quote w-[150%] min-h-[85px] 2xl:min-h-[115px] bg-white 
      flex justify-center items-center border-2 border-black rounded-lg drop-shadow-card"
    >
      <div className="w-full flex items-center justify-evenly py-1 3xl:py-4">
        {!mobileView && (
          <Image
            src={icon}
            width={ultraWideView ? 150 : tabletView ? 70 : 100}
            height={ultraWideView ? 150 : tabletView ? 70 : 100}
            alt="reviewer icon"
            className="px-2"
          />
        )}

        <div
          className="w-full xl:w-2/3 h-full flex flex-col items-start justify-evenly
          py-2 xl:py-6 px-3 xl:px-1"
        >
          <p className="text-[9px] xl:text-[13px] 4xl:text-base forma-bold">
            {author}
          </p>
          <p className="text-[10px] xl:text-sm 2xl:text-base 4xl:text-lg">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
