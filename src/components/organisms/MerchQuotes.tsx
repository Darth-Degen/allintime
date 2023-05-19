import { QuoteWindow } from "@components";

const MerchQuotes = () => {
  return (
    <div
      className="w-3/4 mx-auto bg-white rounded-[80px] font-secondary 
      flex justify-between pt-20 pb-32 px-20"
    >
      <div className="flex justify-between gap-8">
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
