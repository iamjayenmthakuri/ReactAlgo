// import { useState } from "react";
// import { Alert, Space } from "antd";

// function TodoList({ todos }) {
//   const alertColor = (completed) => {
//     if (completed === true) {
//       return "success";
//     } else {
//       return "error";
//     }
//   };

//   const [completedCount, setCompletedCount] = useState(0);
//   const [incompletedCount, setIncompletedCount] = useState(0);

//   const completedTodos = todos
//     .filter((todo) => todo.completed === true)
//     .slice(completedCount, completedCount + 10);
//   const incompleteTodos = todos
//     .filter((todo) => todo.completed === false)
//     .slice(incompletedCount, incompletedCount + 10);

//   return (
//     <>
//       <Space
//         direction="vertical"
//         style={{
//           width: "45%",
//           margin: "10px",
//         }}
//       >
//         {completedTodos.map((todo) => (
//           <Alert
//             key={todo.id}
//             message="Completed"
//             type={alertColor(todo.completed)}
//             description={todo.title}
//             showIcon
//             closable
//           />
//         ))}
//       </Space>
//       <Space
//         direction="vertical"
//         style={{
//           width: "45%",
//           margin: "10px",
//         }}
//       >
//         {incompleteTodos.map((todo) => (
//           <Alert
//             key={todo.id}
//             message="Incomplete"
//             type={alertColor(todo.completed)}
//             description={todo.title}
//             showIcon
//             closable
//           />
//         ))}
//       </Space>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <button onClick={() => setCompletedCount(completedCount + 10)}>
//           Load More Completed Todos
//         </button>
//         <button onClick={() => setIncompletedCount(incompletedCount + 10)}>
//           Load More Incompleted Todos
//         </button>
//       </div>
//     </>
//   );
// }

// export default TodoList;
