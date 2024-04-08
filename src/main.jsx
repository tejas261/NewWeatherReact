import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WeatherProvider } from "./context/WeatherContext.jsx";
import { SkeletonTheme } from "react-loading-skeleton";

import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <SkeletonTheme baseColor="#454545" highlightColor="#fff">
  <React.StrictMode>
      <WeatherProvider>
        <App />
      </WeatherProvider>
  </React.StrictMode>
    </SkeletonTheme>
);
