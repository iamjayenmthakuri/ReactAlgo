import { useEffect, useState } from "react";

import axios from "axios";
import Todo from "./Todo";
import { Flex, Heading } from "@chakra-ui/react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      let results = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      setTodos(results.data);
    };
    fetchTodos();
  }, []);

  return (
    <>
      <Flex justifyContent={"center"}>
        <Heading>Algo Test</Heading>
      </Flex>
      {todos &&
        todos
          .slice(0, 10)
          .map((todo) => <Todo key={todo.id} todo={todo} todos={todos} />)}
    </>
  );
}

export default App;
