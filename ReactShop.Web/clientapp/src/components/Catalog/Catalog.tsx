import React, { FC } from "react";

import { Row, Col, Typography, Menu, Card } from "antd";
import { CatalogProps } from "./CatalogContainer";

const { Text } = Typography;
const { Meta } = Card;

const Catalog: FC<CatalogProps> = (props) => {
  const categoryMenu = props.categories.map((category) => (
    <Menu.Item key={category.name}>
      <Text>{category.name}</Text>
    </Menu.Item>
  ));

  const productCards = props.products.map((product) => (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={
        <img
          alt="example"
          src="https://oir.mobi/uploads/posts/2020-01/thumbs/1579616694_6-p-zelenie-lyagushki-9.jpg"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      <Text>{product.name}</Text>
      <Text>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Text>
    </Card>
  ));

  return (
    <div>
      <div>
        <Row>
          <Col span={4}>
            <Menu
              // onClick={this.handleClick}
              style={{ width: "100%" }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <Menu.Item key="0">
                <Typography.Text>Categories</Typography.Text>
              </Menu.Item>
              {categoryMenu}
            </Menu>
          </Col>
          <Col span={12}>
            <Row>
              <Col>{productCards}</Col>
            </Row>
            <Row>
              <Col>
                <Text>Remove</Text>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Text>$19.00</Text>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Catalog;
