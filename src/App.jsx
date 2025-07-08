import React from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";



function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-start p-6">
        

        {/* App Heading */}
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-md">
          📝 Todo App
        </h1>

        {/* Sub-heading */}
        <p className="text-gray-600 mb-6 text-lg">
          Organize your tasks efficiently with React + Context API
        </p>

        {/* Form & List Container */}
        <div className="w-full max-w-xl space-y-6">
          <TodoForm />
          <TodoList />
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-400 mt-10">
          🚀 Tailwind CSS integrated successfully!
        </p>
      </div>
    </TodoProvider>
  );
}

export default App;





// import React from "react";
// import { TodoProvider } from "./contexts/TodoContext";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
// import "./index.css";

// function App() {
//   return (
//     <TodoProvider>
//       <div className="min-h-screen bg-gray-100 p-6">
//         <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
//           React Todo App
//         </h1>
//         <TodoForm />
//         <TodoList />
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;
