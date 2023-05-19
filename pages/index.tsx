import { PageLayout, LandingView, MerchView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout footer={false} fixed={false} assets={assets}>
      <LandingView setAssets={setAssets} />
      <MerchView setAssets={setAssets} />
      {/* 
        
        <SecondView />
        <ThirdView />
        
        etc..

      */}
    </PageLayout>
  );
};
export default Home;
