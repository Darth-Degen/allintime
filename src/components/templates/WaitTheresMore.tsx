import { FC } from "react";

const WaitTheresMore: FC = () => {
  return (
    <div className="w-full h-[200vh] more-gradient pt-20">
      <div className="h-full py-40 flex flex-col items-center justify-between">
        <div>
          <p className="text-lg xl:text-4xl text-black text-center uppercase font-neuebitBold">
            but wait
            <br />
            there&apos;s more
          </p>
          <svg
            width="8"
            height="47.4"
            viewBox="0 0 38 236"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-fit mx-auto"
          >
            <path
              d="M19 0.666667C11.6362 0.666667 5.66667 6.6362 5.66667 14C5.66667 21.3638 11.6362 27.3333 19 27.3333C26.3638 27.3333 32.3333 21.3638 32.3333 14C32.3333 6.6362 26.3638 0.666667 19 0.666667ZM17.2322 234.768C18.2085 235.744 19.7914 235.744 20.7678 234.768L36.6777 218.858C37.654 217.882 37.654 216.299 36.6777 215.322C35.7014 214.346 34.1184 214.346 33.1421 215.322L19 229.464L4.85786 215.322C3.88154 214.346 2.29863 214.346 1.32232 215.322C0.346011 216.299 0.346011 217.882 1.32232 218.858L17.2322 234.768ZM16.5 14L16.5 233L21.5 233L21.5 14L16.5 14Z"
              fill="black"
            />
          </svg>
        </div>
        <p className="text-white text-xl xl:text-[60px] text-center">
          that&apos;s right
        </p>
      </div>
    </div>
  );
};

export default WaitTheresMore;
