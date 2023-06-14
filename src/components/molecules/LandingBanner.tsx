import { StarIcon } from "@components";

const LandingBanner = () => {
  return (
    <div className="w-full flex gap-4 items-center justify-between px-8 font-mkHell">
      <p className="xl:text-xl w-fit whitespace-nowrap font-mk-hell text-custom-teal pb-[6px]">
        there&apos;s always
      </p>
      <div className="w-full h-[1px] bg-custom-teal" />
      <StarIcon />
      <div className="w-full h-[1px] bg-custom-teal" />
      <p className="xl:text-xl w-fit whitespace-nowrap font-mk-hell text-custom-teal pb-[6px]">
        more time
      </p>
    </div>
  );
};

export default LandingBanner;
