import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const changeHandler = (e) => {
    setInput(e.target.value);
    //console.log(todo);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter ...");
      return;
    }
    props.sex(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={input} onChange={changeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
