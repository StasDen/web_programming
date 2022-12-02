import styled from "styled-components";

export const StyledHeader = styled.div`
  font-size: 40px;
  color: gray;
  text-align: center;
  font-weight: bold;
  margin-bottom: 80px;
`;

export const StyledMain = styled.div`
  margin: 0 40px 40px 40px;
  border: 2px solid RoyalBlue;
  padding: 20px;
  border-radius: 20px;
  font-size: 24px;
  background-color: honeydew;

  img {
    width: 200px;
    height: 300px;
    border-radius: 20px;
  }

  div {
    float: right;
    position: relative;
    right: 80px;
    top: 132px;
  }

  h3 {
    font-size: 32px;
    display: inline;
  }
`;

export const StyledTotal = styled.div`
  font-size: 24px;

  .total-p {
    margin-top: 60px;
    text-align: center;
    position: relative;
    font-weight: bold;
  }
`;
