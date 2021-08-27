import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import React, {Component} from 'react';
import AddProduct from "./AddProduct";
import {ProductAdminGrid} from "./ProductAdminGrid/ProductAdminGrid"

class Products extends Component 
{
  constructor(props){
    super(props);
  }

  render(){
    var products = this.props.products.map((item, i)=>{
      return(
        <li key={item.id}>
        <Row>
          <Col>Id: {item.id}</Col>
          <Col>Name: {item.name}</Col>
          <Col>Price: {item.price}</Col>
          <Col>
          <Button
              onClick={() => {
                this.props.onEditProductClick(item.id, item);
              }}
            >
              Изменить
            </Button>
            <Button
              onClick={() => {
                this.props.onDeleteProductClick(item.id);
              }}
            >
              Удалить
            </Button>
          </Col>
        </Row>
      </li>
          )
      });
    return(
    <div>
    <Container>
      <h2>Products</h2>
      {this.props.error !== null ?
       this.props.error.split('\n').map(str => <p><b>{str}</b></p>)
          : null}
      <Loader type="Bars" visible={this.props.isLoading} color="#00BFFF" height={80} width={80} />
      <AddProduct addProduct={this.props.onAddProductClick}
            categories={this.props.categories}></AddProduct>
            {/* {products.length? <ul>{products}</ul>: "Products not exists"} */}

            <ProductAdminGrid rows={this.props.products} onDelete={this.props.onDeleteProductClick}></ProductAdminGrid>
    </Container>
  </div>)
  }
}


export default Products;
