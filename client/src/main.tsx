import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import apiSlice from "./state/api"; // Updated import

export const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer }, // Updated to match the export name
  middleware: (getDefault) => getDefault().concat(apiSlice.middleware), // Updated to match the export name
});

setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
