import { FC } from "react";
import Image from "next/image";

const ShirtHatTransition: FC = () => {
  return (
    <div className="w-full h-full bg-custom-brown">
      <Image
        src="/images/graphic_tee/tee_transition.svg"
        width={9168}
        height={2103}
        alt="transition piece -mt-3 relative"
      />
    </div>
  );
};

export default ShirtHatTransition;
