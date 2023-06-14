import { FC, ReactNode, useEffect, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  GalleryModal,
  MobileView,
} from "@components";
import { enterAnimation, ViewContext } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "src/hooks";

interface Props {
  children: ReactNode;
  footer?: boolean;
  header?: boolean;
  fixed?: boolean;
  headerType?: string;
  mainClass?: string;
  assets?: boolean[];
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    footer = false,
    header = false,
    fixed = false,
    headerType = "absolute",
    children,
    mainClass = "",
    assets = [],
  } = props;

  //context for splash screen & modals
  const [showView, setShowView] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number>(-1);
  const value = {
    showView,
    setShowView,
    modalId,
    setModalId,
  };

  const [winWidth, winHeight] = useWindowSize();

  useEffect(() => {
    if (winWidth < 1024) {
      document.body.style.backgroundColor = "#00EC18";
    } else {
      document.body.style.backgroundColor = "#9CD9CC";
    }
  }, [winWidth]);

  return (
    <ViewContext.Provider value={value}>
      <div
        className={`flex flex-col lg:min-h-screen h-full justify-between overflow-none ${
          fixed ? "absolute inset-0" : ""
        }`}
      >
        <PageHead
          title="All In Time"
          description="clothing | collectibles | curio | Est. 2023"
          url="https://allintime.xyz/"
          twitter="allintime_"
        />
        {/* header */}
        {header && <Header headerType={headerType} />}

        {/* body */}
        <motion.main
          className={`hidden lg:flex flex-col h-full w-full ${mainClass} overflow-x-clip ${
            footer ? "mb-8 md:mb-auto mt-4 md:mt-0" : ""
          }`}
          {...enterAnimation}
        >
          {children}
        </motion.main>

        {/* footer */}
        {footer && <Footer />}

        {/* modals */}
        {assets && <SplashScreen assets={assets} />}
        <AnimatePresence mode="wait">
          {modalId !== -1 && (
            <GalleryModal
              key="modal"
              imageId={modalId}
              setImageId={setModalId}
            />
          )}
        </AnimatePresence>
      </div>
      <MobileView />
    </ViewContext.Provider>
  );
};
export default PageLayout;
