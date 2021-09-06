import "./styles.css";

export default function App() {
  const myObject = {
    name: "tuan",
    title: "dz",
    class: "16SPT"
  };
  const myArray = ["red", "blue", "black"];
  return (
    <div className="App">
      <h1>Hello {myObject.name}</h1>
      <h2>
        {myArray.map((color) => (
          <p style={{ color }}>{color}</p>
        ))}
      </h2>
    </div>
  );
}
