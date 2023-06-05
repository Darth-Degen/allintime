import {
  GlobeIcon,
  NoteIcon2,
  QuoteTabs,
  QuoteWindow,
  VirtuousLifestyleIcon,
} from "@components";
import NoteIcon1 from "../@icons/NoteIcon1";

const MerchQuotes = () => {
  return (
    <div
      className="relative w-[90%] max-w-[1600px] mx-auto bg-white rounded-[60px] font-pangram 
      flex justify-between pt-16 pb-24 px-10 xl:px-20"
    >
      <VirtuousLifestyleIcon
        fill="#939393"
        className="absolute bottom-14 left-10 2xl:left-16 w-52 2xl:w-80 3xl:w-96 h-fit"
      />
      <GlobeIcon className="absolute bottom-14 right-10 2xl:right-16 w-16 2xl:w-28 3xl:w-36 h-fit" />
      <div className="absolute top-5 right-8 h-6 2xl:h-8 w-fit">
        <div className="flex items-center gap-5">
          <NoteIcon1 className="h-6 2xl:h-8 3xl:h-10 w-fit" />
          <NoteIcon2 className="h-6 2xl:h-8 3xl:h-10 w-fit" />
        </div>
      </div>
      <QuoteTabs className="absolute bottom-6 left-1/2 -translate-x-1/2 h-fit w-[90%] 2xl:w-[95%]" />

      <div className="flex justify-between gap-6 2xl:gap-8">
        <QuoteWindow
          image="/images/merch/betty.png"
          icon="/images/merch/betty_icon.png"
          offset="mb-auto"
          quote={`“ever since i bought my All In Time drip, i’ve been hitting licks with zero shit from the pigs.”`}
          author="Mrs. White"
        />
        <QuoteWindow
          image="/images/merch/usain.png"
          icon="/images/merch/usain_icon.png"
          offset="mt-auto pt-20 xl:pt-28 2xl:pt-36"
          quote={`“I used a photo of a zombie frat boy as my PFP, but since getting some All in TIme, I use me.”`}
          author="Fast Runner"
        />
        <QuoteWindow
          image="/images/merch/yoda.png"
          icon="/images/merch/yoda_icon.png"
          offset="mb-auto"
          quote={`“Interpol you can call, give fucks I do not.”`}
          author="M. Toyota"
        />
      </div>
    </div>
  );
};

export default MerchQuotes;
