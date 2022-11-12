import React from "react";
import { GitlabOutlined } from "@ant-design/icons";
import { StyledLogo } from "../Home/Home.styled";
import { Select, Button } from "antd";
import {
  StyledMain,
  StyledSelect,
  StyledPriceSection,
} from "./ViewMoreItemPage.styled";

import dokotooDress from "../../icons/catalog/dresses/dokotoo.jpg";
import moleraniDress from "../../icons/catalog/dresses/molerani.jpg";
import belongsciDress from "../../icons/catalog/dresses/belongsci.jpg";
import elescatDress from "../../icons/catalog/dresses/elescat.jpg";

const { Option } = Select;

export const DokotooViewMorePage = () => {
  return (
    <div>
      <picture>
        <StyledLogo style={{ width: 60, marginLeft: 28 }}>
          <GitlabOutlined />
        </StyledLogo>
      </picture>

      <main>
        <StyledMain>
          <div>
            <p className="characteristics-p">
              <span style={{ background: "tomato" }}>Dress</span>
              <span style={{ background: "goldenRod" }}>Summer</span>
            </p>
            <header>
              <h1>DOKOTOO</h1>
            </header>
            <p>
              Women's 2022 floral print mini dress
              <br />
              Must-have for summer season
              <br />
              Available in three colors
            </p>
            <span className="num-span">Left: 120</span>
          </div>
          <picture>
            <img src={dokotooDress} alt="clothes" />
          </picture>
        </StyledMain>

        <section>
          <StyledSelect>
            <Select
              placeholder="Choose color"
              size="large"
              style={{ width: 200, marginLeft: 200 }}
            >
              <Option value="white">White</Option>
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
            </Select>
          </StyledSelect>
        </section>
      </main>

      <section>
        <StyledPriceSection>
          <span>Price: $29.00</span>
          <span className="btn-span">
            <Button size="large" shape="round" href="/catalog">
              Go back
            </Button>
            <Button
              size="large"
              shape="round"
              type="primary"
              href="/cart"
              style={{ marginLeft: 32 }}
            >
              Add to cart
            </Button>
          </span>
        </StyledPriceSection>
      </section>
    </div>
  );
};

export const MoleraniViewMorePage = () => {
  return (
    <div>
      <picture>
        <StyledLogo style={{ width: 60, marginLeft: 28 }}>
          <GitlabOutlined />
        </StyledLogo>
      </picture>

      <main>
        <StyledMain>
          <div>
            <p className="characteristics-p">
              <span style={{ background: "tomato" }}>Dress</span>
              <span style={{ background: "goldenRod" }}>Summer</span>
            </p>
            <header>
              <h1>MOLERANI</h1>
            </header>
            <p>
              Women's casual plain loose evening dress
              <br />
              Must-have for summer season
              <br />
              Available in two colors
            </p>
            <span className="num-span">Left: 70</span>
          </div>
          <picture>
            <img src={moleraniDress} alt="clothes" />
          </picture>
        </StyledMain>

        <section>
          <StyledSelect>
            <Select
              placeholder="Choose color"
              size="large"
              style={{ width: 200, marginLeft: 200 }}
            >
              <Option value="black">Black</Option>
              <Option value="white">White</Option>
            </Select>
          </StyledSelect>
        </section>
      </main>

      <section>
        <StyledPriceSection>
          <span>Price: $40.00</span>
          <span className="btn-span">
            <Button size="large" shape="round" href="/catalog">
              Go back
            </Button>
            <Button
              size="large"
              shape="round"
              type="primary"
              href="/cart"
              style={{ marginLeft: 32 }}
            >
              Add to cart
            </Button>
          </span>
        </StyledPriceSection>
      </section>
    </div>
  );
};

export const BelongsciViewMorePage = () => {
  return (
    <div>
      <picture>
        <StyledLogo style={{ width: 60, marginLeft: 28 }}>
          <GitlabOutlined />
        </StyledLogo>
      </picture>

      <main>
        <StyledMain>
          <div>
            <p className="characteristics-p">
              <span style={{ background: "tomato" }}>Dress</span>
              <span style={{ background: "goldenRod" }}>Summer</span>
            </p>
            <header>
              <h1>BELONGSCI</h1>
            </header>
            <p>
              Women's dress sweet cute v-neck mini dress
              <br />
              Must-have for summer season
              <br />
              Available in three colors
            </p>
            <span className="num-span">Left: 100</span>
          </div>
          <picture>
            <img src={belongsciDress} alt="clothes" />
          </picture>
        </StyledMain>

        <section>
          <StyledSelect>
            <Select
              placeholder="Choose color"
              size="large"
              style={{ width: 200, marginLeft: 200 }}
            >
              <Option value="blue">Blue</Option>
              <Option value="red">Red</Option>
              <Option value="orange">Orange</Option>
            </Select>
          </StyledSelect>
        </section>
      </main>

      <section>
        <StyledPriceSection>
          <span>Price: $35.00</span>
          <span className="btn-span">
            <Button size="large" shape="round" href="/catalog">
              Go back
            </Button>
            <Button
              size="large"
              shape="round"
              type="primary"
              href="/cart"
              style={{ marginLeft: 32 }}
            >
              Add to cart
            </Button>
          </span>
        </StyledPriceSection>
      </section>
    </div>
  );
};

export const ElescatViewMorePage = () => {
  return (
    <div>
      <picture>
        <StyledLogo style={{ width: 60, marginLeft: 28 }}>
          <GitlabOutlined />
        </StyledLogo>
      </picture>

      <main>
        <StyledMain>
          <div>
            <p className="characteristics-p">
              <span style={{ background: "tomato" }}>Dress</span>
              <span style={{ background: "goldenRod" }}>Summer</span>
            </p>
            <header>
              <h1>ELESCAT</h1>
            </header>
            <p>
              Women summer dress beach casual tunic
              <br />
              Must-have for summer season
              <br />
              Available in four colors
            </p>
            <span className="num-span">Left: 130</span>
          </div>
          <picture>
            <img src={elescatDress} alt="clothes" />
          </picture>
        </StyledMain>

        <section>
          <StyledSelect>
            <Select
              placeholder="Choose color"
              size="large"
              style={{ width: 200, marginLeft: 200 }}
            >
              <Option value="white">White</Option>
              <Option value="red">Red</Option>
              <Option value="yellow">Yellow</Option>
              <Option value="green">Green</Option>
            </Select>
          </StyledSelect>
        </section>
      </main>

      <section>
        <StyledPriceSection>
          <span>Price: $30.00</span>
          <span className="btn-span">
            <Button size="large" shape="round" href="/catalog">
              Go back
            </Button>
            <Button
              size="large"
              shape="round"
              type="primary"
              href="/cart"
              style={{ marginLeft: 32 }}
            >
              Add to cart
            </Button>
          </span>
        </StyledPriceSection>
      </section>
    </div>
  );
};
