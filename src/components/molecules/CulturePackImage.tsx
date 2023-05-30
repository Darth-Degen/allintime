import Image from "next/image";
import { FC } from "react";

interface Props {
  image: string;
  description: string;
}

const CulturePackImage: FC<Props> = ({ image, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        width={400}
        height={400}
        src={image}
        alt={description}
        className="rounded-xl overflow-hidden"
      />
      <p className="text-xs xl:text-base text-black xl:px-4 uppercase font-secondary">
        {description}
      </p>
    </div>
  );
};

export default CulturePackImage;
