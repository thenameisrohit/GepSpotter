import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoBackground from "./components/VideoBackground";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <VideoBackground videoId="itQQCkA87Hs" />
    <App className="App" />
  </StrictMode>
);
