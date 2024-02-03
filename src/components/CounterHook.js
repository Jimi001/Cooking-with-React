import React, { useState, useContext } from "react";
import { MyContext } from "../App";

export default function CounterHook ({initialCount}) {
    const [count, setCount] = useState(initialCount);
    const style = useContext(MyContext);

    return (
        <div>
        <button style={style} onClick={() => setCount(count-1)}>-</button>
        <span>{count}</span>
        <button style={style} onClick={() => setCount(count+1)}>+</button>
        </div>
    )
}

