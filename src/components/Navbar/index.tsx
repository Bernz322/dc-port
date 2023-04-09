import React from "react";
import { motion, Variants } from "framer-motion";
import StyledNav from "./navStyles";
import { ThemeToggler } from "..";

function Navbar() {
  const navVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const navLinkVariants: Variants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  return (
    <StyledNav>
      <motion.nav variants={navVariants} initial="hidden" animate="visible">
        <motion.div className="nav-left" variants={navLinkVariants}>
          <h1>Celestial</h1>
        </motion.div>
        <div className="nav-right">
          <ThemeToggler variants={navLinkVariants} />
        </div>
      </motion.nav>
    </StyledNav>
  );
}

export default Navbar;
