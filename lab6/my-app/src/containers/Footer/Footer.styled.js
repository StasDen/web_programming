import styled from "styled-components";

export const StyledFooter = styled.div`
  margin-top: 100px;

  div {
    margin-left: 20px;
  }
  .all-rights-res-p {
    text-align: center;
    padding: 0 20px 40px 44px;
    font-size: 16px;
    color: grey;
  }
`;

export const ShareButtonsWrapper = styled.div`
  font-size: 24px;
  float: right;
  position: relative;
  bottom: 160px;
  margin-right: 28px;

  button {
    margin: 0 10px 0 10px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid teal;
  }
`;
