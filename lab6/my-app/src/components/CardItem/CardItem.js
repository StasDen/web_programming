import React from "react";
import { Card, Button } from "antd";

// antd styles
import "antd/dist/antd.min.css";

const CardItem = ({ title, text, price, imgSrc }) => {
  // Using Card.Meta for more flexible content
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{ width: 360, height: 640, borderRadius: 20, overflow: "hidden" }}
      cover={
        <img style={{ height: 400, width: 360 }} alt="clothes" src={imgSrc} />
      }
    >
      <Meta title={title} description={text} />
      <p style={{ marginTop: 16 }}>From ${price}</p>
      <Button>More</Button>
    </Card>
  );
};

export default CardItem;
