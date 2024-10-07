import { motion } from "framer-motion";
import styled from "styled-components";

const StyledMain = styled(motion.section)`
  height: 100%;

  .main-content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;

    @media only screen and (max-width: 900px) {
      flex-direction: column;
    }

    .section-head {
      font-size: clamp(35px, 4vw, 60px);
      color: ${(props) => props.theme.color2};
      margin-bottom: 20px;
      span {
        color: ${(props) => props.theme.btn};
      }
    }

    h4.sub-head {
      font-size: clamp(30px, 2vw, 35px);
      text-align: center;
      margin-bottom: 15px;
    }

    p.desc {
      font-size: var(--fz-lg);
      color: ${(props) => props.theme.color3};
      margin-bottom: 30px;
      text-align: justify;

      @media only screen and (max-width: 768px) {
        font-size: var(--fz-sm);
      }
    }

    .left {
      height: 100%;
      flex: 6;
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      flex: 6;
      height: 100%;

      .top {
        height: 500px;
      }

      .bottom {
        margin: 30px 0 0;
        ul {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          li {
            margin: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            .side-icons {
              width: 25px;
              height: 25px;
              background-color: transparent;
            }

            a {
              color: ${(props) => props.theme.color2};
              &:hover {
                color: ${(props) => props.theme.hover};
              }
            }
          }
        }
      }
    }
  }

  .song {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
      font-size: var(--fz-sm);
      color: ${(props) => props.theme.color3};
      a {
        color: ${(props) => props.theme.btn};
      }
      @media only screen and (max-width: 768px) {
        font-size: var(--fz-xxs);
      }
    }
    .visualizer {
      max-height: 30px !important;
      width: 500px !important;
      canvas {
        max-height: 75px !important;
        width: 500px !important;
      }
      @media only screen and (max-width: 580px) {
        width: 300px !important;
        canvas {
          width: 300px !important;
        }
      }
    }
  }
`;

export default StyledMain;
