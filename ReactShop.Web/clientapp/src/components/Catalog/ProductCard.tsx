import React, { FC } from "react";
import { Product } from "./../../types";
import { Col, Card } from "antd";
import Meta from "antd/lib/card/Meta";

type ProductCardPropType = {
  product: Product;
  onClick: (productId: number) => void;
};

const ProductCard: FC<ProductCardPropType> = (props) => {
  return (
    <Col key={props.product.id} span={4}>
      <Card
        onClick={() => props.onClick(props.product.id)}
        style={{
          width: 240,

          marginTop: 20,
          backgroundColor: "yellow",
        }}
        bodyStyle={{ backgroundColor: "green", minHeight: 120 }}
        bordered={false}
        cover={
          <img
            alt="example"
            style={{ height: 180, width: 240 }}
            src={props.product.image}
          />
        }
        hoverable
      >
        <Meta
          title={props.product.name}
          description={props.product.description}
        />
        <Card.Grid>{props.product.price}</Card.Grid>
      </Card>
    </Col>
  );
};

export default ProductCard;
