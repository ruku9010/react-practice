import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
// import TestContent from "./TestContent";

const users = [
  { name: "Rakib", age: 88 },
  { name: "Raza", age: 80 },
  { name: "Mizan", age: 13 },
  { name: "Zeshan", age: 17 },
];
function App() {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      {users
        .filter((u) => u.age > 18)
        .sort((a, b) => a.age - b.age)
        .map((u) => (
          <Card name={u.name} age={u.age} />
        ))}

        <Counter />
    </>
  );
}

export default App;
