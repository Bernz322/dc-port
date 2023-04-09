import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Moon } from "../../components";
import { ContainerWrapper } from "../../styles";
import StyledMain from "./mainStyles";

const Main = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };
  const fadeUp = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <ContainerWrapper>
      <StyledMain variants={variants} initial="hidden" animate="visible">
        <motion.div variants={fadeUp}>
          <Canvas className="moon-container">
            <Stage environment="city" intensity={0.6}>
              <Moon />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </motion.div>
      </StyledMain>
    </ContainerWrapper>
  );
};

export default Main;
