import TextField from "@material-ui/core/TextField";
import React, { FC } from "react";
import { Button, Paper } from "@material-ui/core";
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
    <Paper>
      <h2>Create User </h2>
      <TextField
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user["email"]}
        label={"Email"} //optional
      />
      <TextField
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user["password"]}
        label={"Password"} //optional
      />
      <TextField
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
        value={user["userName"]}
        label={"UserName"} //optional
      />

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
};

export default CreateUser;
