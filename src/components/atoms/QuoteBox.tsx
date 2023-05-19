import { FC } from "react";
import Image from "next/image";

interface Props {
  quote: string;
  author: string;
  icon: string;
}

const QuoteBox: FC<Props> = ({ quote, author, icon }) => {
  return (
    <div className="w-[150%] bg-white flex justify-center items-center border-2 border-black rounded-lg drop-shadow-card">
      <div className="w-full flex items-center justify-evenly">
        <Image src={icon} width={100} height={100} alt="reviewer icon" />
        <div className="w-2/3 h-full flex flex-col items-start justify-evenly py-8">
          <p className="font-bold">{author}</p>
          <p className="font-mk-hell">{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
