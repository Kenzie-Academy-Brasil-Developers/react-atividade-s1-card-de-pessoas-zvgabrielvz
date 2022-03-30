import "./App.css";
import Developer from "./components/Developer/index";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Developer
          info={[
            { name: "Gabriel", age: "19", country: "Brasil" },
            { name: "Filipe", age: "28", country: "Brasil" },
            { name: "Mariana", age: "24", country: "Itália" },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
