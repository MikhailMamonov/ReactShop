import React, { FC } from "react";
import { Button, Input } from "antd";
import { CreateUserProps } from "./UsersContainer";
import { User } from "../../../types/users";

const CreateUser: FC<CreateUserProps> = (props) => {
  const [user, setUser] = React.useState({} as User);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleReset();
    props.onAdd(user);
  };

  const handleReset = () =>
    setUser({ ...user, email: "", userName: "", password: "" });

  return (
    <div>
      <h2>Create User </h2>
      <Input
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user["email"]}
        //label={"Email"} //optional
        placeholder="Email"
      />
      <Input
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user["password"]}
        placeholder="password"
      />
      <Input
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
        value={user["userName"]}
        placeholder="username"
      />

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default CreateUser;
