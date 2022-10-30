import React from "react";
import { GitlabOutlined } from "@ant-design/icons";
import HomeCardItem from "../../components/CardItem/HomeCardItem";
import { StyledHeader, StyledCards, StyledLogo } from "./Home.styled";
import MoreButton from "../../components/Button/MoreButton";

import dressImg from "../../icons/home/dress.jpg";
import skirtImg from "../../icons/home/skirt.webp";
import shirtImg from "../../icons/home/shirt.webp";
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

const Home = () => {
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
        </StyledCards>
      </section>

      <section>
        <MoreButton />
      </section>
    </div>
  );
};

export default Home;
