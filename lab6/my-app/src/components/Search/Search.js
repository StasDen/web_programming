import React, { useState } from "react";
import { Input, Button } from "antd";
import { StyledSearchBar, StyledMain } from "./Search.styled";
import { StyledCards } from "../../containers/Home/Home.styled";
import CatalogCardItem from "../CardItem/CatalogCardItem";

import data from "../../containers/Catalog/CatalogApi";

const { Search } = Input;

const SearchComp = () => {
  // =================== Search bar ===================
  const [search, setSearch] = useState("");

  const searchText = (event) => {
    setSearch(event.target.value);
  };

  let dataSearch = data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });

  // =================== Filter ===================
  const [items, setItems] = useState(data);

  // Using spread to display only one val
  const categoryItems = [...new Set(data.map((item) => item.category))];
  const relPriceItems = [...new Set(data.map((item) => item.relPrice))];
  const countryItems = [...new Set(data.map((item) => item.country))];

  // Filter buttons
  const Buttons = ({ menuItems }) => {
    return (
      <div style={{ marginBottom: 60 }}>
        {menuItems.map((Item, indx) => {
          return (
            <Button key={indx} onClick={() => filterItems(Item)}>
              {Item}
            </Button>
          );
        })}
        <Button
          type="primary"
          onClick={() => setItems(data)}
          style={{ marginTop: 20, display: "block" }}
        >
          All
        </Button>
      </div>
    );
  };

  // Filter func
  const filterItems = (menuItem) => {
    const newItem = data.filter((newItem) => {
      return (
        newItem.relPrice === menuItem ||
        newItem.category === menuItem ||
        newItem.country === menuItem
      );
    });
    setItems(newItem);
  };

  return (
    <div>
      <StyledMain>
        <h3>Filter by</h3>
        <h4>Category</h4>
        <Buttons menuItems={categoryItems} />
        <h4>Price</h4>
        <Buttons menuItems={relPriceItems} />
        <h4>Maker</h4>
        <Buttons menuItems={countryItems} />
      </StyledMain>

      <StyledSearchBar>
        <h3>Search</h3>
        <span>
          <Search
            enterButton
            placeholder="GENERIC, HANES"
            size="large"
            defaultValue={search}
            onKeyDown={searchText.bind(this)}
            onKeyUp={() => setItems(dataSearch)}
          />
        </span>
      </StyledSearchBar>

      <StyledCards>
        <ul>
          {items.map((item, indx) => (
            <li key={indx}>
              <CatalogCardItem
                title={item.title}
                text={item.text}
                price={item.price}
                imgSrc={item.image}
                id={indx}
              />
            </li>
          ))}
        </ul>
      </StyledCards>
    </div>
  );
};

export default SearchComp;
