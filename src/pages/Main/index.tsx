import React, { useRef, useEffect, useState } from "react";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import AudioVisualizer from "@tiagotrindade/audio-visualizer";
import { ContainerWrapper, FlexWrapper } from "../../styles";
import StyledMain from "./mainStyles";
import StyledTechStack from "./techStackStyles";
import { socialLinks, techs } from "./data";
import { variants, fadeUp, popUpFast } from "../../utils/animations";
import sound from "../../../public/a-world-at-peace-ibrahim.mp3";
import { Button } from "../../components";

const Main = () => {
  const audio = useRef(null);
  const [play, setPlay] = useState(false);

  const startAudio = () => {
    if (audio.current) {
      /*@ts-ignore*/
      audio?.current?.play();
      setPlay(true);
    }
  };

  const pauseAudio = () => {
    if (audio.current) {
      /*@ts-ignore*/
      audio?.current?.pause();
    }
  };

  const playerHandler = () => {
    /*@ts-ignore*/
    if (audio?.current?.paused) {
      startAudio();
    } else {
      pauseAudio();
    }
  };

  useEffect(() => {
    if (audio.current) {
      /*@ts-ignore*/
      audio.current.volume = 0.2;
    }
  }, []);

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
                Not your average fullstack developer. I enjoy building web apps
                from scratch and put them on the web. I am currently upskilling
                with Flutter, React Native, Three.js, & Next.js.
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
        <div className="song">
          <motion.div className="visualizer" variants={fadeUp}>
            {/*@ts-ignore*/}
            <audio ref={audio} src={sound} loop />
            {!play ? (
              <FlexWrapper>
                <Button buttonText="Play Audio" onClick={startAudio} />
              </FlexWrapper>
            ) : (
              <AudioVisualizer
                audio={audio}
                amplitude={0.5}
                onClick={playerHandler}
              />
            )}
          </motion.div>
          {play && (
            <motion.p variants={fadeUp}>
              a world at peace by{" "}
              <a href="https://soundcloud.com/ibr" target="_blank">
                ibrahim
              </a>
            </motion.p>
          )}
        </div>
      </StyledMain>
    </ContainerWrapper>
  );
};

export default Main;
