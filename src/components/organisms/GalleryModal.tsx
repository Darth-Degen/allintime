import { Dispatch, SetStateAction, FC, useContext } from "react";
import { Modal } from "@components";
import { ViewContext } from "@constants";
interface Props {
  imageId: number;
  setImageId: Dispatch<SetStateAction<number>>;
}
const GalleryModal: FC<Props> = (props: Props) => {
  const { imageId, setImageId } = props;
  const { modalId } = useContext(ViewContext);

  const formatImageSrc = (id: number): string => `${id < 10 ? "00" : "0"}${id}`;

  return (
    <Modal
      show={modalId !== -1}
      onClick={() => {
        setImageId(-1);
      }}
    >
      <div className="flex gap-3 flex-col-reverse lg:flex-row items-center justify-around h-full w-full mt-10 lg:mt-0 p-10 overflow-y-auto lg:overflow-hidden">
        Hello There!
      </div>
    </Modal>
  );
};

export default GalleryModal;
