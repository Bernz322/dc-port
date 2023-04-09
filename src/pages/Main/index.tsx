import React, { useContext } from "react";
import {
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ThemeModeContext } from "../../context/ThemeContext";
import { ContainerWrapper } from "../../styles";
import StyledMain from "./mainStyles";

const Main = () => {
  const { theme } = useContext(ThemeModeContext);
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
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            {/**@ts-ignore */}
            <Sphere args={[1.4, 100, 200]} scale={1.9}>
              <MeshDistortMaterial
                attach="material"
                distort={0.5}
                speed={2}
                color={theme === "dark" ? "#79f6fc" : "#003152"}
              />
            </Sphere>
          </Canvas>
        </motion.div>
      </StyledMain>
    </ContainerWrapper>
  );
};

export default Main;
