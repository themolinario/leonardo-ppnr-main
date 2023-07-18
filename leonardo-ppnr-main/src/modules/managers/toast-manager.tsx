import React, { useCallback } from "react";
import {create} from "zustand";
import { v4 } from 'uuid';
import {Toast} from "../../components/Toast";
import classes from "./toast-manager.module.css";
import {TransitionGroup} from "react-transition-group";


export interface ToastConfig {
  id: string;
  message: string;
  type: "info" | "danger" | "success" | "warning";
  duration: number; // ms
}

interface ToastStore {
  toasts: ToastConfig[],
  addToast: (toast: ToastConfig) => void,
  removeToast: (toastId : string) => void
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [] ,
  addToast: (toast) => set(( state) => ({toasts: [...state.toasts, toast]})),
  removeToast: (toastId) => set((state) => {
      const toastIndex = state.toasts.findIndex((toast) => toast.id === toastId);

    let newToasts = state.toasts;
    if (toastIndex > -1)
      newToasts = [ ...state.toasts.slice(0, toastIndex), ...state.toasts.slice(toastIndex + 1) ]

    return { toasts: newToasts }
    })
}));

export function useToastMessages() {
  const { toasts,addToast} = useToastStore(
    (store) => ({
      toasts: store.toasts,
      addToast: store.addToast,
    }));

  const postMessage = useCallback(({ message, type, duration }: Omit<ToastConfig, "id">) => {
      addToast({
        id: v4(),
        message: message,
        type: type,
        duration: duration
      });

  }, []);


  return { toasts, postMessage};
}

export function ToastManager(): JSX.Element {
  const { toasts, removeToast } = useToastStore(
    (store) => (
      {
        toasts: store.toasts,
        removeToast: store.removeToast
      }));


  return (
    <TransitionGroup className={classes.toastContainer}>
      {toasts.map((toast) =>
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast( toast.id)}
        />
      )}
    </TransitionGroup>
  );
}


