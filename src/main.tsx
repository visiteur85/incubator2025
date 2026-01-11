import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "./ui/mainPage/MainPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
    {/*{<Dz17 />}*/}
    {/*{<Dz18 />}*/}
    {/*<TogglePage />*/}
    {/*<Counter />*/}
  </StrictMode>,
);
