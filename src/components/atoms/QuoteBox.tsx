import { FC } from "react";
import Image from "next/image";

interface Props {
  quote: string;
  author: string;
  icon: string;
}

const QuoteBox: FC<Props> = ({ quote, author, icon }) => {
  return (
    <div className="quote w-[150%] min-h-[115px] bg-white flex justify-center items-center border-2 border-black rounded-lg drop-shadow-card">
      <div className="w-full flex items-center justify-evenly">
        <Image src={icon} width={100} height={100} alt="reviewer icon" />
        <div className="w-2/3 h-full flex flex-col items-start justify-evenly py-6">
          <p className="text-sm">{author}</p>
          <p className="font-mk-hell">{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
