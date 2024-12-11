import { configureStore } from "@reduxjs/toolkit";
import { quotesApiSlice } from "./features/quotes/quotesApiSlice";
import { productSlice } from "./features/products/productsSlice";

// Automatically combine the reducers using their `reducerPath`s
const rootReducer = {
  [quotesApiSlice.reducerPath]: quotesApiSlice.reducer,
  [productSlice.reducerPath]: productSlice.reducer,
};

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(quotesApiSlice.middleware);
    },
  });
};
