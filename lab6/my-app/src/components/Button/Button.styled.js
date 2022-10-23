import styled from "styled-components";

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  font-size: 28px;

  button {
    border-radius: 20px;
    border: 1px solid CornFlowerBlue;
    padding: 12px;
  }
`;

export const BackToTopButton = styled.div`
  position: fixed;
  width: 100%;
  left: 48.2%;
  bottom: 40px;
  color: SteelBlue;
  opacity: 0.7;
  font-size: 40px;
  z-index: 1;
  cursor: pointer;
`;
