import React, { Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeModeProvider } from "./context/ThemeContext";
import { Cursor, Navbar } from "./components";
import Routing from "./routes";
import { GlobalStyles, FlexWrapper } from "./styles";
import { SplashScreen } from "./pages";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, [isLoaded]);

  return (
    <BrowserRouter>
      <ThemeModeProvider>
        <GlobalStyles />
        <Cursor />
        <FlexWrapper>
          <AnimatePresence mode="wait">
            {!isLoaded ? (
              <motion.div
                exit={{
                  opacity: 0,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.5,
                  },
                }}
              >
                <SplashScreen />
              </motion.div>
            ) : (
              <>
                <Navbar />
                <Routing />
              </>
            )}
          </AnimatePresence>
        </FlexWrapper>
      </ThemeModeProvider>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <Suspense fallback="I am supposed to not be shown.....">
    <App />
  </Suspense>
);
