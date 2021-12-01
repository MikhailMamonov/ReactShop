import React, { FC, useState } from "react";
import "./catalog.css";
import { Typography, Menu, Layout } from "antd";
import { CatalogProps } from "./CatalogContainer";
import CatalogSection from "../components/Catalog/CatalogSection";
import ShoppingCart from "../components/Catalog/ShoppingCartSection";
import { Product } from "../types";

const { Header, Sider } = Layout;
const { Text } = Typography;

const Catalog: FC<CatalogProps> = (props) => {
  const [filteredProducts, setFilteredProducts] = useState(props.products);
  const [productsInCart, setProductsInCart] = useState([] as Product[]);
  const handleClick = (e: any) => {
    const newProducts = props.products.filter(
      (p) => p.categoryId.toString() === e.key
    );
    setFilteredProducts(newProducts);
  };

  const handleAddToCart = (product: Product) => {
    setProductsInCart((prevProducts) => [...prevProducts, product]);
  };

  const categoryMenu = props.categories.map((category) => (
    <Menu.Item key={category.id}>
      <Text>{category.name}</Text>
    </Menu.Item>
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
            <CatalogSection
              onAddToCart={handleAddToCart}
              filteredProducts={filteredProducts}
            ></CatalogSection>
          </Layout>
          <Layout
            className="site-layout"
            style={{ marginLeft: 100, marginRight: 100 }}
          >
            <Header
              className="site-layout-background"
              style={{ padding: 0, textAlign: "center" }}
            >
              <h2>Shopping cart</h2>
            </Header>
            <ShoppingCart products={productsInCart}></ShoppingCart>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Catalog;
