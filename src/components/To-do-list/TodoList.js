import React from "react";
import Todo from "./Todo";

function TodoList({ filteredTodos,todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
