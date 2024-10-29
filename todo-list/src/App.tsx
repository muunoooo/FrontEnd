import { useEffect, useRef, useState } from "react";
import { ITodo } from "./types/todo";
import "./style.css";
import Todos from "./components/todos";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([
    { id: 1, desc: "Coding", isDone: false },
    { id: 2, desc: "Eat", isDone: false },
    { id: 3, desc: "Sleep", isDone: false },
    { id: 4, desc: "Repeat", isDone: false },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAdd = () => {
    if (inputRef.current) {
      if (inputRef.current.value == "") return alert("todo must have a word");
      const newTodo: ITodo = {
        id: todo.length ? Math.max(...todo.map((item) => item.id)) + 1 : 1,
        desc: inputRef.current.value,
        isDone: false,
      };
      setTodo((t) => [...t, newTodo]);
      inputRef.current.value = "";
    }
  };

  const handleDelete = (id: number) => {
    const newArr = todo.filter((item) => item.id !== id);
    setTodo(newArr);
  };

  const handleDone = (id: number) => {
    const newArr = todo.map((item) => {
      if (item.id == id) {
        return { ...item, isDone: !item.isDone };
      }
      return { ...item };
    });
    setTodo(newArr);
  };


  return (
    <div className=" flex flex-col items-center p-10">
      <h1 className=" text-4xl font-bold text-green-400 mb-4">
        To<span className=" text-orange-400">Do</span> List
      </h1>
      <Todos todos={todo} handleDelete={handleDelete} handleDone={handleDone} />
      <div className="flex mt-10 min-w-[400px]">
        <input
          ref={inputRef}
          className=" w-full border border-teal-400 rounded-md p-2"
          type="text"
          placeholder="add to do here..."
        />
        <button
          onClick={handleAdd}
          className="bg-emerald-300 p-2 rounded-md ml-3"
        >
          {" "}
          ADD{" "}
        </button>
      </div>
      <p className=" text-2xl font-bold mt-5 ">
        Done : {todo.filter((item) => item.isDone == true).length}
      </p>
    </div>
  );
}

export default App;
