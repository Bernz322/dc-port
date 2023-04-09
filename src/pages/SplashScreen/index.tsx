import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeModeContext } from "../../context/ThemeContext";

const StyledPreLoader = styled(motion.div)`
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px 0 100px;
  svg {
    overflow: visible;
  }

  @media only screen and (max-width: 480px) {
    svg {
      padding: 0 100px 0 100px;
    }
  }
`;

const StyledSpan = styled(motion.span)`
  color: ${(props) => props.theme.hover};
  font-size: clamp(120px, 20vw, 170px);
  font-family: var(--font-cursive);
  font-weight: 400;
  font-style: normal;
`;

const StyledMoon = styled(motion.svg)`
  width: 200px;
  height: 200px;
  margin-left: 50px;
  margin-top: 15px;
`;

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const svgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      delay: 0.8,
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const SplashScreen = () => {
  const { theme } = useContext(ThemeModeContext);
  const name = "Celestial";
  return (
    <StyledPreLoader>
      <motion.h3 variants={sentenceVariants} initial="hidden" animate="visible">
        {name.split("").map((letter, idx) => {
          return (
            <StyledSpan key={letter + "-" + idx} variants={letterVariants}>
              {letter}
            </StyledSpan>
          );
        })}
      </motion.h3>
      <StyledMoon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        variants={svgVariants}
        initial="initial"
        animate="animate"
      >
        <g
          stroke={theme === "light" ? "#588bae" : "#79f6fc"}
          fill="none"
          fontSize="9pt"
          strokeWidth="0.1mm"
        >
          <motion.path
            d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"
            variants={pathVariants}
          />
        </g>
      </StyledMoon>
    </StyledPreLoader>
  );
};

export default SplashScreen;
