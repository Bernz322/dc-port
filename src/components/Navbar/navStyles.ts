import { motion } from "framer-motion";
import styled from "styled-components";

const StyledNav = styled(motion.header)`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 70px;
  z-index: 9999;
  left: 0;
  right: 0;
  backdrop-filter: blur(50px);
  max-width: var(--site-max-width);
  width: 100%;

  h1{
    color: ${({ theme }) => theme.color4};
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 25px;
  }
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-left {
    display: flex;
    align-items: center;
  }

  .nav-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export default StyledNav;
