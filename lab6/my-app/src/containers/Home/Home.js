import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import { StyledHeader, StyledCards, StyledLogo } from "./Home.styled";
import Button from "../../components/Button/Button";
import { GitlabOutlined } from "@ant-design/icons";

// Images
import dressImg from "../../icons/dress.jpg";
import skirtImg from "../../icons/skirt.webp";
import shirtImg from "../../icons/shirt.webp";
import headerImg from "../../icons/header.jpg";

// Fake api
const data = [
  {
    title: "Dresses",
    text: "Good new dresses",
    image: dressImg,
    price: 200,
  },
  {
    title: "Skirts",
    text: "Fashionable things in your wardrobe",
    image: skirtImg,
    price: 100,
  },
  {
    title: "Shirts",
    text: "Modern style shirts",
    image: shirtImg,
    price: 80,
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
            {data.map(({ title, text, price, image }, indx) => (
              <li key={indx}>
                <CardItem
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
        <Button />
      </section>
    </div>
  );
};

export default Home;
