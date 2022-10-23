import React from "react";
import { Input, Select, Button } from "antd";
import { StyledSearchBar, StyledOptions } from "./Search.styled";

const { Search } = Input;
const { Option } = Select;

const SearchComp = () => {
  return (
    <div>
      <h3>Filter</h3>
      <div>
        <StyledOptions>
          <Select style={{ width: 160 }}>
            <Option value="price">Price</Option>
            <Option value="type">Clothes type</Option>
            <Option value="maker">Maker</Option>
          </Select>
        </StyledOptions>
        <Button style={{ marginTop: 4 }}>Apply</Button>
      </div>

      <h3>Search</h3>
      <div>
        <StyledSearchBar>
          <Search
            placeholder="Dress, skirt"
            size="large"
            allowClear
            enterButton
          />
        </StyledSearchBar>
      </div>
    </div>
  );
};

export default SearchComp;
