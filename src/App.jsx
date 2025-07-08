import React from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex flex-col items-center justify-start p-6">
        {/* App Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2 drop-shadow-sm">
          📝 Simple Todo App
        </h1>

        {/* Subheading */}
        <p className="text-md md:text-lg text-gray-600 mb-6">
          Built with React, Tailwind CSS, and Context API
        </p>

        {/* Todo Card */}
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 space-y-6 border border-blue-100">
          <TodoForm />
          <hr className="border-gray-200" />
          <TodoList />
        </div>

        {/* Footer */}
        <footer className="text-xs text-gray-400 mt-10 text-center">
          © 2025 | Built by Ishant with 💙 React & TailwindCSS
        </footer>
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
