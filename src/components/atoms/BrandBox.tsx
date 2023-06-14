import { FC } from "react";
const BrandBox: FC = () => {
  return (
    <div className="border-4 border-white w-[400px] xl:w-[500px] 2xl:w-[600px] 3xl:w-[700px] bg-custom-black">
      <div className="border-b-4 border-white flex items-center justify-between py-1 px-2">
        <p className="uppercase text-base xl:text-xl font-neuebit text-white">
          All In Time
        </p>
        <p className="uppercase text-base xl:text-xl font-neuebit text-white">
          All In Time
        </p>
        <p className="uppercase text-base xl:text-xl font-neuebit text-white">
          All In Time
        </p>
        <p className="uppercase text-base xl:text-xl font-neuebit text-white">
          All In Time
        </p>
      </div>
      <div className="w-full text-center flex flex-col items-center justify-center py-3 px-5 xl:py-5 xl:px-20 2xl:px-32">
        <p className="text-base xl:text-xl font-neuebit text-white">
          Phrase - things will happen when they should
        </p>
        <p className="text-base xl:text-xl font-neuebit text-white mt-2 xl:mt-6">
          Clothing line: A small collection of very limited clothing and
          lifestyle items created by scum.
        </p>
      </div>
    </div>
  );
};

export default BrandBox;
