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
  const tabletView = width < 1536 && width > 1024;
  const mobileView = width < 1024;

  return (
    <div
      className="quote w-[150%] min-h-[85px] 2xl:min-h-[115px] bg-white 
      flex justify-center items-center border-2 border-black rounded-lg drop-shadow-card"
    >
      <div className="w-full flex items-center justify-evenly">
        {!mobileView && (
          <Image
            src={icon}
            width={tabletView ? 80 : 100}
            height={tabletView ? 80 : 100}
            alt="reviewer icon"
            className="px-2"
          />
        )}

        <div className="w-full xl:w-2/3 h-full flex flex-col items-start justify-evenly py-2 xl:py-6 px-1">
          <p className="text-[9px] xl:text-sm">{author}</p>
          <p className="font-mk-hell text-[10px] xl:text-sm 2xl:text-base">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
