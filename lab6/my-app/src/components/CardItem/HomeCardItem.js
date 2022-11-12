import React from "react";
import { Card, Button } from "antd";
import "antd/dist/antd.min.css"; // antd styles

const { Meta } = Card;

const HomeCardItem = (item) => {
  return (
    <Card
      hoverable
      cover={
        <img
          style={{ height: 400, width: 360 }}
          alt="clothes"
          src={item.imgSrc}
        />
      }
      style={{ width: 360, height: 640, borderRadius: 20, overflow: "hidden" }}
    >
      <Meta title={item.title} description={item.text} />
      <p style={{ marginTop: 16 }}>From ${item.price}</p>
      <Button>
        <a href="/catalog">More</a>
      </Button>
    </Card>
  );
};

export default HomeCardItem;
