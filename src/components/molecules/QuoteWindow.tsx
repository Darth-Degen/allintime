import { FC } from "react";
import { QuoteImage, QuoteBox } from "@components";

interface Props {
  image: string;
  offset?: string;
  quote: string;
  author: string;
  icon: string;
}

const QuoteWindow: FC<Props> = ({ image, offset, quote, author, icon }) => {
  return (
    <div className="relative">
      <QuoteImage image={image} offset={offset} />
      <div
        className={`${offset} absolute top-5 left-0 w-full h-full flex justify-center items-center`}
      >
        <QuoteBox quote={quote} author={author} icon={icon} />
      </div>
    </div>
  );
};

export default QuoteWindow;
