import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import { MovieProvider } from "./hooks/movie";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MovieProvider>
    <ToastContainer theme="colored" position="top-center" />
    <App />
  </MovieProvider>
);
