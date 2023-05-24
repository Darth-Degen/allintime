import {
  PageLayout,
  LandingView,
  MerchView1,
  MerchView2,
  PikaView,
} from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout footer={false} fixed={false} assets={assets}>
      <LandingView setAssets={setAssets} />
      <MerchView1 />
      <MerchView2 />
      <PikaView />
    </PageLayout>
  );
};
export default Home;
