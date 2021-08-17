import React from "react";


export default function AddCategory(props) {
  const [name, setName] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addCategory({ name});
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
        <input type="submit" value="Добавить" />
      </div>
    </form>
  );
}
