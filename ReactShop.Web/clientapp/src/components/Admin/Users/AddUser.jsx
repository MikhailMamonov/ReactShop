import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

export default function AddUser({ addUser }) {
  const [email, setEmail] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    addUser({ email, displayName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="displayName">displayName</label>
        <input
          type="displayName"
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input type="submit" value="Отправить" />
      </div>
    </form>
  );
}
