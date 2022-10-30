import React from "react";
import { Card, Button } from "antd";
import "antd/dist/antd.min.css"; // antd styles

const HomeCardItem = ({ title, text, price, imgSrc }) => {
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
      <Button>
        <a href="/catalog">More</a>
      </Button>
    </Card>
  );
};

export default HomeCardItem;
