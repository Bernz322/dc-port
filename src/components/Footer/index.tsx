import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StyledFooter from "./footerStyles";
import { fadeUp } from "../../utils/animations";

function Footer() {
  const [visits, setVisits] = useState<number>();
  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/celestial6000.vercel.app/visits").then(
      (res) =>
        res.json().then((data) => {
          setVisits(data.value);
        })
    );
  }, []);
  const style = {
    marginTop: "5px",
    fontSize: "10px",
  };
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };
  return (
    <StyledFooter variants={footerVariants} initial="hidden" animate="visible">
      <motion.p
        className="footer-msg"
        aria-label="Github Repository of this Portfolio"
        variants={fadeUp}
      >
        Built with <span>❤</span> by Celestial
      </motion.p>
      <motion.p style={style} variants={fadeUp}>
        This page has been visited {visits} times.
      </motion.p>
    </StyledFooter>
  );
}

export default Footer;
