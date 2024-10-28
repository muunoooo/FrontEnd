import { useState } from "react"

function StateComp () {
    const [count, setCount] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <input type="text" onChange={(x) => setName(x.target.value)}/>
            <h1>P {name} Biliard !</h1>
        </div>
    )
}

export default StateComp