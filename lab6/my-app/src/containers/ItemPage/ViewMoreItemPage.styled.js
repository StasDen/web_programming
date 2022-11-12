import styled from "styled-components";

export const StyledMain = styled.div`
  font-size: 24px;
  background-color: lavender;
  padding: 140px 0 140px 0;

  img {
    width: 300px;
    height: 400px;
    margin-left: 240px;
    border-radius: 20px;
    border: 2px solid royalBlue;
  }

  div {
    float: right;
    margin-right: 400px;
  }

  h1 {
    font-size: 40px;
    margin-top: 32px;
  }

  p {
    margin-bottom: 60px;
  }

  .num-span {
    border: 1px solid gray;
    padding: 4px 16px 4px 16px;
    border-radius: 4px;
  }

  .characteristics-p span {
    margin-right: 12px;
    color: white;
    padding: 4px 12px 4px 12px;
    border-radius: 8px;
  }
`;

export const StyledSelect = styled.div`
  float: right;
  margin-right: 340px;
  position: relative;
  bottom: 188px;
`;

export const StyledPriceSection = styled.div`
  margin: 160px 0 0 40px;
  font-size: 32px;
  font-weight: bold;

  button {
    display: inline;
  }

  .btn-span {
    float: right;
    margin-right: 60px;
  }
`;
