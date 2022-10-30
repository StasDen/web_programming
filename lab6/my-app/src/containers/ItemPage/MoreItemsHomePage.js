import React from "react";
import { GitlabOutlined } from "@ant-design/icons";
import HomeCardItem from "../../components/CardItem/HomeCardItem";
import { StyledHeader, StyledCards, StyledLogo } from "../Home/Home.styled";
import MoreButton from "../../components/Button/MoreButton";

import dressImg from "../../icons/home/dress.jpg";
import skirtImg from "../../icons/home/skirt.webp";
import shirtImg from "../../icons/home/shirt.webp";
import hatImg from "../../icons/more/hat.jpg";
import coatImg from "../../icons/more/coat.webp";
import jeansImg from "../../icons/more/jeans.png";
import headerImg from "../../icons/home/header.jpg";

// Fake api
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
    title: "Hats",
    text: "Every style type",
    image: hatImg,
    price: 10,
  },
  {
    title: "Coats",
    text: "Coat on any occasion",
    image: coatImg,
    price: 50,
  },
  {
    title: "Jeans",
    text: "Casual and not only jeans",
    image: jeansImg,
    price: 30,
  },
];

const MoreItemsHomePage = () => {
  return (
    <div>
      <picture>
        <StyledLogo style={{ width: 60, marginLeft: 28 }}>
          <GitlabOutlined />
        </StyledLogo>
      </picture>

      <header>
        <StyledHeader>
          <img src={headerImg} alt="header" />
          <h1>
            Clothes by <i>Clothed</i>
          </h1>
          <p>
            Fine clothes from all over the world.
            <br /> Always new fashionable models.
            <br /> Only reliable brands:
            <br /> Nike, Adidas, Puma, New Balance
            <br /> and more.
            <br /> Delivery is available almost
            <br /> for every EU country.
            <br />
            <br /> <strong>Find your new thing now!</strong>
          </p>
        </StyledHeader>
      </header>

      <section>
        <StyledCards>
          <ul>
            {homeClothes.map(({ title, text, price, image }, indx) => (
              <li key={indx}>
                <HomeCardItem
                  title={title}
                  text={text}
                  price={price}
                  imgSrc={image}
                  id={indx} // Adding id for better performance
                />
              </li>
            ))}
          </ul>

          <ul>
            {moreHomeClothes.map(({ title, text, price, image }, indx) => (
              <li key={indx}>
                <HomeCardItem
                  title={title}
                  text={text}
                  price={price}
                  imgSrc={image}
                  id={indx}
                />
              </li>
            ))}
          </ul>
        </StyledCards>
      </section>

      <section>
        <MoreButton />
      </section>
    </div>
  );
};

export default MoreItemsHomePage;
