import { motion } from "framer-motion";
import styled from "styled-components";

const StyledTechStack = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  margin-bottom: 30px;

  .tech-content {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 30px;
    height: 100%;
    padding: 5px 10px;
  }

  li {
    list-style: none;
    margin: 5px;
    border: 1px solid ${(props) => props.theme.btn};
    border-radius: 5px;
    padding: 2px;
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  }

  svg {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.btn};
  }

  p {
    margin: 0;
    font-size: var(--fz-sm);
    font-weight: 500;
    color: ${(props) => props.theme.color3};
  }
`;
export default StyledTechStack;
