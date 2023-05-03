/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Alert, Space } from "antd";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchTodos = async () => {
        const results = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await results.json();
        setTodos(todos);
      };
      fetchTodos();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const alertColor = (completed) => {
    if (completed === true) {
      return "success";
    } else {
      return "error";
    }
  };

  const completedTodos = todos
    .filter((todo) => todo.completed === true)
    .slice(0, 10);
  const incompleteTodos = todos
    .filter((todo) => todo.completed === false)
    .slice(0, 10);

  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: "45%",
          margin: "10px",
        }}
      >
        {completedTodos.map((todo) => (
          <Alert
            key={todo.id}
            message="Completed"
            type={alertColor(todo.completed)}
            description={todo.title}
            showIcon
            closable
          />
        ))}
      </Space>
      <Space
        direction="vertical"
        style={{
          width: "45%",
          margin: "10px",
        }}
      >
        {incompleteTodos.map((todo) => (
          <Alert
            key={todo.id}
            message="Incomplete"
            type={alertColor(todo.completed)}
            description={todo.title}
            showIcon
            closable
          />
        ))}
      </Space>
    </>
  );
}

export default TodoList;
