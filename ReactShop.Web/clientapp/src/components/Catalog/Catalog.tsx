import React, { FC, useState } from "react";

import { Row, Col, Typography, Menu, Card } from "antd";
import { CatalogProps } from "./CatalogContainer";

const { Text } = Typography;
const { Meta } = Card;

const Catalog: FC<CatalogProps> = (props) => {
  const [filteredProducts, setFilteredProducts] = useState(props.products);
  const handleClick = (e: any) => {
    console.log(e);
    const newProducts = props.products.filter(
      (p) => p.categoryId.toString() === e.key
    );
    setFilteredProducts(newProducts);
  };
  const categoryMenu = props.categories.map((category) => (
    <Menu.Item key={category.id}>
      <Text>{category.name}</Text>
    </Menu.Item>
  ));

  const productCards = filteredProducts.map((product) => (
    <Row gutter={16} style={{ marginLeft: 20, marginBottom: 10 }}>
      <Col span={8}>
        <Card
          style={{ width: "100%", background: "#A9A9A9" }}
          bordered={false}
          title={product.name}
        >
          {product.price}
        </Card>
      </Col>
    </Row>
  ));

  return (
    <div>
      <div>
        <Row style={{ background: "#FFFFF0", padding: "30px" }}>
          <Col span={4}>
            <Menu
              onClick={handleClick}
              style={{ width: "100%", background: "#AFEEEE" }}
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
            {productCards}
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
