import React from "react";
import {
  StyledCatalogHeader,
  StyledSubHeader,
  StyledSearch,
} from "./Catalog.styled";
import CatalogCardItem from "../../components/CardItem/CatalogCardItem";
import { StyledCards } from "../Home/Home.styled";
import { GitlabOutlined } from "@ant-design/icons";
import { StyledLogo } from "../Home/Home.styled";
import { dresses, skirts, shirts } from "./CatalogApi";
import ScrollButton from "../../components/Button/BackToTopButton";
import SearchComp from "../../components/Search/Search";

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
          <p>25% off on all dresses!</p>
        </StyledCatalogHeader>
      </header>

      <StyledSearch>
        <h2>Find your item!</h2>
        <SearchComp />
      </StyledSearch>

      {/* Dresses */}
      <div
        style={{
          backgroundColor: "AntiqueWhite",
          padding: 60,
          marginBottom: 200,
        }}
      >
        <StyledSubHeader style={{ color: "LightCoral" }}>
          Dresses
        </StyledSubHeader>
        <StyledCards>
          <ul className="dresses-ul">
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
      <div
        style={{ backgroundColor: "thistle", padding: 60, marginBottom: 200 }}
      >
        <StyledSubHeader style={{ color: "RosyBrown" }}>Skirts</StyledSubHeader>
        <StyledCards>
          <ul className="dresses-ul">
            {skirts.map(({ title, text, price, image }, indx) => (
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

      {/* Shirts */}
      <div style={{ backgroundColor: "plum", padding: 60, marginBottom: 200 }}>
        <StyledSubHeader style={{ color: "MediumOrchid" }}>
          Shirts
        </StyledSubHeader>
        <StyledCards>
          <ul className="dresses-ul">
            {shirts.map(({ title, text, price, image }, indx) => (
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

      <section>
        <ScrollButton />
      </section>
    </div>
  );
};

export default Catalog;
