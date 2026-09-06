import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
// import TestContent from "./TestContent";

function App() {
  const users = [
    { name: "Rakib", age: 88 },
    { name: "Raza", age: 80 },
    { name: "Mizan", age: 13 },
    { name: "Zeshan", age: 17 },
  ];

  return (
    <>
      {/* <Card name = {users[0].name} age = {users[0].age} />
    <Card name = {users[1].name} age = {users[1].age} />
    <Card name = {users[2].name} age = {users[2].age} />
    <Card name = {users[3].name} age = {users[3].age} /> */}

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
