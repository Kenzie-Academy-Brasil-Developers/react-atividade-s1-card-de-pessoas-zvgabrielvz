import "./App.css";
import Developer from "./components/Developer/index";

function App() {
  const infos = [
    {
      name: "Gabriel",
      age: "19",
      country: "Brasil",
    },
    {
      name: "Filipe",
      age: "28",
      country: "Brasil",
    },
    {
      name: "Mariana",
      age: "24",
      country: "Itália",
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
        {infos.map((info) => (
          <Developer key={info.index} info={info} />
        ))}
      </div>
    </div>
  );
}

export default App;
