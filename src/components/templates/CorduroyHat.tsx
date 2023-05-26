import Image from "next/image";
import { FC } from "react";

const CorduroyHat: FC = () => {
  return (
    <div className="w-full h-full bg-custom-brown pt-64">
      <div className="w-full max-w-[1785px] mx-auto px-32">
        <Image
          src="/images/corduroy_hat/three_hats.png"
          width={1808}
          height={522}
          alt="corduroy hats"
          className="w-full mb-20"
        />
      </div>
    </div>
  );
};

export default CorduroyHat;
