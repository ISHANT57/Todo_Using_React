
import React from "react";
import { useTodo } from "../contexts/TodoContext"; // ✅ Correct context import
import TodoItem from "./TodoItem"; // ✅ Renders each individual todo

function TodoList() {
  const { todos } = useTodo(); // 🔹 Get all todos from context

  // 🔸 Return message if no todos
  if (todos.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-400 text-lg">
        No todos yet 💤
      </p>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-4 bg-white rounded-lg shadow divide-y">
      {/* 🔹 Render list of todos */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;













// import React from "react";
// import { useTodo } from "../contexts";
// import TodoItem from "./TodoItem"

// function TodoList(){
//     const {todos}=useTodo()

//     if (todos.length==0)
//          return <p className="text-center mt-10 text-gray-400">No todos yet 💤</p>;

//     return (
//         <div className="max-w-xl mx-auto mt-4 bg-white rounded-lg shadow">
//         {todos.map((todo) => (
//             <TodoItem key={todo.id} todo={todo} />
//         ))}
//         </div>
//     );
//     }

// export default TodoList;