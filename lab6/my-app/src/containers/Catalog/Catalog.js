import React from "react";
import CatalogCardItem from "../../components/CardItem/CatalogCardItem";
import { StyledCards, StyledLogo } from "../Home/Home.styled";
import { GitlabOutlined } from "@ant-design/icons";
import { dresses, skirts, shirts } from "./CatalogApi";
import BackToTopButton from "../../components/Button/BackToTopButton";
import SearchComp from "../../components/Search/Search";
import {
  StyledCatalogHeader,
  StyledSubHeader,
  StyledSearch,
} from "./Catalog.styled";

const Catalog = () => {
  return (
    <div>
      <picture>
        <StyledLogo style={{ width: 60, marginLeft: 28 }}>
          <GitlabOutlined />
        </StyledLogo>
      </picture>

      <header>
        <StyledCatalogHeader>
          <h1>Halloween sale</h1>
          <p>20% off on all clothes</p>
        </StyledCatalogHeader>
      </header>

      <StyledSearch>
        <SearchComp />
      </StyledSearch>

      {/* Dresses */}
      <div
        style={{
          backgroundColor: "AntiqueWhite",
          padding: 60,
        }}
      >
        <StyledSubHeader style={{ color: "LightCoral" }}>
          Dresses
        </StyledSubHeader>
        <StyledCards>
          <ul>
            {dresses.map(({ title, text, price, image }, indx) => (
              <li key={indx}>
                <CatalogCardItem
                  title={title}
                  text={text}
                  price={price}
                  imgSrc={image}
                  id={indx} // Adding id for better performance
                />
              </li>
            ))}
          </ul>
        </StyledCards>
      </div>

      {/* Skirts */}
      <div style={{ backgroundColor: "thistle", padding: 60 }}>
        <StyledSubHeader style={{ color: "RosyBrown" }}>Skirts</StyledSubHeader>
        <StyledCards>
          <ul>
            {skirts.map(({ title, text, price, image }, indx) => (
              <li key={indx}>
                <CatalogCardItem
                  title={title}
                  text={text}
                  price={price}
                  imgSrc={image}
                  id={indx}
                />
              </li>
            ))}
          </ul>
        </StyledCards>
      </div>

      {/* Shirts */}
      <div style={{ backgroundColor: "plum", padding: 60 }}>
        <StyledSubHeader style={{ color: "MediumOrchid" }}>
          Shirts
        </StyledSubHeader>
        <StyledCards>
          <ul>
            {shirts.map(({ title, text, price, image }, indx) => (
              <li key={indx}>
                <CatalogCardItem
                  title={title}
                  text={text}
                  price={price}
                  imgSrc={image}
                  id={indx}
                />
              </li>
            ))}
          </ul>
        </StyledCards>
      </div>

      <section>
        <BackToTopButton />
      </section>
    </div>
  );
};

export default Catalog;
