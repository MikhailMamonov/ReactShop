import React, { FC, useState } from "react";
import "./catalog.css";
import {
  Row,
  Col,
  Typography,
  Menu,
  Card,
  Layout,
  Button,
  Avatar,
  List,
  Space,
  Modal,
} from "antd";
import { CatalogProps } from "./CatalogContainer";

import { Product } from "../../types/products";
const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;
const { Meta } = Card;
const gridStyle = {
  width: "25%",
};

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Catalog: FC<CatalogProps> = (props) => {
  const [filteredProducts, setFilteredProducts] = useState(props.products);
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({} as Product);
  const showModal = () => {
    console.log("showModal");
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleBuy = (e: any) => {
    console.log(e);
    const newProducts = props.products.filter(
      (p) => p.categoryId.toString() === e.key
    );
    setFilteredProducts(newProducts);
  };

  const handleCardClick = (productId: number) => {
    console.log(productId);
    const product = props.products.find((p) => p.id === productId);
    console.log(product);
    setSelectedProduct(product as Product);
    showModal();
  };

  const handleClick = (e: any) => {
    const newProducts = props.products.filter(
      (p) => p.categoryId.toString() === e.key
    );
    setFilteredProducts(newProducts);
  };

  const getCategoryName = (categoryId: number) => {
    const category = props.categories.find((i) => i.id === categoryId);
    return category ? category.name : "";
  };

  const categoryMenu = props.categories.map((category) => (
    <Menu.Item key={category.id}>
      <Text>{category.name}</Text>
    </Menu.Item>
  ));

  const listData = props.products.map((product) => {
    return {
      href: "https://ant.design",
      title: product.name,
      avatar: product.image,
      description: product.description,
      price: product.price,
      category: getCategoryName(product.categoryId),
    };
  });

  console.log(listData);

  const productCards = filteredProducts.map((product) => (
    <Col key={product.id} span={4}>
      <Card
        onClick={() => handleCardClick(product.id)}
        style={{
          width: 240,

          marginTop: 20,
          backgroundColor: "yellow",
        }}
        bodyStyle={{ backgroundColor: "green", minHeight: 120 }}
        extra={
          <Button
            key="edit"
            onClick={showModal}
            style={{ width: 200 }}
            type="primary"
          >
            Buy
          </Button>
        }
        bordered={false}
        cover={
          <img
            alt="example"
            style={{ height: 180, width: 240 }}
            src={product.image}
          />
        }
        hoverable
      >
        <Meta title={product.name} description={product.description} />
        <Card.Grid>{product.price}</Card.Grid>
      </Card>
    </Col>
  ));

  return (
    <div>
      <div>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              onClick={handleClick}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              {categoryMenu}
            </Menu>
          </Sider>
          <Layout
            className="site-layout"
            style={{ marginLeft: 100, marginRight: 100 }}
          >
            <Header
              className="site-layout-background"
              style={{ padding: 0, textAlign: "center" }}
            >
              <h2>Catalog</h2>
            </Header>
            <Content style={{ margin: "1px 1px 0" }}>
              <Row gutter={[16, 16]}>{productCards}</Row>
              <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: true }}
                okText="Buy"
              >
                {selectedProduct.name}
              </Modal>
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Catalog;
