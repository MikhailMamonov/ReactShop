import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("I was triggered during componentDidMount");
  }

  render() {
    return <div>Home</div>;
  }
}

export default HomePage;
