import React, { FC, useState } from "react";
import { Row, Layout, Modal } from "antd";
import ProductCard from "./ProductCard";
import { Product } from "../../types/products";
const { Content } = Layout;

type CatalogContentPropType = {
  filteredProducts: Array<Product>;
  onAddToCart: (product: Product) => void;
};

const CatalogContent: FC<CatalogContentPropType> = (props) => {
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
  );
};

export default CatalogContent;
