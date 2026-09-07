import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
// import TestContent from "./TestContent";

// const users = [
//   { name: "Rakib", age: 88 },
//   { name: "Raza", age: 80 },
//   { name: "Mizan", age: 13 },
//   { name: "Zeshan", age: 17 },
// ];
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [members, setMembers] = useState([
    { name: "Rakib", age: 88 },
    { name: "Raza", age: 80 },
    { name: "Mizan", age: 13 },
    { name: "Zeshan", age: 17 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setMembers([...members, { name, age }]);
    setMembers((prev) => [...prev, {name, age}])
    console.log(members);

    setName("");
    setAge("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="number" onChange={(e) => setAge(e.target.value)} value={age} />
        <button type="submit">Submit</button>
      </form>

      {members
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
