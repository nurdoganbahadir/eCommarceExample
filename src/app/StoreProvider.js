"use client";
import { makeStore } from "@/lib/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }) => {
  const storeRef = useRef(null);

  if (!storeRef.current) {
    // İlk render sırasında store örneği oluştur
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current != null) {
      // Varsayılanları kullanarak dinleyicileri yapılandır
      // Opsiyonel, ancak `refetchOnFocus`/`refetchOnReconnect` davranışları için gereklidir
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
