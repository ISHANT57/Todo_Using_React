import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext"; // ✅ Correct path

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    addTodo({
      todo,
      completed: false,
    });

    setTodo("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-xl mx-auto mt-6 shadow-md rounded-lg overflow-hidden border border-gray-200"
    >
      {/* 📝 Input Field */}
      <input
        type="text"
        placeholder="What's on your mind?"
        className="w-full px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none bg-white"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      {/* ➕ Add Button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 transition duration-200"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;




// import React, { useState } from 'react'
// import { useTodo } from '../contexts/TodoContext';

// function TodoForm() {
//     const [todo, setTodo] = useState("")
//     const {addTodo} = useTodo()

//     const add = (e) => {
//       e.preventDefault()

//       if (!todo) return

//       addTodo({ todo, completed: false})
//       setTodo("")
//     }

//   return (
//       <form onSubmit={add}  className="flex">
//           <input
//               type="text"
//               placeholder="Write Todo..."
//               className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//               value={todo}
//               onChange={(e) => setTodo(e.target.value)}
//           />
//           <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
//               Add
//           </button>
//       </form>
//   );
// }

// export default TodoForm;