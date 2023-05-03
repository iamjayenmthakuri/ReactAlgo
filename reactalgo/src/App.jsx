/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { Alert } from "antd";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [Show, setShow] = useState(false);
  const [Shows, setShows] = useState(false);

  const handleInCompleted = () => {
    setShow(!Show);
  };
  const handleCompleted = () => {
    setShows(!Shows);
  };

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
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  console.log(todos);

  const alertColor = (completed) => {
    if (completed === true) {
      return "success";
    } else {
      return "error";
    }
  };

  const completedTodos = todos
    .filter((todo) => todo.completed === true)
    .slice(0, 5);
  const incompleteTodos = todos
    .filter((todo) => todo.completed === false)
    .slice(0, 5);

  return (
    <>
      <Heading display={"flex"} alignItems={"center"} justifyContent={"center"}>
        Simple Algo Learning
      </Heading>

      <Flex justifyContent={"center"}>
        <Grid
          gap={5}
          style={{
            width: "25%",
            height: "min-content",
            margin: "10px",
          }}
        >
          <Button onClick={handleCompleted}>Completed</Button>
          {Shows ? (
            <>
              {completedTodos.map((todo, index) => (
                <>
                  <Text key={todo.id}>{index + 1}</Text>
                  <Alert
                    message="Completed"
                    type={alertColor(todo.completed)}
                    description={todo.title}
                    showIcon
                    closable
                  />
                </>
              ))}
            </>
          ) : null}
        </Grid>
        <Grid
          gap={5}
          style={{
            width: "25%",
            margin: "10px",
            height: "10%",
          }}
        >
          <Button onClick={handleInCompleted}>Incompleted</Button>
          {Show ? (
            <>
              {incompleteTodos.map((todo, index) => (
                <>
                  <Text key={todo.id}>{index + 1}</Text>
                  <Alert
                    message="Incomplete"
                    type={alertColor(todo.completed)}
                    description={todo.title}
                    showIcon
                    closable
                  />
                </>
              ))}
            </>
          ) : null}
        </Grid>
      </Flex>
    </>
  );
}

export default TodoList;
