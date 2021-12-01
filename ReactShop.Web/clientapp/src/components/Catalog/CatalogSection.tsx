import React, { FC, useState } from "react";
import { Row, Layout, Modal } from "antd";
import ProductCard from "./ProductCard";
import { Product } from "../../types/products";
const { Content } = Layout;

type CatalogSectionPropType = {
  filteredProducts: Array<Product>;
  onAddToCart: (product: Product) => void;
};

const CatalogSection: FC<CatalogSectionPropType> = (props) => {
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({} as Product);

  const showModal = () => {
    console.log("showModal");
    setVisible(true);
  };
  const handleOk = (e) => {
    console.log(e);
    props.onAddToCart(selectedProduct);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCardClick = (productId: number) => {
    console.log(productId);
    const product = props.filteredProducts.find((p) => p.id === productId);
    console.log(product);
    setSelectedProduct(product as Product);
    showModal();
  };

  const productCards = props.filteredProducts.map((product) => (
    <ProductCard onClick={handleCardClick} product={product}></ProductCard>
  ));

  return (
    <Content style={{ margin: "1px 1px 0", height: "100%" }}>
      <Row justify="center" style={{ width: "100%" }}>
        {productCards}
      </Row>
      <Modal
        title="Product card"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: false }}
        cancelButtonProps={{ disabled: true }}
        okText="In cart"
      >
        {selectedProduct.name}
      </Modal>
    </Content>
  );
};

export default CatalogSection;
