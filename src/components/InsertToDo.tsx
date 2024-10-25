import { useState } from "react";
import StoreToDo from "./StoreToDo";
// import CompletedOnes from "./CompletedOnes";

interface Todo {
  id: number;
  text: string;
  status: boolean;
}

function InsertToDo() {
  const [todos, setTodo] = useState<Todo[]>([]);
  const [inputValue, setInputValues] = useState<string>("");
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [error, showError] = useState<null | string>(null);
  

  const addToDo = (): void => {
    if (inputValue.trim() === "" ) {
      showError("type something to add ToDo");
      return;
    }

    setTodo([...todos, { id: Date.now(), text: inputValue, status: false }]);
    setInputValues("");
    showError(null);
  };

  const editingTodo = (todo: Todo): void => {
    setEditTodo(todo);
    setInputValues(todo.text);
  };

  const updateTodo = (): void => {
    if (editTodo && inputValue.trim() !== "") {
      setTodo(
        todos.map((todo) =>
          todo.id === editTodo.id ? { ...todo, text: inputValue } : todo
        )
      );
      setEditTodo(null);
      setInputValues("");
      showError(null)
    } else {
      showError("You should edit something") 
    }
  };

  const todoStatus = (id: number): void => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const onHandleDelete = (id: number) => {
    setTodo(todos.filter((data) => data.id !== id));
  };

  return (
    <div className="relative flex-col justify-between">
      <div className="w-full mb-6 text-center">
        <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-lime-500 via-emerald-500 to-teal-500 text-transparent bg-clip-text">
          ToDo
        </h1>
        <div className="flex justify-center mt-2">
          <div className="h-1 w-24 bg-gradient-to-r from-lime-500 to-teal-500 rounded-full" />
        </div>
        <div className="text-red-600">{error}</div>
      </div>
      <div className="w-full ">
        <input
          value={inputValue}
          onChange={(e) => setInputValues(e.target.value)}
          type="text"
          placeholder={editTodo ? "update ur todo" : "Here type your todo's"}
          className="p-4 w-4/5 h-12 rounded-l-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <button
          onClick={editTodo ? updateTodo : addToDo}
          className="w-1/5 h-12 rounded-r-md bg-gradient-to-r from-lime-500 to-teal-500 "
        >
          {editTodo ? "update" : "add"}
        </button>
      </div>
      <div className="storing">
        <StoreToDo
          data={todos}
          onCompletion={todoStatus}
          onDelete={onHandleDelete}
          onEdit={editingTodo}
        />
      </div>
      {/* <div className="completedOnes">
        <CompletedOnes data={todos} onDelete={onHandleDelete} />
      </div> */}
    </div>
  );
}

export default InsertToDo;
