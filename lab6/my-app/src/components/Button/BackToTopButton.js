import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { BackToTopButton } from "./Button.styled";

const ScrollButton = () => {
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
    <BackToTopButton>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </BackToTopButton>
  );
};

export default ScrollButton;
