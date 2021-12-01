import React, { FC, useEffect } from "react";

const HomePage: FC<any> = () => {
  useEffect(() => {
    console.log("I was triggered during componentDidMount");
  }, []);
  return <div>Home</div>;
};

export default HomePage;
