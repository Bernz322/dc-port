import React from "react";
import StyledButton from "./buttonStyles";

interface IButton {
  buttonText?: string;
  buttonUrl?: any;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

function Button({
  buttonText,
  buttonUrl,
  target,
  rel,
  ariaLabel,
  onClick,
}: IButton) {
  return (
    <StyledButton
      href={buttonUrl}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span>{buttonText}</span>
      <i />
    </StyledButton>
  );
}

export default Button;
