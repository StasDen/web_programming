import React from "react";
import { StyledLogo } from "../Home/Home.styled";
import { GitlabOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { StyledHeader, StyledMain, StyledTotal } from "./Cart.styled";

import store from "../Cart/redux/store";
import { useSelector } from "react-redux";
import { removeClothes, incrementTotal, decrementTotal } from "./redux/actions";

const Cart = () => {
  const clothes = useSelector((state) => state.clothesReducer);
  const total = useSelector((state) => state.totalReducer);

  return (
    <div>
      <picture>
        <StyledLogo style={{ width: 60, marginLeft: 28 }}>
          <GitlabOutlined />
        </StyledLogo>
      </picture>

      <StyledHeader>Shopping Cart</StyledHeader>

      <ul>
        {clothes?.map((item, indx) => {
          return (
            <li key={indx}>
              <StyledMain>
                <section>
                  <div>
                    <Button
                      type="primary"
                      danger
                      onClick={() => {
                        store.dispatch(removeClothes(item.id));
                        store.dispatch(decrementTotal(item.price));
                      }}
                      style={{
                        float: "right",
                        position: "relative",
                        bottom: 120,
                      }}
                    >
                      Remove
                    </Button>
                    <h3>{item.title}</h3>
                    <Button
                      onClick={() => {
                        item.inCart -= 1;
                        store.dispatch(decrementTotal(item.price));
                      }}
                      style={{
                        fontWeight: "bold",
                        marginRight: 16,
                        marginLeft: 280,
                      }}
                    >
                      -
                    </Button>
                    <span>{item.inCart}</span>
                    <Button
                      onClick={() => {
                        item.inCart += 1;
                        store.dispatch(incrementTotal(item.price));
                      }}
                      style={{ fontWeight: "bold", marginLeft: 16 }}
                    >
                      +
                    </Button>
                    <span style={{ marginLeft: 240 }}>{`$${item.price}`}</span>
                  </div>
                </section>

                <picture>
                  <img src={item.imageSrc} alt="cart clothes" />
                </picture>
              </StyledMain>
            </li>
          );
        })}
      </ul>

      <StyledTotal>
        <p className="total-p">
          Total amount: <span style={{ marginLeft: 40 }}>{`$${total}`}</span>
        </p>
      </StyledTotal>

      <p style={{ marginTop: 140 }}>
        <Button
          size="large"
          shape="round"
          type="primary"
          style={{ float: "right", marginRight: 40 }}
        >
          Continue
        </Button>
        <Button size="large" shape="round" style={{ marginLeft: 40 }}>
          <a href={"/catalog"}>Back to Catalog</a>
        </Button>
      </p>
    </div>
  );
};

export default Cart;
