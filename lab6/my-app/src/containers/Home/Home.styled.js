import styled from "styled-components";

export const StyledHeader = styled.div`
  font-size: 20px;
  background-color: AliceBlue;
  border-radius: 20px;
  width: 1000px;
  height: 560px;
  margin-left: 240px;

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
  margin: 160px 0 0 112px;

  li {
    display: inline-block;
    margin: 0 48px 0 48px;
  }
`;

export const StyledLogo = styled.div`
  font-size: 52px;
  position: relative;
  bottom: 116px;
`;
