import "./Card.css";

export default function Card({ name, age }) {
  return (
    <div className="card">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
