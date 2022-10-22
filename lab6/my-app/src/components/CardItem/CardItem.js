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
      style={{ width: 300, height: 560, borderRadius: 20 }}
      cover={<img style={{ borderRadius: 20 }} alt="clothes" src={imgSrc} />}
    >
      <Meta title={title} description={text} />
      <p style={{ marginTop: 16 }}>From ${price}</p>
      <Button>More</Button>
    </Card>
  );
};

export default CardItem;
