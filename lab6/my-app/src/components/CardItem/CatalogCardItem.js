import React from "react";
import { Card, Button } from "antd";
import "antd/dist/antd.min.css"; // antd styles

const { Meta } = Card;

const CatalogCardItem = ({ id, title, text, price, imgSrc }) => {
  const viewMoreSrc = `/catalog/${id + 1}`; // Id starting from '1'

  return (
    <Card
      cover={
        <img style={{ height: 300, width: 200 }} alt="clothes" src={imgSrc} />
      }
      style={{
        width: 200,
        height: 560,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <Meta title={title} description={text} />
      <p style={{ marginTop: 16 }}>${price}</p>
      <Button>
        <a href={viewMoreSrc}>View more</a>
      </Button>
    </Card>
  );
};

export default CatalogCardItem;
