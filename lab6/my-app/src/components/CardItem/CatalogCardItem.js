import React from "react";
import { Card, Button } from "antd";
import "antd/dist/antd.min.css"; // antd styles

const CatalogCardItem = ({ title, text, price, imgSrc }) => {
  // Using Card.Meta for more flexible content
  const { Meta } = Card;

  return (
    <Card
      style={{
        width: 200,
        height: 560,
        borderRadius: 20,
        overflow: "hidden",
      }}
      cover={
        <img style={{ height: 300, width: 200 }} alt="clothes" src={imgSrc} />
      }
    >
      <Meta title={title} description={text} />
      <p style={{ marginTop: 16 }}>${price}</p>
      <Button>
        <a href="/cart">Add to cart</a>
      </Button>
    </Card>
  );
};

export default CatalogCardItem;
