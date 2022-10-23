import React from "react";
import { StyledButton } from "./Button.styled";

const MoreButton = () => {
  return (
    <StyledButton>
      <button>
        <a href="/catalog">View more</a>
      </button>
    </StyledButton>
  );
};

export default MoreButton;
