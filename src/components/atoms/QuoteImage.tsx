import Image from "next/image";
import { FC } from "react";

interface Props {
  image: string;
  offset?: string;
}

const QuoteImage: FC<Props> = ({ image, offset }) => {
  return (
    <div className={`${offset} bg-white rounded-t-full rounded-b-full`}>
      <Image
        src={image}
        width={1720}
        height={2280}
        alt="AI generated reviewer"
      />
    </div>
  );
};

export default QuoteImage;
