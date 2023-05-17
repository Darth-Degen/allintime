import { createContext } from "react";


export const ViewContext = createContext({
  showView: false,
  setShowView: (value: boolean) => {},
  modalId: -1,
  setModalId: (value: number) => {},
});

