import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { motion } from "framer-motion";

function TodoItem({ todo }) {
  const { deleteTodo, toggleComplete, updateTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(todo.todo);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      updateTodo(todo.id, todoText);
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-300 shadow-sm ${
        todo.completed
          ? "bg-green-100 border-green-300"
          : "bg-white border-gray-200"
      }`}
      whileHover={{ scale: 1.01 }}
    >
      {/* Left side */}
      <div className="flex items-center gap-3 w-full">
        {/* ✅ Checkbox */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="h-5 w-5 accent-green-600 transition duration-200"
        />

        {/* ✏️ Editable Text */}
        {isEditing ? (
          <form onSubmit={handleUpdate} className="w-full">
            <input
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              onBlur={handleUpdate}
              autoFocus
              className="w-full border rounded px-2 py-1 text-sm focus:outline-blue-400"
            />
          </form>
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className={`cursor-pointer text-base transition-all duration-200 ${
              todo.completed
                ? "line-through text-gray-400"
                : "text-gray-800 hover:text-blue-600"
            }`}
          >
            {todo.todo}
          </span>
        )}
      </div>

      {/* ❌ Delete button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 text-xl ml-3"
      >
        ❌
      </button>
    </motion.div>
  );
}

export default TodoItem;

