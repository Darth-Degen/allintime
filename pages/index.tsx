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
      <Image
        src="/images/pika/clouds_stock.png"
        width={1537}
        height={330}
        alt="adobe stock clouds"
        className="z-[-1] w-full -mt-40 2xl:-mt-80"
      />
      <NiceFknCrew />
      <WaitTheresMore />
      <GraphicTee />
      <ShirtHatTransition />
    </PageLayout>
  );
};
export default Home;
