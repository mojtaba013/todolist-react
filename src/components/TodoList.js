import Todo from "./Todo";

const TodoList = ({ porn, _onComplete }) => {
  const renderTodo = () => {
    //console.log(porn);
    if (porn.length === 0) return <p>add some todos.</p>;
    return porn.map((todo) => {
      return (
        <Todo
          onComplete={() => _onComplete(todo.id)}
          key={todo.id}
          todo={todo}
        />
      );
    });
  };

  return <div >{renderTodo()}</div>;
};
export default TodoList;
