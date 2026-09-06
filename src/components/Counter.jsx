import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0)

    const handleIncreamentByValue = (value) => {
        setCount(count + value)
    }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      
      <button onClick={() => handleIncreamentByValue(5)}>Increament By Value</button>

      <button onClick={() => setCount(count - 1)}>Decreament</button>

      {count}
    </div>
  );
}
