import React from "react";
import { Outlet } from "react-router-dom";

import { ModalManger } from "../modules/managers/modal-manager";
import { ToastManager } from "../modules/managers/toast-manager";

export function MainLayout(): JSX.Element {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
        <ModalManger />
        <ToastManager />
      </main>
      <footer></footer>
    </>
  );
}
