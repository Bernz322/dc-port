import styled from "styled-components";
import { motion } from "framer-motion";

const ContainerWrapper = styled(motion.div)`
  width: 100%;
  padding: 0 70px;
  max-width: var(--site-max-width);
  height: calc(100vh - 185px);

  @media only screen and (max-width: 900px) {
    height: fit-content;
  }
  @media only screen and (max-width: 450px) {
    padding: 0 25px;
  }
`;
export default ContainerWrapper;
