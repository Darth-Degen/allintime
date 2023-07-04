import { createContext } from "react";


export const ViewContext = createContext({
  showView: false,
  setShowView: (value: boolean) => { },
  modalId: -1,
  setModalId: (value: number) => { },
});

export const StoreContext = createContext({
  showStore: false,
  setShowStore: (value: boolean) => { },
  showExitModal: false,
  setShowExitModal: (value: boolean) => { },
  showOrderModal: false,
  setShowOrderModal: (value: boolean) => { },
  step: 0,
  setStep: (value: number) => { },
});

