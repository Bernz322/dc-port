import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContainerWrapper from "../ContainerWrapper";
import StyledPage404 from "./notFoundStyles";
import { Button } from "../../components";

const NotFound = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState<number>(15);

  useEffect(() => {
    setTimeout(() => {
      if (redirect > 0) {
        setRedirect(redirect - 1);
      }
    }, 1000);
    if (redirect === 0) navigate("/");
  }, [redirect, navigate]);
  return (
    <ContainerWrapper>
      <StyledPage404>
        <h1>404</h1>
        <h3>Not sure what you're trying to find.</h3>
        <p>
          You will be redirected to the homepage in {" "}
          <span className="sec">{redirect}</span>
          s.
        </p>
        <div className="btn">
          <Button buttonText="Go Home" buttonUrl="/" ariaLabel="Go home" />
        </div>
      </StyledPage404>
    </ContainerWrapper>
  );
};

export default NotFound;
