/* eslint-disable react/prop-types */
import { Alert, Space } from "antd";

function TodoList({ todo, todos }) {
  const alertColor = (completed) => {
    if (completed === true) {
      return "success";
    } else {
      return "error";
    }
  };

  const Status = todo.completed ? "Completed" : "Incomplete";

  const completedTodos = todos.filter((todo) => todo.completed === true);
  const incompleteTodos = todos.filter((todo) => todo.completed === false);

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
            message={Status}
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
            message={Status}
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
