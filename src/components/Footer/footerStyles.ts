import { motion } from "framer-motion";
import styled from "styled-components";

const StyledFooter = styled(motion.footer)`
  width: 100vw;
  max-height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  font-size: var(--fz-xxs);
  font-family: var(--font-mono);
  color: ${(props) => props.theme.color3};
  padding: 20px 0 10px;

  .footer-msg {
    color: ${(props) => props.theme.color3};
    margin-bottom: 10px;
    transition: var(--transition2);
    :hover {
      color: ${(props) => props.theme.hover};
      span {
        transition: var(--transition3);
        color: red;
      }
    }
  }
`;
export default StyledFooter;
