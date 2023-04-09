import styled from "styled-components";
import { motion } from "framer-motion";

const ContainerWrapper = styled(motion.div)`
  width: 100%;
  padding: 0 70px;
  max-width: var(--site-max-width);
  height: calc(100vh - 100px);
`;
export default ContainerWrapper;
