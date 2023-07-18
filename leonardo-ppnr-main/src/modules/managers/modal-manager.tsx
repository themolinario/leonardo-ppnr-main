import React, { ReactElement, useCallback } from "react";
import { create } from "zustand";

interface ModalConfig {
  show: boolean;
  title: string;
  body: ReactElement | string;
  onConfirm: () => void;
  onCancel?: () => void;
}

const EMPTY_MODAL: ModalConfig = {
  show: false,
  title: "",
  body: "",
  onConfirm: () => false,
  onCancel: undefined
};

const useModalStore = create((set) => ({
  modal: EMPTY_MODAL,
  showModal: undefined, // TODO
  closeModal: undefined // TODO
}));

export function useModal() {
  const toggleModal = useCallback(({ title, body, onConfirm, onCancel }: Omit<ModalConfig, "show">) => {
    // call store to config and show modal
  }, []);

  return { toggleModal };
}

export function ModalManger(): JSX.Element {
  // display the modal, handle callbacks, close modal
  return <p>Here goes the modal</p>;
}
