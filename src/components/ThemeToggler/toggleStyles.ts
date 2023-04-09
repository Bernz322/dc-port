import styled from "styled-components";
import { motion } from "framer-motion";

const StyledToggler = styled(motion.div)`
  cursor: pointer;
  height: 25px;
  width: 25px;

  .icons {
    transition: var(--transition2);
    height: 25px;
    width: 25px;
    color: ${({ theme }) => theme.themeIcons};
  }
`;
export default StyledToggler;
