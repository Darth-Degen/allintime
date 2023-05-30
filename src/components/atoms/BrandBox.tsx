import { FC } from "react";
const BrandBox: FC = () => {
  return (
    <div className="border-4 border-white w-[400px] xl:w-[600px] mt-10 bg-custom-black">
      <div className="border-b-4 border-white flex items-center justify-between py-2 xl:py-4 px-6">
        <p className="uppercase text-base xl:text-2xl font-neuebitBold text-white">
          All In Time
        </p>
        <p className="uppercase text-base xl:text-2xl font-neuebitBold text-white">
          All In Time
        </p>
        <p className="uppercase text-base xl:text-2xl font-neuebitBold text-white">
          All In Time
        </p>
        <p className="uppercase text-base xl:text-2xl font-neuebitBold text-white">
          All In Time
        </p>
      </div>
      <div className="w-full text-center flex flex-col items-center justify-center p-3 xl:p-5">
        <p className="text-base xl:text-2xl font-neuebitBold text-white">
          Phrase - things will happen when they should
        </p>
        <p className="text-base xl:text-2xl font-neuebitBold text-white mt-2 xl:mt-6">
          Clothing line: A small collection of very limited clothing and
          lifestyle items created by scum.
        </p>
      </div>
    </div>
  );
};

export default BrandBox;
