import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext"; // Make sure this path is correct

function TodoItem({ todo }) {
  const { deleteTodo, toggleComplete, updateTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(todo.todo);

  // ✅ Save updated todo text
  const handleUpdate = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      updateTodo(todo.id, todoText);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b bg-white ">
      <div className="flex items-center gap-2 w-full">
        {/* ✅ Checkbox */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />

        {/* 📝 Edit input or display text */}
        {isEditing ? (
          <form onSubmit={handleUpdate} className="flex-grow">
            <input
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              autoFocus
              onBlur={handleUpdate}
              className="border px-2 py-1 rounded w-full"
            />
          </form>
        ) : (
          <span
            className={`flex-grow cursor-default ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.todo}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 ml-4">
        {/* ✏️ Edit Button */}
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700"
            title="Edit"
          >
            ✏️
          </button>
        )}

        {/* ❌ Delete Button */}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700"
          title="Delete"
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
