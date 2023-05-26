import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { enterAnimation } from "@constants";
import { Button, CrewneckFlavortext1, CrewneckFlavortext2 } from "@components";

const NiceFknCrew: FC = () => {
  return (
    <div className="w-full h-full bg-custom-tan">
      <motion.div
        {...enterAnimation}
        className="w-[90%] 2xl:w-3/4 max-w-[1785px] mx-auto"
      >
        <div className="w-full flex justify-center items-center pt-20 pb-10">
          <p className="font-secondary mr-5 whitespace-nowrap">ALL IN TIME</p>
          <div className="w-full h-[1px] bg-transparent border-b-4 border-dotted border-black" />
          <p className="font-secondary ml-5 whitespace-nowrap uppercase">
            a virtuous lifestyle with very little patience
          </p>
        </div>
        <div className="relative w-full mb-10">
          {/* <p className="font-secondary text-[150px] uppercase leading-[150px]">
            The nice f*cking crewneck
          </p>
          <div className="absolute right-0 bottom-0 text-sm w-96 h-[150px] border border-red-500 font-secondary text-justify">
            This was the first item created. We spent many many sleepless nights
            deciding the placement of the tags, the materials for the crewneck
            itself. The process taught me the basis for this collection. Nothing
            and I mean nothing is worth doing if it’s not done right. All in
            time.
          </div> */}
          <Image
            src="/images/nice_crewneck/NFC_text.png"
            width={4114}
            height={913}
            alt="header text"
          />
        </div>
        <div className="flex items-center justify-end w-full pb-10 gap-10">
          <CrewneckFlavortext1 className="h-16 w-fit" />
          <CrewneckFlavortext2 className="h-16 w-fit" />
          <div className="flex items-center gap-2">
            <svg
              width="91.4"
              height="4"
              viewBox="0 0 635 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666667 14C0.666667 21.3638 6.6362 27.3333 14 27.3333C21.3638 27.3333 27.3333 21.3638 27.3333 14C27.3333 6.6362 21.3638 0.666667 14 0.666667C6.6362 0.666667 0.666667 6.6362 0.666667 14ZM607.667 14C607.667 21.3638 613.636 27.3333 621 27.3333C628.364 27.3333 634.333 21.3638 634.333 14C634.333 6.6362 628.364 0.666667 621 0.666667C613.636 0.666667 607.667 6.6362 607.667 14ZM14 16.5H21.9868V11.5H14V16.5ZM37.9605 16.5H53.9342V11.5H37.9605V16.5ZM69.9079 16.5H85.8816V11.5H69.9079V16.5ZM101.855 16.5H117.829V11.5H101.855V16.5ZM133.803 16.5H149.776V11.5H133.803V16.5ZM165.75 16.5H181.724V11.5H165.75V16.5ZM197.697 16.5H213.671V11.5H197.697V16.5ZM229.645 16.5H245.618V11.5H229.645V16.5ZM261.592 16.5H277.566V11.5H261.592V16.5ZM293.539 16.5H309.513V11.5H293.539V16.5ZM325.487 16.5H341.461V11.5H325.487V16.5ZM357.434 16.5H373.408V11.5H357.434V16.5ZM389.382 16.5H405.355V11.5H389.382V16.5ZM421.329 16.5H437.303V11.5H421.329V16.5ZM453.276 16.5H469.25V11.5H453.276V16.5ZM485.224 16.5H501.197V11.5H485.224V16.5ZM517.171 16.5H533.145V11.5H517.171V16.5ZM549.119 16.5H565.092V11.5H549.119V16.5ZM581.066 16.5H597.04V11.5H581.066V16.5ZM613.013 16.5H621V11.5H613.013V16.5Z"
                fill="#312A29"
              />
            </svg>
            <p className="relative font-secondary whitespace-nowrap text-center text-4xl leading-5">
              01/200
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-base">
                pieces
              </span>
            </p>
            <svg
              width="91.4"
              height="4"
              viewBox="0 0 635 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666667 14C0.666667 21.3638 6.6362 27.3333 14 27.3333C21.3638 27.3333 27.3333 21.3638 27.3333 14C27.3333 6.6362 21.3638 0.666667 14 0.666667C6.6362 0.666667 0.666667 6.6362 0.666667 14ZM607.667 14C607.667 21.3638 613.636 27.3333 621 27.3333C628.364 27.3333 634.333 21.3638 634.333 14C634.333 6.6362 628.364 0.666667 621 0.666667C613.636 0.666667 607.667 6.6362 607.667 14ZM14 16.5H21.9868V11.5H14V16.5ZM37.9605 16.5H53.9342V11.5H37.9605V16.5ZM69.9079 16.5H85.8816V11.5H69.9079V16.5ZM101.855 16.5H117.829V11.5H101.855V16.5ZM133.803 16.5H149.776V11.5H133.803V16.5ZM165.75 16.5H181.724V11.5H165.75V16.5ZM197.697 16.5H213.671V11.5H197.697V16.5ZM229.645 16.5H245.618V11.5H229.645V16.5ZM261.592 16.5H277.566V11.5H261.592V16.5ZM293.539 16.5H309.513V11.5H293.539V16.5ZM325.487 16.5H341.461V11.5H325.487V16.5ZM357.434 16.5H373.408V11.5H357.434V16.5ZM389.382 16.5H405.355V11.5H389.382V16.5ZM421.329 16.5H437.303V11.5H421.329V16.5ZM453.276 16.5H469.25V11.5H453.276V16.5ZM485.224 16.5H501.197V11.5H485.224V16.5ZM517.171 16.5H533.145V11.5H517.171V16.5ZM549.119 16.5H565.092V11.5H549.119V16.5ZM581.066 16.5H597.04V11.5H581.066V16.5ZM613.013 16.5H621V11.5H613.013V16.5Z"
                fill="#312A29"
              />
            </svg>
          </div>
        </div>
        <div className="w-fit mx-auto">
          <Image
            src="/images/nice_crewneck/crewneck_models.png"
            width={1785}
            height={739}
            alt="crewneck models"
            className="my-4 w-fit mx-auto"
          />
          <div className="w-full">
            <p className="font-secondary uppercase text-2xl">
              all in time crewneck
            </p>
            <p className="font-secondary uppercase">100% organic knit</p>
            <p className="font-secondary uppercase">embroidery 3 locations</p>
            <p className="font-secondary uppercase">2 custom tags</p>
            <div className="w-full flex items-center justify-between -translate-y-5">
              <p className="font-secondary uppercase whitespace-nowrap w-fit">
                cost: 15 racks
              </p>
              <div className="relative w-full px-4">
                <Image
                  src="/images/nice_crewneck/racks_dotted_line.svg"
                  width={4461}
                  height={28}
                  alt="racks dotted line"
                  className="w-full"
                />
                <Image
                  src="/images/nice_crewneck/racks.png"
                  width={120}
                  height={120}
                  alt="racks aka dolla dolla bill"
                  className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
                />
              </div>
              <Button
                className="w-fit h-16 bg-white border-[2px] border-black 
                !rounded-full text-custom-blue font-secondary text-[30px] px-20 uppercase whitespace-nowrap"
                onClick={() => console.log("buy racks")}
              >
                Buy Racks
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NiceFknCrew;
