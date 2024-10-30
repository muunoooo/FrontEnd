import { useDispatch } from "react-redux";
import DisplayCounter from "./components/display";
import DisplayCounter2 from "./components/display2";
import { decrement, increment } from "./store/counterSlice";
import { useCounter } from "./context/counterContext";


function App() {
  const dispatch = useDispatch()
  const {count,increment:inc,decrement:dec} = useCounter()
  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <DisplayCounter2/> 
      <DisplayCounter/>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <hr />
      <button onClick={inc}>increment</button>
      <h1>{count}</h1>
      <button onClick={dec}>decrement</button>
    </div>
  );
}

export default App;
