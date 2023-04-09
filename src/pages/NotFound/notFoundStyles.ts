import { motion } from "framer-motion";
import styled from "styled-components";

const StyledPage404 = styled(motion.div)`
  height: calc(100vh - 185px);
  display: flex;
  align-content: center;
  margin-top: 50px;
  flex-flow: column nowrap;
  text-align: center;
  h1 {
    font-size: clamp(80px, 10vw, 130px);
    color: ${(props) => props.theme.color2};
  }
  h3 {
    font-size: clamp(15px, 4vw, 45px);
    color: ${(props) => props.theme.color3};
    margin-bottom: 50px;
  }
  p {
    font-size: var(--fz-lg);
    color: ${(props) => props.theme.color3};
    margin-bottom: 30px;

    @media only screen and (max-width: 768px) {
      font-size: var(--fz-sm);
      max-width: 100%;
    }
  }
  span.sec {
    font-weight: 800;
    font-size: var(--fz-xxl);
    @media only screen and (max-width: 768px) {
      font-size: var(--fz-md);
      max-width: 100%;
    }
  }
  .btn {
    margin: 0 auto;
  }
`;

export default StyledPage404;
