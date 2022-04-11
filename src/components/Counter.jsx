import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(1);

    function increment() {
        setCount(count * 2);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}