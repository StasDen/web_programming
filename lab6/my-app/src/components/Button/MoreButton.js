import React from "react";
import { StyledMoreButton } from "./Button.styled";

const MoreButton = () => {
  return (
    <StyledMoreButton>
      <button>
        <a href="/catalog">View more</a>
      </button>
    </StyledMoreButton>
  );
};

export default MoreButton;
