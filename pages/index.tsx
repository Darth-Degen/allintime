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

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout footer={false} fixed={false} assets={assets}>
      <LandingView setAssets={setAssets} />
      <MerchView1 />
      <MerchView2 />
      <PikaView />
      <NiceFknCrew />
      <WaitTheresMore />
      <GraphicTee />
      <ShirtHatTransition />
      <CorduroyHat />
      <CulturePack />
      <FooterView />
    </PageLayout>
  );
};
export default Home;
