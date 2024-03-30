"use client";

import React, { FC, PropsWithChildren } from "react";

import { Header } from "@/components";

import { createReduxStore, store } from "../store";
import { Provider } from "react-redux";
import { ReactFlowProvider } from "reactflow";
const Layout: FC<PropsWithChildren> = ({ children }) => (
  <ReactFlowProvider>
    <Provider store={createReduxStore()}>
      <Header />
      {children}
    </Provider>
  </ReactFlowProvider>
);

export default Layout;
