import React from "react";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ContainerWrapper } from "../../styles";
import StyledMain from "./mainStyles";
import StyledTechStack from "./techStackStyles";
import { socialLinks, techs } from "./data";
import { variants, fadeUp, popUpFast } from "../../utils/animations";

const Main = () => {
  return (
    <ContainerWrapper>
      <StyledMain variants={variants} initial="hidden" animate="visible">
        <div className="main-content">
          <motion.div className="left">
            <motion.h3 className="section-head" variants={fadeUp}>
              Hi
              <span>.</span>
            </motion.h3>
            <motion.div className="details">
              <motion.h4 className="sub-head" variants={fadeUp}>
                I am Celestial
              </motion.h4>
              <motion.p className="desc" variants={fadeUp}>
                Your noob and average fullstack developer with less than a year
                of experience. I enjoy building web apps from scratch and put
                them on the web.
              </motion.p>
              <motion.p className="desc" variants={fadeUp}>
                I primarily build & scale applications using these bad boys:
              </motion.p>
              <StyledTechStack>
                {techs.map(({ name, Icon }) => (
                  <motion.li
                    key={name}
                    variants={popUpFast}
                    drag
                    dragConstraints={{
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    }}
                  >
                    <div className="tech-content">
                      <Icon />
                      <p>{name}</p>
                    </div>
                  </motion.li>
                ))}
              </StyledTechStack>
            </motion.div>
          </motion.div>
          <div className="right">
            <motion.div className="top" variants={fadeUp}>
              <Canvas style={{ backgroundColor: "#001429" }}>
                <OrbitControls autoRotate />
                <Stars />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                {/**@ts-ignore */}
                <Sphere scale={1} />
              </Canvas>
            </motion.div>
            <div className="bottom">
              <motion.h4 className="sub-head" variants={fadeUp}>
                Find me here
                <span>.</span>
              </motion.h4>
              <ul>
                {socialLinks.map((social) => {
                  const { name, url, Icon } = social;
                  return (
                    <motion.li key={name} variants={fadeUp}>
                      <motion.a
                        drag
                        dragConstraints={{
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon className="side-icons" />
                      </motion.a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </StyledMain>
    </ContainerWrapper>
  );
};

export default Main;
