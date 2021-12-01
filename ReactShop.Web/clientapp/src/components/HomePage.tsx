import React, { FC, useEffect } from "react";

// class HomePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     console.log("I was triggered during componentDidMount");
//   }

//   render() {
//     return <div>Home</div>;
//   }
// }

// export default HomePage;

const HomePage: FC<any> = () => {
  useEffect(() => {
    console.log("I was triggered during componentDidMount");
  }, []);
  return <div>Home</div>;
};

export default HomePage;
