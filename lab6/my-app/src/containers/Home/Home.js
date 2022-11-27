import React, { useState } from "react";
import { GitlabOutlined } from "@ant-design/icons";
import { Button } from "antd";
import HomeCardItem from "../../components/CardItem/HomeCardItem";
import { StyledMain, StyledCards, StyledLogo } from "./Home.styled";

import headerImg from "../../icons/header.jpg";
import dressImg from "../../icons/dress.jpg";
import skirtImg from "../../icons/skirt.webp";
import shirtImg from "../../icons/shirt.webp";
import hatImg from "../../icons/hat.jpg";
import coatImg from "../../icons/coat.webp";
import jeansImg from "../../icons/jeans.png";

// Redux
import store from "../Cart/reduxDEMO/store";
import { bugAdded, bugRemoved, bugResolved } from "../Cart/reduxDEMO/actions";
// Redux

const homeClothes = [
  {
    title: "Skirts",
    text: "Little fashionable things",
    image: skirtImg,
    price: 25,
  },
  {
    title: "Dresses",
    text: "Good new dresses",
    image: dressImg,
    price: 20,
  },
  {
    title: "Shirts",
    text: "Modern style shirts",
    image: shirtImg,
    price: 12,
  },
];

const moreHomeClothes = [
  {
    title: "Skirts",
    text: "Little fashionable things",
    image: skirtImg,
    price: 25,
  },
  {
    title: "Dresses",
    text: "Good new dresses",
    image: dressImg,
    price: 20,
  },
  {
    title: "Shirts",
    text: "Modern style shirts",
    image: shirtImg,
    price: 12,
  },
  {
    title: "Coats",
    text: "Coats on any occasion",
    image: coatImg,
    price: 70,
  },
  {
    title: "Hats",
    text: "For every style type",
    image: hatImg,
    price: 10,
  },
  {
    title: "Jeans",
    text: "Casual and not only jeans",
    image: jeansImg,
    price: 30,
  },
];

const Home = () => {
  const [homeItems, setHomeItems] = useState(homeClothes);
  const [visible, setVisible] = useState(true);

  // ====================== Redux ======================

  // Running every time when state changes
  const unsubscribe = store.subscribe(() => {
    console.log("State has changed!", store.getState());
  });

  // Calling reducer
  store.dispatch(bugAdded("Bug1"));

  // Stopping subscription
  unsubscribe();

  store.dispatch(bugRemoved(1));

  store.dispatch(bugResolved(0));

  console.log(store.getState());
  // ====================== Redux ======================

  return (
    <div>
      <picture>
        <StyledLogo style={{ width: 60, marginLeft: 28 }}>
          <GitlabOutlined />
        </StyledLogo>
      </picture>

      <main>
        <StyledMain>
          <img src={headerImg} alt="header" />
          <header>
            <h1>
              Clothes by <i>Clothed</i>
            </h1>
          </header>
          <p>
            Fine clothes from all over the world.
            <br /> Always new fashionable models.
            <br /> Only reliable brands.
            <br /> Delivery is available almost
            <br /> for every EU country.
            <br />
            <br /> <strong>Find your new thing now!</strong>
          </p>
        </StyledMain>
      </main>

      <section>
        <StyledCards>
          <ul>
            {homeItems.map((item, indx) => (
              <li key={indx}>
                <HomeCardItem
                  title={item.title}
                  text={item.text}
                  price={item.price}
                  imgSrc={item.image}
                  id={indx} // Adding id for better performance
                />
              </li>
            ))}
          </ul>
        </StyledCards>
      </section>

      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 80,
          }}
        >
          <Button
            size="large"
            shape="round"
            type="primary"
            onClick={() => {
              setHomeItems(moreHomeClothes);
              setVisible(false);
            }}
            style={{ display: visible ? "inline" : "none" }}
          >
            View more
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
