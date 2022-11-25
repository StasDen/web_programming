import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Input, Button } from "antd";
import { StyledSearchBar, StyledMain } from "./Search.styled";
import { StyledCards } from "../../containers/Home/Home.styled";
import CatalogCardItem from "../CardItem/CatalogCardItem";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:9000/api/catalog",
});

// Func to use 'useParams()' in class(not available by default)
export function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const { Search } = Input;

class SearchCompClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dresses: [],
      search: "",
      loading: true,
    };
  }

  componentDidMount() {
    api.get("/").then((res) => {
      this.setState({ dresses: res.data });
    });
  }

  searchText(event) {
    this.setState({ search: event.target.value });
  }

  filterItems(menuItem) {
    api.get(`/category/${menuItem}`).then((res) => {
      this.setState({ dresses: res.data });
    });
  }

  FilterButtons = (menuItems) => {
    return (
      <div style={{ marginBottom: 60 }}>
        {menuItems?.map((Item, indx) => {
          return (
            <Button key={indx} onClick={() => this.filterItems(Item)}>
              {Item}
            </Button>
          );
        })}
        <Button
          type="primary"
          onClick={() =>
            api.get("/").then((res) => {
              this.setState({ dresses: res.data });
            })
          }
          style={{ marginTop: 20, display: "block" }}
        >
          All
        </Button>
      </div>
    );
  };

  searchFunc() {
    api.get("/").then((res) => {
      // Filtering by obj title
      let dataSearch = res.data.filter((item) => {
        return item.title
          .toString()
          .toLowerCase()
          .includes(this.state.search.toString().toLowerCase());
      });

      this.setState({ dresses: dataSearch });
      return dataSearch;
    });
  }

  render() {
    return (
      <div>
        <StyledMain>
          <h3>Filter by</h3>
          <h4>Category</h4>
          {this.FilterButtons([
            ...new Set(this.state.dresses?.map((item) => item.category)),
          ])}
          <h4>Price</h4>
          {this.FilterButtons([
            ...new Set(this.state.dresses?.map((item) => item.relPrice)),
          ])}
          <h4>Maker</h4>
          {this.FilterButtons([
            ...new Set(this.state.dresses?.map((item) => item.country)),
          ])}
        </StyledMain>

        <StyledSearchBar>
          <h3>Search</h3>
          <span>
            <Search
              enterButton
              placeholder="ELESCAT, FOLUNSI"
              size="large"
              defaultValue={this.state.search}
              onKeyDown={this.searchText.bind(this)}
              onKeyUp={() => this.searchFunc()}
            />
          </span>
        </StyledSearchBar>

        <StyledCards>
          <ul>
            {this.state.dresses.map((item, indx) => (
              <li key={indx}>
                <CatalogCardItem
                  title={item.title}
                  text={item.text}
                  price={item.price}
                  imgSrc={item.imageSrc}
                  id={indx}
                />
              </li>
            ))}
          </ul>
        </StyledCards>
      </div>
    );
  }
}

export default withParams(SearchCompClass);
