import {useEffect, useRef} from "react";
import {Alert, Fade} from "design-react-kit";
import React from "react";
import {ToastConfig} from "../modules/managers/toast-manager";
import classes from "./Toast.module.css";


interface ToastProps extends Omit<ToastConfig, "id"> {
  onClose: () => void
}

export function Toast({message, type, duration, onClose}: ToastProps): JSX.Element{

  useEffect(() => {

    if (!duration){
      return;
    }

    const timeoutId = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    }

  }, [duration, onClose]);


  return (
      <Alert
        color={type || "info"}
        fade={false}
      >{message}</Alert>
  );

}

