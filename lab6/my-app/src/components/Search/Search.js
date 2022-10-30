import React from "react";
import { Input, Select, Button } from "antd";
import { StyledSearchBar, StyledOptions } from "./Search.styled";

const { Search } = Input;
const { Option } = Select;

const SearchComp = () => {
  return (
    <div>
      <StyledOptions>
        <h3>Filter by</h3>
        <span>
          <Select style={{ width: 160 }}>
            <Option value="price">Price</Option>
            <Option value="type">Clothes type</Option>
            <Option value="maker">Maker</Option>
          </Select>
        </span>
        <span>
          <Select style={{ width: 160 }}>
            <Option value="price">Price</Option>
            <Option value="type">Clothes type</Option>
            <Option value="maker">Maker</Option>
          </Select>
        </span>
        <span>
          <Select style={{ width: 160 }}>
            <Option value="price">Price</Option>
            <Option value="type">Clothes type</Option>
            <Option value="maker">Maker</Option>
          </Select>
        </span>
        <Button style={{ marginTop: 12 }}>Apply</Button>
      </StyledOptions>

      <StyledSearchBar>
        <h3>Search</h3>
        <span>
          <Search
            placeholder="GENERIC, HANES"
            size="large"
            allowClear
            enterButton
          />
        </span>
      </StyledSearchBar>
    </div>
  );
};

export default SearchComp;
