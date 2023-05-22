import { PageLayout, LandingView, MerchView1, MerchView2 } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout footer={false} fixed={false} assets={assets}>
      <LandingView setAssets={setAssets} />
      <MerchView1 setAssets={setAssets} />
      <MerchView2 setAssets={setAssets} />
    </PageLayout>
  );
};
export default Home;
