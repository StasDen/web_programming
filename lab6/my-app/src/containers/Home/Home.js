import React, { useState } from "react";
import { GitlabOutlined } from "@ant-design/icons";
import { Button } from "antd";
import HomeCardItem from "../../components/CardItem/HomeCardItem";
import { StyledMain, StyledCards, StyledLogo } from "./Home.styled";

import headerImg from "../../icons/home/header.jpg";
import dressImg from "../../icons/home/dress.jpg";
import skirtImg from "../../icons/home/skirt.webp";
import shirtImg from "../../icons/home/shirt.webp";
import hatImg from "../../icons/home/hat.jpg";
import coatImg from "../../icons/home/coat.webp";
import jeansImg from "../../icons/home/jeans.png";

// Fake apis
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
