import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

export default function AddProduct({ addProduct }) {
  const [price, setPrice] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="submit" value="add" />
      </div>
    </form>
  );
}
