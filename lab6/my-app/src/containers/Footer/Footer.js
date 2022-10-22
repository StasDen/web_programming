import React from "react";
import { StyledLogo } from "../Home/Home.styled";
import { StyledFooter, ShareButtonsWrapper } from "./Footer.styled";

// Antd icons
import {
  GitlabOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer>
      <StyledFooter>
        <hr style={{ marginBottom: 60 }} />
        <div>
          <h2>
            <i>Clothed</i>
          </h2>
          <p>Made in Ukraine</p>
          <p>E-mail: clothed@gmail.com</p>
          <p>Contact: +380 73 046 9804</p>
        </div>

        <StyledLogo>
          <GitlabOutlined
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 40,
            }}
          />
        </StyledLogo>

        <ShareButtonsWrapper>
          <button>
            <FacebookOutlined />
          </button>
          <button>
            <TwitterOutlined />
          </button>
          <button>
            <LinkedinOutlined />
          </button>
          <button>
            <GoogleOutlined />
          </button>
        </ShareButtonsWrapper>

        <hr style={{ marginBottom: 60 }} />
        <p className="all-rights-res-p">2022 IoT © All rights reserved</p>
      </StyledFooter>
    </footer>
  );
};

export default Footer;
