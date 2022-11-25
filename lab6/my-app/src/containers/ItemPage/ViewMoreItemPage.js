import React, { Component } from "react";
import { GitlabOutlined } from "@ant-design/icons";
import { StyledLogo } from "../Home/Home.styled";
import { Select, Button } from "antd";
import { withParams } from "../../components/Search/Search";
import { api } from "../../components/Search/Search";
import {
  StyledMain,
  StyledSelect,
  StyledPriceSection,
} from "./ViewMoreItemPage.styled";

const { Option } = Select;

class ViewMorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.params; // Extracting 'id' from url
    api.get(`/${id}`).then((res) => {
      this.setState({ clothes: res.data });
    });
  }

  render() {
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
                <h1>{this.state.clothes.title}</h1>
              </header>
              <p>{this.state.clothes.text}</p>
              <span className="num-span">{`Left: ${this.state.clothes.left}`}</span>
            </div>
            <picture>
              <img src={this.state.clothes.imageSrc} alt="clothes" />
            </picture>
          </StyledMain>

          <section>
            <StyledSelect>
              <Select
                placeholder="Choose color"
                size="large"
                style={{ width: 200, marginLeft: 200 }}
              >
                <Option value="color">{this.state.clothes.color}</Option>
                <Option value="white">White</Option>
                <Option value="black">Black</Option>
              </Select>
            </StyledSelect>
          </section>
        </main>

        <section>
          <StyledPriceSection>
            <span>{`Price: $${this.state.clothes.price}`}</span>
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
  }
}

export default withParams(ViewMorePage);
