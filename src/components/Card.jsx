import { useState } from "react";
import "./Card.css";

export default function Card({ name, age }) {
  const [user, setUser] = useState("");

  const clickHandler = (userName) => {
    setUser(userName);
  };
  return (
    <div className="card" onClick={() => clickHandler(name)}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {user && <p>Greeting {user}</p>}
    </div>
  );
}
