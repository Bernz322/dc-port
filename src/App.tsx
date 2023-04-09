import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeModeProvider } from "./context/ThemeContext";
import { Cursor, Navbar } from "./components";
import Routing from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeModeProvider>
        <GlobalStyles />
        <Cursor />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Navbar />
          <Routing />
        </div>
      </ThemeModeProvider>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <Suspense fallback="...loading">
    <App />
  </Suspense>
);
