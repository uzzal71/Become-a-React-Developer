import "./App.css";

const [firstCity, secondCity, thirdCity] = ["Tokyo", "Dhaka", "Kolkata"];

console.log(firstCity);
console.log(secondCity);
console.log(thirdCity);

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
