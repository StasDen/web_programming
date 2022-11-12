import styled from "styled-components";

export const StyledMain = styled.div`
  font-size: 20px;
  background-color: aliceBlue;
  border-radius: 20px;
  width: 1000px;
  height: 560px;
  margin: 0 0 200px 240px;

  h1 {
    font-weight: bold;
    padding-top: 30px;
  }

  img {
    width: 400px;
    padding: 40px;
    border-radius: 60px;
    float: left;
    margin-right: 100px;
  }
`;

export const StyledCards = styled.div`
  margin: 100px 0 0 32px;

  ul {
    margin-left: 28px;
  }

  li {
    display: inline-block;
    margin: 0 48px 40px 48px;
  }
`;

export const StyledLogo = styled.div`
  font-size: 52px;
  position: relative;
  bottom: 116px;
`;
