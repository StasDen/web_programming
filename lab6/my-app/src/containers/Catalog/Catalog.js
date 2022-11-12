import React from "react";
import { StyledLogo } from "../Home/Home.styled";
import { GitlabOutlined } from "@ant-design/icons";
import BackToTopButton from "../../components/Button/BackToTopButton";
import SearchComp from "../../components/Search/Search";
import { StyledCatalogHeader, StyledSearch } from "./Catalog.styled";

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

      <section>
        <BackToTopButton />
      </section>
    </div>
  );
};

export default Catalog;
