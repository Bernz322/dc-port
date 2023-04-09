import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeModeContext } from "../../context/ThemeContext";

const StyledPreLoader = styled(motion.div)`
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px 0 100px;
  svg {
    overflow: visible;
  }

  @media only screen and (max-width: 480px) {
    svg {
      padding: 0 100px 0 100px;
    }
  }
`;

const StyledLetters = styled(motion.svg)`
  width: 900px;
  height: 800px;
  margin-left: 150px;

  @media only screen and (max-width: 900px) {
    margin-left: 250px;
  }
  @media only screen and (max-width: 800px) {
    margin-left: 200px;
  }
  @media only screen and (max-width: 750px) {
    width: 500px;
    height: 400px;
    margin-left: 200px;
  }
  @media only screen and (max-width: 700px) {
    margin-left: 170px;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 130px;
  }
  @media only screen and (max-width: 500px) {
    margin-left: 80px;
  }
  @media only screen and (max-width: 350px) {
    margin-left: 50px;
  }
`;

const svgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 6,
      ease: "easeInOut",
    },
  },
};

const SplashScreen = () => {
  const { theme } = useContext(ThemeModeContext);
  return (
    <StyledPreLoader>
      <StyledLetters
        width="395.401"
        height="141.002"
        viewBox="0 0 395.401 141.002"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="initial"
        animate="animate"
      >
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="9pt"
          stroke={theme === "light" ? "#588bae" : "#79f6fc"}
          fill="none"
        >
          <motion.path
            d="M 49.3 55.8 L 50.7 56.8 Q 47.4 63.3 42.7 68.75 A 40.314 40.314 0 0 1 35.118 75.628 A 36.368 36.368 0 0 1 32.2 77.45 Q 26.4 80.7 19.7 80.7 A 23.135 23.135 0 0 1 14.857 80.221 Q 11.665 79.538 9.229 77.88 A 14.045 14.045 0 0 1 8.25 77.15 A 19.969 19.969 0 0 1 2.074 68.348 A 23.699 23.699 0 0 1 1.95 68 Q 0 62.4 0 56.3 A 54.947 54.947 0 0 1 2.253 40.9 A 61.196 61.196 0 0 1 2.4 40.4 Q 4.8 32.4 8.95 25.15 A 69.948 69.948 0 0 1 16.413 14.472 A 63.02 63.02 0 0 1 18.4 12.25 A 50.917 50.917 0 0 1 24.526 6.662 A 40.875 40.875 0 0 1 29.55 3.35 A 27.378 27.378 0 0 1 35.002 1.017 A 21.221 21.221 0 0 1 41.1 0.1 A 14.07 14.07 0 0 1 43.93 0.369 Q 46.147 0.824 47.75 2.05 Q 49.82 3.633 50.21 7.027 A 14.68 14.68 0 0 1 50.3 8.7 A 19.997 19.997 0 0 1 50.109 11.381 Q 49.863 13.197 49.3 15.25 Q 48.3 18.9 46.6 22.25 A 29.138 29.138 0 0 1 45.046 24.961 Q 44.003 26.563 42.85 27.8 Q 41.521 29.227 40.171 29.728 A 4.196 4.196 0 0 1 38.7 30 A 2.848 2.848 0 0 1 37.759 29.833 A 3.996 3.996 0 0 1 37.05 29.5 A 2.835 2.835 0 0 1 36.355 28.91 Q 36.096 28.613 35.867 28.218 A 6.344 6.344 0 0 1 35.6 27.7 A 42.198 42.198 0 0 0 36.774 26.305 Q 37.794 25.044 38.95 23.45 Q 40.8 20.9 42.5 18.05 Q 44.2 15.2 45.25 12.45 Q 46.3 9.7 46.3 7.6 A 5.677 5.677 0 0 0 46.125 6.152 A 4.193 4.193 0 0 0 45.15 4.35 A 3.435 3.435 0 0 0 43.812 3.475 Q 42.823 3.1 41.4 3.1 Q 37.705 3.1 33.751 5.685 A 24.037 24.037 0 0 0 32.45 6.6 Q 28.091 9.881 23.995 15.228 A 63.288 63.288 0 0 0 23.45 15.95 Q 19.1 21.8 15.6 29 Q 12.1 36.2 10.05 43.7 A 58.981 58.981 0 0 0 8.339 52.359 A 48.295 48.295 0 0 0 8 58 Q 8 62.9 9.4 67.35 A 16.964 16.964 0 0 0 11.382 71.598 A 14.368 14.368 0 0 0 13.95 74.55 A 10.92 10.92 0 0 0 19.156 77.031 A 15.422 15.422 0 0 0 22.1 77.3 A 19.891 19.891 0 0 0 29.693 75.75 A 25.27 25.27 0 0 0 32.65 74.3 A 37.981 37.981 0 0 0 40.62 68.171 A 44.036 44.036 0 0 0 42.3 66.4 Q 46.7 61.5 49.3 55.8 Z M 274.1 55.8 L 275.1 56.8 A 37.287 37.287 0 0 1 271.646 63.611 A 32.548 32.548 0 0 1 269.7 66.3 Q 266.4 70.4 262.65 72.7 A 17.14 17.14 0 0 1 259.513 74.231 A 12.358 12.358 0 0 1 255.3 75 A 9.836 9.836 0 0 1 253.227 74.796 Q 251.949 74.52 251.001 73.872 A 5.25 5.25 0 0 1 249.85 72.8 A 8.161 8.161 0 0 1 248.498 70.387 A 7.247 7.247 0 0 1 248.1 68 A 8.603 8.603 0 0 1 248.124 67.384 Q 248.149 67.037 248.2 66.65 Q 248.3 65.9 248.4 65.1 Q 245.581 68.902 243.085 71.458 A 30.925 30.925 0 0 1 240.55 73.8 A 14.686 14.686 0 0 1 237.867 75.567 Q 235.613 76.7 233.3 76.7 Q 230.2 76.7 228.05 74.65 A 6.384 6.384 0 0 1 226.421 72.014 Q 226.079 70.999 225.962 69.76 A 14.414 14.414 0 0 1 225.9 68.4 A 18.649 18.649 0 0 1 226.352 64.42 Q 226.744 62.624 227.477 60.711 A 30.579 30.579 0 0 1 227.5 60.65 A 37.798 37.798 0 0 1 230.556 54.513 A 44.377 44.377 0 0 1 231.9 52.45 Q 234.7 48.4 238.25 45.05 A 33.55 33.55 0 0 1 243.321 41.082 A 29.188 29.188 0 0 1 245.75 39.7 A 19.076 19.076 0 0 1 249.933 38.139 A 15.733 15.733 0 0 1 253.6 37.7 A 12.227 12.227 0 0 1 256.646 38.061 A 9.203 9.203 0 0 1 260.1 39.75 A 6.51 6.51 0 0 1 262.669 44.472 A 8.351 8.351 0 0 1 262.7 45.2 A 7.213 7.213 0 0 1 262.61 46.383 Q 262.352 47.932 261.35 48.6 Q 260.196 49.369 258.42 49.481 A 9.891 9.891 0 0 1 257.8 49.5 A 18.324 18.324 0 0 0 258.009 48.553 A 23.066 23.066 0 0 0 258.15 47.75 Q 258.3 46.8 258.3 46 A 8.048 8.048 0 0 0 258.067 44.018 A 6.315 6.315 0 0 0 257.2 42.05 A 3.459 3.459 0 0 0 255.33 40.672 Q 254.497 40.4 253.4 40.4 A 8.865 8.865 0 0 0 250.129 41.052 Q 248.999 41.498 247.853 42.249 A 15.426 15.426 0 0 0 247.7 42.35 A 23.691 23.691 0 0 0 244.545 44.913 A 31.64 31.64 0 0 0 242.1 47.55 Q 239.4 50.8 237.3 54.6 A 45.316 45.316 0 0 0 234.885 59.661 A 38.5 38.5 0 0 0 234 62.1 A 28.274 28.274 0 0 0 233.223 64.974 Q 232.919 66.415 232.834 67.709 A 15.035 15.035 0 0 0 232.8 68.7 Q 232.8 72.493 235.354 72.597 A 3.589 3.589 0 0 0 235.5 72.6 Q 237.8 72.6 240.5 70.45 A 33.59 33.59 0 0 0 243.064 68.171 Q 244.341 66.921 245.649 65.417 A 56.926 56.926 0 0 0 246.05 64.95 Q 248.9 61.6 251.5 58 Q 254.1 54.4 256.1 51.4 A 9.739 9.739 0 0 1 256.229 51.211 Q 256.466 50.873 256.565 50.813 A 0.072 0.072 0 0 1 256.6 50.8 A 6.992 6.992 0 0 1 257.009 50.882 Q 257.465 50.986 258.064 51.173 A 22.651 22.651 0 0 1 258.15 51.2 A 6.466 6.466 0 0 1 259.134 51.598 A 5.186 5.186 0 0 1 259.8 52 A 1.808 1.808 0 0 1 260.227 52.417 A 1.48 1.48 0 0 1 260.5 53.3 A 2.51 2.51 0 0 1 260.421 53.892 Q 260.276 54.485 259.866 55.269 A 12.368 12.368 0 0 1 259.6 55.75 A 145.901 145.901 0 0 0 258.713 57.302 Q 258.185 58.238 257.6 59.3 Q 256.5 61.3 255.6 63.35 Q 254.732 65.328 254.701 67.073 A 7.254 7.254 0 0 0 254.7 67.2 A 5.859 5.859 0 0 0 255.228 69.604 A 7.159 7.159 0 0 0 255.5 70.15 A 2.722 2.722 0 0 0 256.47 71.191 Q 256.986 71.504 257.667 71.578 A 4.039 4.039 0 0 0 258.1 71.6 A 5.135 5.135 0 0 0 259.853 71.252 Q 262.106 70.427 265.2 67.65 A 31.332 31.332 0 0 0 268.445 64.217 Q 269.98 62.348 271.528 60.006 A 74.771 74.771 0 0 0 274.1 55.8 Z M 177.7 41.8 L 177.7 40 Q 178.5 40.1 179.6 40.2 Q 180.627 40.293 181.916 40.387 A 180.465 180.465 0 0 0 182.1 40.4 Q 184.2 35 186.6 29.95 Q 189 24.9 191.35 20.95 Q 193.126 17.964 194.788 15.893 A 25.255 25.255 0 0 1 195.85 14.65 A 14.304 14.304 0 0 1 196.822 13.678 Q 198.352 12.3 199.5 12.3 A 2.174 2.174 0 0 1 200.889 12.8 A 2.751 2.751 0 0 1 200.95 12.85 A 1.752 1.752 0 0 1 201.509 13.751 Q 201.6 14.087 201.6 14.5 A 4.378 4.378 0 0 1 201.469 15.484 Q 201.113 17 199.794 19.503 A 43.938 43.938 0 0 1 199.5 20.05 Q 198.056 22.697 196.14 26.029 A 501.112 501.112 0 0 1 194.3 29.2 A 134.642 134.642 0 0 0 190.132 36.913 A 158.425 158.425 0 0 0 188.3 40.7 L 190.15 40.7 L 192 40.7 Q 195.3 40.7 198.95 40.6 Q 202.6 40.5 206.3 40.1 L 206.3 41.9 A 302.508 302.508 0 0 1 201.397 42.397 Q 199.091 42.61 197.033 42.759 A 177.381 177.381 0 0 1 196.45 42.8 Q 192.1 43.1 188.7 43.1 L 187.95 43.1 L 187.2 43.1 Q 184.9 48.4 183.3 54 A 41.313 41.313 0 0 0 181.841 61.727 A 36.128 36.128 0 0 0 181.7 64.9 A 22.505 22.505 0 0 0 181.792 67.012 Q 181.99 69.109 182.618 70.397 A 4.765 4.765 0 0 0 183 71.05 Q 184.3 72.9 187.3 72.9 A 12.647 12.647 0 0 0 193.087 71.445 Q 194.895 70.525 196.679 69.024 A 24.857 24.857 0 0 0 197.5 68.3 A 33.464 33.464 0 0 0 202.062 63.07 Q 204.341 59.873 206.3 55.8 L 207.6 56.8 Q 205.2 62.4 201.55 66.9 A 32.78 32.78 0 0 1 197.015 71.521 A 27.222 27.222 0 0 1 193.5 74 A 18.697 18.697 0 0 1 188.062 76.195 A 16.71 16.71 0 0 1 184.4 76.6 A 11.866 11.866 0 0 1 181.794 76.331 Q 179.346 75.78 177.8 74.1 A 7.904 7.904 0 0 1 176.149 71.229 Q 175.5 69.303 175.5 66.7 Q 175.5 63.518 176.363 59.264 A 69.769 69.769 0 0 1 177.15 55.85 Q 178.8 49.4 181.3 42.6 Q 180.3 42.4 179.4 42.25 Q 178.5 42.1 177.7 41.8 Z M 110.1 55.8 L 111.6 56.6 A 68.426 68.426 0 0 1 108.368 62.699 Q 105.764 67.034 102.9 70.05 Q 98.895 74.268 94.382 74.892 A 11.54 11.54 0 0 1 92.8 75 A 9.816 9.816 0 0 1 90.463 74.74 A 5.995 5.995 0 0 1 86.65 72.05 Q 84.877 69.223 84.803 65.065 A 20.503 20.503 0 0 1 84.8 64.7 Q 84.8 61.072 85.829 56.415 A 65.721 65.721 0 0 1 86.6 53.3 Q 88.4 46.7 91.35 39.4 Q 94.3 32.1 97.8 25.15 Q 101.3 18.2 104.8 12.5 A 100.995 100.995 0 0 1 107.245 8.7 Q 109.36 5.578 111.25 3.4 A 24.453 24.453 0 0 1 112.471 2.086 Q 114.569 0 115.9 0 A 1.771 1.771 0 0 1 117.198 0.564 Q 117.435 0.804 117.64 1.146 A 4.111 4.111 0 0 1 117.7 1.25 Q 118.356 2.422 118.749 4.033 A 15.61 15.61 0 0 1 118.8 4.25 Q 119.158 5.815 119.196 7.101 A 10.197 10.197 0 0 1 119.2 7.4 A 14.488 14.488 0 0 1 119.055 9.35 Q 118.777 11.383 117.968 14.065 A 50.358 50.358 0 0 1 117.85 14.45 A 65.881 65.881 0 0 1 116.458 18.448 Q 115.428 21.141 114.05 24.15 A 97.709 97.709 0 0 1 109.869 32.231 A 110.916 110.916 0 0 1 108.25 34.95 Q 104.9 40.4 100.95 45.4 A 58.862 58.862 0 0 1 95.572 51.36 A 49.717 49.717 0 0 1 92.6 54 A 66.011 66.011 0 0 0 91.766 58.449 A 59.276 59.276 0 0 0 91.65 59.25 A 37.76 37.76 0 0 0 91.338 62.564 A 31.905 31.905 0 0 0 91.3 64.1 A 22.133 22.133 0 0 0 91.387 66.136 Q 91.577 68.178 92.178 69.472 A 5.389 5.389 0 0 0 92.4 69.9 A 3.975 3.975 0 0 0 93.401 71.074 Q 94.34 71.8 95.7 71.8 Q 98.133 71.8 100.524 69.852 A 13.216 13.216 0 0 0 101.05 69.4 A 26.199 26.199 0 0 0 103.781 66.497 A 35.163 35.163 0 0 0 106.05 63.35 Q 108.4 59.7 110.1 55.8 Z M 297.7 55.8 L 299.2 56.6 A 68.426 68.426 0 0 1 295.968 62.699 Q 293.364 67.034 290.5 70.05 Q 286.495 74.268 281.982 74.892 A 11.54 11.54 0 0 1 280.4 75 A 9.816 9.816 0 0 1 278.063 74.74 A 5.995 5.995 0 0 1 274.25 72.05 Q 272.477 69.223 272.403 65.065 A 20.503 20.503 0 0 1 272.4 64.7 Q 272.4 61.072 273.429 56.415 A 65.721 65.721 0 0 1 274.2 53.3 Q 276 46.7 278.95 39.4 Q 281.9 32.1 285.4 25.15 Q 288.9 18.2 292.4 12.5 A 100.995 100.995 0 0 1 294.845 8.7 Q 296.96 5.578 298.85 3.4 A 24.453 24.453 0 0 1 300.071 2.086 Q 302.169 0 303.5 0 A 1.771 1.771 0 0 1 304.798 0.564 Q 305.035 0.804 305.24 1.146 A 4.111 4.111 0 0 1 305.3 1.25 Q 305.956 2.422 306.349 4.033 A 15.61 15.61 0 0 1 306.4 4.25 Q 306.758 5.815 306.796 7.101 A 10.197 10.197 0 0 1 306.8 7.4 A 14.488 14.488 0 0 1 306.655 9.35 Q 306.377 11.383 305.568 14.065 A 50.358 50.358 0 0 1 305.45 14.45 A 65.881 65.881 0 0 1 304.058 18.448 Q 303.028 21.141 301.65 24.15 A 97.709 97.709 0 0 1 297.469 32.231 A 110.916 110.916 0 0 1 295.85 34.95 Q 292.5 40.4 288.55 45.4 A 58.862 58.862 0 0 1 283.172 51.36 A 49.717 49.717 0 0 1 280.2 54 A 66.011 66.011 0 0 0 279.366 58.449 A 59.276 59.276 0 0 0 279.25 59.25 A 37.76 37.76 0 0 0 278.938 62.564 A 31.905 31.905 0 0 0 278.9 64.1 A 22.133 22.133 0 0 0 278.987 66.136 Q 279.177 68.178 279.778 69.472 A 5.389 5.389 0 0 0 280 69.9 A 3.975 3.975 0 0 0 281.001 71.074 Q 281.94 71.8 283.3 71.8 Q 285.733 71.8 288.124 69.852 A 13.216 13.216 0 0 0 288.65 69.4 A 26.199 26.199 0 0 0 291.381 66.497 A 35.163 35.163 0 0 0 293.65 63.35 Q 296 59.7 297.7 55.8 Z M 86.5 55.8 L 87.7 56.7 A 38.699 38.699 0 0 1 83.07 64.498 A 34.54 34.54 0 0 1 80.85 67.1 A 34.719 34.719 0 0 1 75.389 71.838 A 29.735 29.735 0 0 1 71.85 73.95 A 22.673 22.673 0 0 1 65.459 76.104 A 20.349 20.349 0 0 1 62 76.4 A 17.65 17.65 0 0 1 58.486 76.073 Q 56.44 75.657 54.876 74.711 A 9.065 9.065 0 0 1 52.85 73.05 Q 49.8 69.7 49.8 64.8 A 20.368 20.368 0 0 1 50.512 59.579 A 27.753 27.753 0 0 1 52.05 55.3 A 39.353 39.353 0 0 1 58.021 45.934 A 43.151 43.151 0 0 1 58.05 45.9 A 36.04 36.04 0 0 1 63.561 40.63 A 31.684 31.684 0 0 1 66.3 38.75 A 20.295 20.295 0 0 1 70.219 36.87 A 15.115 15.115 0 0 1 75.2 36 Q 77.5 36 79.45 37.2 A 3.578 3.578 0 0 1 80.85 38.874 Q 81.396 40.125 81.4 42.071 A 14.038 14.038 0 0 1 81.4 42.1 A 12.531 12.531 0 0 1 79.323 48.988 A 15.179 15.179 0 0 1 79.15 49.25 Q 76.9 52.6 73.25 55.2 Q 69.6 57.8 65.25 59.45 A 33.683 33.683 0 0 1 58.349 61.286 A 30.478 30.478 0 0 1 56.6 61.5 A 23.767 23.767 0 0 0 56.389 62.711 A 19.875 19.875 0 0 0 56.3 63.4 A 16.544 16.544 0 0 0 56.214 64.486 A 13.732 13.732 0 0 0 56.2 65.1 Q 56.2 66.6 56.55 68.1 Q 56.9 69.6 57.8 70.85 A 5.787 5.787 0 0 0 59.692 72.518 A 7.101 7.101 0 0 0 60.25 72.8 A 7.298 7.298 0 0 0 61.809 73.291 Q 62.552 73.441 63.41 73.483 A 14.017 14.017 0 0 0 64.1 73.5 Q 68.4 73.5 72.6 71.05 Q 76.8 68.6 80.4 64.6 Q 84 60.6 86.5 55.8 Z M 143.4 55.8 L 144.6 56.7 A 38.699 38.699 0 0 1 139.97 64.498 A 34.54 34.54 0 0 1 137.75 67.1 A 34.719 34.719 0 0 1 132.289 71.838 A 29.735 29.735 0 0 1 128.75 73.95 A 22.673 22.673 0 0 1 122.359 76.104 A 20.349 20.349 0 0 1 118.9 76.4 A 17.65 17.65 0 0 1 115.386 76.073 Q 113.34 75.657 111.776 74.711 A 9.065 9.065 0 0 1 109.75 73.05 Q 106.7 69.7 106.7 64.8 A 20.368 20.368 0 0 1 107.412 59.579 A 27.753 27.753 0 0 1 108.95 55.3 A 39.353 39.353 0 0 1 114.921 45.934 A 43.151 43.151 0 0 1 114.95 45.9 A 36.04 36.04 0 0 1 120.461 40.63 A 31.684 31.684 0 0 1 123.2 38.75 A 20.295 20.295 0 0 1 127.119 36.87 A 15.115 15.115 0 0 1 132.1 36 Q 134.4 36 136.35 37.2 A 3.578 3.578 0 0 1 137.75 38.874 Q 138.296 40.125 138.3 42.071 A 14.038 14.038 0 0 1 138.3 42.1 A 12.531 12.531 0 0 1 136.223 48.988 A 15.179 15.179 0 0 1 136.05 49.25 Q 133.8 52.6 130.15 55.2 Q 126.5 57.8 122.15 59.45 A 33.683 33.683 0 0 1 115.249 61.286 A 30.478 30.478 0 0 1 113.5 61.5 A 23.767 23.767 0 0 0 113.289 62.711 A 19.875 19.875 0 0 0 113.2 63.4 A 16.544 16.544 0 0 0 113.114 64.486 A 13.732 13.732 0 0 0 113.1 65.1 Q 113.1 66.6 113.45 68.1 Q 113.8 69.6 114.7 70.85 A 5.787 5.787 0 0 0 116.592 72.518 A 7.101 7.101 0 0 0 117.15 72.8 A 7.298 7.298 0 0 0 118.709 73.291 Q 119.452 73.441 120.31 73.483 A 14.017 14.017 0 0 0 121 73.5 Q 125.3 73.5 129.5 71.05 Q 133.7 68.6 137.3 64.6 Q 140.9 60.6 143.4 55.8 Z M 155.7 40.5 L 155.7 39.3 Q 155.7 36.231 156.56 34.641 A 3.878 3.878 0 0 1 156.95 34.05 Q 157.73 33.083 158.568 32.719 A 2.569 2.569 0 0 1 159.6 32.5 A 2.55 2.55 0 0 1 160.051 32.537 Q 160.522 32.622 160.8 32.9 A 1.474 1.474 0 0 1 161.059 33.242 A 1.16 1.16 0 0 1 161.2 33.8 A 2.542 2.542 0 0 1 161.181 34.088 Q 161.125 34.575 160.9 35.4 A 7.414 7.414 0 0 0 160.717 36.309 Q 160.6 37.138 160.6 38.2 A 19.398 19.398 0 0 0 160.967 41.861 A 26.656 26.656 0 0 0 161.9 45.35 Q 163.2 49.2 164.5 53.45 Q 165.8 57.7 165.8 62.3 Q 165.8 63.6 165.65 64.85 A 17.018 17.018 0 0 1 165.357 66.569 A 14.686 14.686 0 0 1 165.2 67.2 Q 168.7 66.6 171.8 64.05 A 16.612 16.612 0 0 0 174.003 61.823 Q 174.972 60.655 175.922 59.175 A 41.041 41.041 0 0 0 177.8 55.9 L 178.7 56.9 A 21.097 21.097 0 0 1 176.843 60.931 A 15.032 15.032 0 0 1 173 65.25 Q 169.2 68.1 164.7 68.8 Q 163.1 73.1 159.65 75.1 A 14.954 14.954 0 0 1 152.765 77.079 A 17.956 17.956 0 0 1 151.9 77.1 A 17.447 17.447 0 0 1 148.903 76.858 Q 146.256 76.396 144.45 75.05 A 11.703 11.703 0 0 1 141.557 71.992 A 10.882 10.882 0 0 1 140.55 70 A 17.031 17.031 0 0 1 139.455 65.313 A 15.7 15.7 0 0 1 139.4 64 Q 139.4 61 140.2 59.4 A 7.922 7.922 0 0 1 140.908 58.232 Q 141.376 57.599 141.929 57.163 A 4.671 4.671 0 0 1 142.15 57 Q 143.262 56.227 144.28 55.827 A 7.542 7.542 0 0 1 144.35 55.8 Q 145.4 55.4 145.8 55 Q 148.8 51.7 151.3 48.1 Q 153.8 44.5 155.7 40.5 Z M 230.4 55.8 L 231.3 56.8 Q 228.673 64.592 223.952 69.1 A 21.944 21.944 0 0 1 222.95 70 A 21.835 21.835 0 0 1 218.624 72.892 A 15.582 15.582 0 0 1 211.6 74.6 Q 208.454 74.6 206.61 73.006 A 5.932 5.932 0 0 1 205.8 72.15 A 9.016 9.016 0 0 1 203.982 67.604 A 11.798 11.798 0 0 1 203.9 66.2 Q 203.9 64.655 204.284 62.568 A 39.423 39.423 0 0 1 204.75 60.4 A 64.863 64.863 0 0 1 206.028 55.888 A 78.669 78.669 0 0 1 207 53.05 A 53.414 53.414 0 0 1 210.021 46.227 A 49.306 49.306 0 0 1 210.25 45.8 A 31.029 31.029 0 0 1 211.917 43.064 Q 212.812 41.76 213.76 40.717 A 17.836 17.836 0 0 1 214.2 40.25 Q 215.501 38.918 216.764 38.411 A 4.102 4.102 0 0 1 218.3 38.1 A 2.459 2.459 0 0 1 219.21 38.264 A 2.282 2.282 0 0 1 219.85 38.65 A 1.752 1.752 0 0 1 220.409 39.551 Q 220.5 39.887 220.5 40.3 Q 220.5 41.413 219.167 43.816 A 30.151 30.151 0 0 1 218.95 44.2 Q 217.618 46.52 215.88 49.431 A 527.778 527.778 0 0 1 215.3 50.4 Q 213.2 53.9 211.65 57.75 Q 210.1 61.6 210.1 65.1 A 16.948 16.948 0 0 0 210.166 66.656 Q 210.381 68.981 211.3 69.9 A 3.696 3.696 0 0 0 212.711 70.761 Q 213.297 70.968 214.019 71.048 A 8.857 8.857 0 0 0 215 71.1 A 7.976 7.976 0 0 0 218.047 70.455 Q 219.221 69.972 220.442 69.126 A 19.563 19.563 0 0 0 222.25 67.7 A 20.815 20.815 0 0 0 224.669 65.116 Q 227.427 61.677 230.4 55.8 Z M 93.5 50.6 A 62.647 62.647 0 0 0 98.008 45.554 A 75.912 75.912 0 0 0 100.3 42.55 Q 103.6 38 106.45 33.1 Q 109.3 28.2 111.5 23.6 Q 113.7 19 114.9 15.35 Q 115.898 12.315 116.066 10.421 A 8.177 8.177 0 0 0 116.1 9.7 A 6.299 6.299 0 0 0 116.088 9.296 Q 116.049 8.69 115.882 8.443 A 0.526 0.526 0 0 0 115.85 8.4 A 1.556 1.556 0 0 0 115.736 8.276 Q 115.608 8.153 115.494 8.116 A 0.304 0.304 0 0 0 115.4 8.1 A 0.927 0.927 0 0 0 114.964 8.239 Q 114.145 8.695 112.65 10.65 A 49.537 49.537 0 0 0 111.233 12.61 Q 109.806 14.678 108.1 17.5 Q 105.5 21.8 102.8 27.3 A 183.076 183.076 0 0 0 97.804 38.425 A 199.301 199.301 0 0 0 97.65 38.8 A 123.762 123.762 0 0 0 93.965 49.056 A 111.599 111.599 0 0 0 93.5 50.6 Z M 281.1 50.6 A 62.647 62.647 0 0 0 285.608 45.554 A 75.912 75.912 0 0 0 287.9 42.55 Q 291.2 38 294.05 33.1 Q 296.9 28.2 299.1 23.6 Q 301.3 19 302.5 15.35 Q 303.498 12.315 303.666 10.421 A 8.177 8.177 0 0 0 303.7 9.7 A 6.299 6.299 0 0 0 303.688 9.296 Q 303.649 8.69 303.482 8.443 A 0.526 0.526 0 0 0 303.45 8.4 A 1.556 1.556 0 0 0 303.336 8.276 Q 303.208 8.153 303.094 8.116 A 0.304 0.304 0 0 0 303 8.1 A 0.927 0.927 0 0 0 302.564 8.239 Q 301.745 8.695 300.25 10.65 A 49.537 49.537 0 0 0 298.833 12.61 Q 297.406 14.678 295.7 17.5 Q 293.1 21.8 290.4 27.3 A 183.076 183.076 0 0 0 285.404 38.425 A 199.301 199.301 0 0 0 285.25 38.8 A 123.762 123.762 0 0 0 281.565 49.056 A 111.599 111.599 0 0 0 281.1 50.6 Z M 62.216 57.446 A 63.326 63.326 0 0 0 63.2 56.95 Q 66.6 55.2 69.75 52.8 A 25.888 25.888 0 0 0 73.373 49.477 A 22.105 22.105 0 0 0 74.95 47.5 A 11.479 11.479 0 0 0 76.504 44.477 A 9.744 9.744 0 0 0 77 41.4 A 4.876 4.876 0 0 0 76.961 40.761 Q 76.875 40.113 76.6 39.7 A 1.112 1.112 0 0 0 76.139 39.317 Q 75.754 39.134 75.14 39.105 A 5.098 5.098 0 0 0 74.9 39.1 A 7.193 7.193 0 0 0 72.505 39.534 Q 71.562 39.866 70.577 40.452 A 14.496 14.496 0 0 0 69.8 40.95 A 23.1 23.1 0 0 0 66.826 43.395 A 30.237 30.237 0 0 0 64.6 45.8 Q 62.1 48.8 60.1 52.4 A 34.613 34.613 0 0 0 57.823 57.35 A 30.043 30.043 0 0 0 57.1 59.6 Q 59.403 58.832 62.216 57.446 Z M 119.116 57.446 A 63.326 63.326 0 0 0 120.1 56.95 Q 123.5 55.2 126.65 52.8 A 25.888 25.888 0 0 0 130.273 49.477 A 22.105 22.105 0 0 0 131.85 47.5 A 11.479 11.479 0 0 0 133.404 44.477 A 9.744 9.744 0 0 0 133.9 41.4 A 4.876 4.876 0 0 0 133.861 40.761 Q 133.775 40.113 133.5 39.7 A 1.112 1.112 0 0 0 133.039 39.317 Q 132.654 39.134 132.04 39.105 A 5.098 5.098 0 0 0 131.8 39.1 A 7.193 7.193 0 0 0 129.405 39.534 Q 128.462 39.866 127.477 40.452 A 14.496 14.496 0 0 0 126.7 40.95 A 23.1 23.1 0 0 0 123.726 43.395 A 30.237 30.237 0 0 0 121.5 45.8 Q 119 48.8 117 52.4 A 34.613 34.613 0 0 0 114.723 57.35 A 30.043 30.043 0 0 0 114 59.6 Q 116.303 58.832 119.116 57.446 Z M 158.9 67.1 A 19.451 19.451 0 0 0 159.159 65.409 A 21.948 21.948 0 0 0 159.2 65 A 21.766 21.766 0 0 0 159.261 64.119 Q 159.286 63.63 159.295 63.081 A 40.906 40.906 0 0 0 159.3 62.4 Q 159.3 57.7 158.15 53.05 Q 157 48.4 156.2 44.3 Q 153.9 48.1 151.35 51.55 Q 149.298 54.326 147.408 56.358 A 36.317 36.317 0 0 1 146.5 57.3 A 16.847 16.847 0 0 0 148.863 60.959 A 22.249 22.249 0 0 0 151.15 63.3 Q 154.3 66.1 158.9 67.1 Z M 154.921 72.947 A 19.399 19.399 0 0 0 155.3 72.8 A 4.024 4.024 0 0 0 156.853 71.651 Q 157.759 70.598 158.381 68.757 A 14.585 14.585 0 0 0 158.4 68.7 Q 154.2 67.9 150.95 65.4 A 27.871 27.871 0 0 1 148.745 63.525 Q 147.1 61.963 146.1 60.4 Q 143.945 60.498 143.901 63.762 A 10.2 10.2 0 0 0 143.9 63.9 Q 143.9 67.5 146.05 70.55 A 6.832 6.832 0 0 0 150.981 73.533 A 9.065 9.065 0 0 0 152.1 73.6 Q 153.184 73.6 154.921 72.947 Z M 221.791 28.507 A 5.454 5.454 0 0 0 223.6 28.8 A 6.275 6.275 0 0 0 226.138 28.269 A 7.696 7.696 0 0 0 228.05 27.05 Q 229.043 26.202 229.555 25.319 A 3.784 3.784 0 0 0 230.1 23.4 A 5.35 5.35 0 0 0 230.062 22.741 Q 229.915 21.556 229.2 21 A 2.889 2.889 0 0 0 228.813 20.746 Q 227.998 20.3 226.8 20.3 Q 224.4 20.3 221.95 21.85 Q 220.955 22.48 220.364 23.2 A 3.549 3.549 0 0 0 219.5 25.5 A 4.027 4.027 0 0 0 219.541 26.082 A 2.614 2.614 0 0 0 220.75 28 A 4.951 4.951 0 0 0 221.791 28.507 Z"
            variants={pathVariants}
          />
        </g>
      </StyledLetters>
    </StyledPreLoader>
  );
};

export default SplashScreen;
