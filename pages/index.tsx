import {
  PageLayout,
  LandingView,
  MerchView1,
  MerchView2,
  PikaView,
  NiceFknCrew,
  WaitTheresMore,
  GraphicTee,
  ShirtHatTransition,
  CorduroyHat,
  CulturePack,
  FooterView,
} from "@components";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { BuyRacksView } from "apps/merch/src/components";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout footer={false} fixed={false} assets={assets}>
      <div className="hidden lg:flex flex-col h-full w-full">
        <LandingView setAssets={setAssets} />
        <MerchView1 />
        <BuyRacksView />
        <MerchView2 />
        <PikaView />
        <NiceFknCrew />
        <WaitTheresMore />
        <GraphicTee />
        <ShirtHatTransition />
        <CorduroyHat />
        <CulturePack />
        <FooterView />
      </div>
      <div className="lg:hidden flex-col h-full w-full">
        <BuyRacksView />
      </div>
    </PageLayout>
  );
};
export default Home;
