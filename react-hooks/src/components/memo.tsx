import { useMemo, useState } from "react";

function ComponentUseMemo() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const incNumber = () => setNumber((number) => number + 1);
  const incCount = () => setCount((count) => count + 1);

  const isNumbEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }   
    return number % 2 === 0;
  }, [number]);

  return (
    <div>
        <button onClick={incNumber}>number : {number}</button>
        <h1>{isNumbEven ? "even" : "odd"}</h1>
        <button onClick={incCount}>count : {count}</button>
    </div>
  )
}

export default ComponentUseMemo
