import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { StyledBackToTopButton } from "./Button.styled";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 1800) {
      setVisible(true);
    } else if (scrolled <= 1800) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <StyledBackToTopButton>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </StyledBackToTopButton>
  );
};

export default BackToTopButton;
