import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerWrapper } from "../../styles";
import StyledPage404 from "./notFoundStyles";
import { Button } from "../../components";
import { fadeUp, variants } from "../../utils/animations";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState<number>(15);

  useEffect(() => {
    setTimeout(() => {
      if (redirect > 0) {
        setRedirect(redirect - 1);
      }
    }, 1000);
    if (redirect === 0) navigate("/");
  }, [redirect, navigate]);
  return (
    <ContainerWrapper>
      <StyledPage404 variants={variants} initial="hidden" animate="visible">
        <motion.h1 variants={fadeUp}>404</motion.h1>
        <motion.h3 variants={fadeUp}>
          Not sure what you're trying to find.
        </motion.h3>
        <motion.p variants={fadeUp}>
          You will be redirected to the homepage in{" "}
          <span className="sec">{redirect}</span>
          s.
        </motion.p>
        <motion.div className="btn" variants={fadeUp}>
          <Button buttonText="Go Home" buttonUrl="/" ariaLabel="Go home" />
        </motion.div>
      </StyledPage404>
    </ContainerWrapper>
  );
};

export default NotFound;
