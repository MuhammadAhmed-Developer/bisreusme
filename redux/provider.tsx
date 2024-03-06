"use client";

import { PersistGate } from "redux-persist/integration/react";
import { persistedStore, store } from "./store";
import { Provider } from "react-redux";

export default function ReduxStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  );
}
