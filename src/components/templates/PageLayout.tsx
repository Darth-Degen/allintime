import { FC, ReactNode, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  GalleryModal,
} from "@components";
import { enterAnimation, ViewContext } from "@constants";
import { AnimatePresence, motion } from "framer-motion";

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

  return (
    <ViewContext.Provider value={value}>
      <div
        className={`flex flex-col lg:min-h-screen h-full justify-between overflow-none  ${
          fixed ? "absolute inset-0" : ""
        }`}
      >
        <PageHead
          title="All In Time"
          description="All In Time"
          url=""
          twitter=""
        />
        {/* header */}
        {header && <Header headerType={headerType} />}

        {/* body */}
        <motion.main
          className={`flex flex-col h-full w-full ${mainClass} overflow-x-clip ${
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
    </ViewContext.Provider>
  );
};
export default PageLayout;
