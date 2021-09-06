import TextField from "@material-ui/core/TextField";
import React from "react";
import { Button, Paper } from "@material-ui/core";

export default function CreateUser(props) {
  const [user, setUser] = React.useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      handleReset();
      debugger;
      props.onAdd(user);
    };

    const handleReset = () => setUser({...user,  email: "", displayName:"", password:""});
  


  return (  
    <Paper>
    <h2>Create User </h2>
    <TextField
      onChange={(e) =>setUser({...user, email: e.target.value})}
      value={user['email']}
      label={"Email"} //optional
    />
    <TextField
      onChange={(e) =>setUser({...user, password: e.target.value})}
      value={user['password']}
      label={"Password"} //optional
    />
    <TextField
      onChange={(e) =>setUser({...user, displayName: e.target.value})}
      value={user['displayName']}
      label={"DisplayName"} //optional
    />

    <Button onClick={handleSubmit}>Submit</Button>
    <Button onClick={handleReset}>Reset</Button>
  </Paper>
  );
}
