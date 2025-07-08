import { createContext, useContext, useEffect, useState } from "react";

// 🔵 Step 1: Create a new Context object
const TodoContext = createContext();

// 🔵 Step 2: Custom hook to access the context easily
export const useTodo = () => useContext(TodoContext);

// 🔵 Step 3: Provider component
export const TodoProvider = ({ children }) => {
  // 🔹 State: load todos from localStorage at first render
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  // 🔹 Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ✅ Add a new todo
  const addTodo = (todo) =>
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);

  // ❌ Delete a todo
  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  // ✏️ Update a todo
  const updateTodo = (id, updatedText) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, todo: updatedText } : todo
      )
    );

  // ✅ Toggle completed status
  const toggleComplete = (id) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  // 🔹 Provide all state and functions to children
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};




























// import { createContext, useContext, useEffect, useState } from "react";

// const TodoContext = createContext();

// export const useTodo = () => useContext(TodoContext);

// export const TodoProvider = ({ children }) => {
//   const [todos, setTodos] = useState(() => {
//     const localData = localStorage.getItem("todos");
//     return localData ? JSON.parse(localData) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = (todo) =>
//     setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);

//   const deleteTodo = (id) =>
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));

//   const updateTodo = (id, updatedText) =>
//     setTodos((prev) =>
//       prev.map((todo) =>
//         todo.id === id ? { ...todo, todo: updatedText } : todo
//       )
//     );

//   const toggleComplete = (id) =>
//     setTodos((prev) =>
//       prev.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );

//   return (
//     <TodoContext.Provider
//       value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
//     >
//       {children}
//     </TodoContext.Provider>
//   );
// };
