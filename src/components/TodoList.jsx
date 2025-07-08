import React from "react";
import { useTodo } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";

function TodoList() {
  const { todos } = useTodo();

  if (todos.length === 0)
    return (
      <p className="text-center text-gray-400">No todos yet 💤</p>
    );

  return (
    <div className="space-y-2">
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TodoItem todo={todo} />
          </motion.div>
        ))}
      </AnimatePresence>
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