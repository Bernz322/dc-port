import React from "react";
import { motion } from "framer-motion";
import StyledFooter from "./footerStyles";
import { fadeUp } from "../../utils/animations";

function Footer() {
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
    </StyledFooter>
  );
}

export default Footer;
