import React, { FC } from "react";
import { Product } from "../../types";
import { Col, Card } from "antd";
import Meta from "antd/lib/card/Meta";

type ProductCardPropType = {
  product: Product;
  onClick: (productId: number) => void;
};

const ProductCard: FC<ProductCardPropType> = (props) => {
  return (
    <Col
      key={props.product.id}
      style={{ margin: "1px 100px 0", width: "100%" }}
    >
      <Card
        onClick={() => props.onClick(props.product.id)}
        style={{
          width: 400,
          marginTop: 10,
          textAlign: "center",
          backgroundColor: "yellow",
          alignContent: "center",
        }}
        bodyStyle={{ backgroundColor: "#DA6464", minHeight: 120 }}
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
        <Card.Grid style={{ height: 40, width: "100%", textAlign: "center" }}>
          {props.product.price}
        </Card.Grid>
      </Card>
    </Col>
  );
};

export default ProductCard;
