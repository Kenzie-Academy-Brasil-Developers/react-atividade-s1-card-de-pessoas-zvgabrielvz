import "./style.css";
const Developer = ({ info }) => {
  return (
    <div className="container">
      <h1>Resultado</h1>
      <h3>Dev: {info.name} </h3>
      <p>Idade: {info.age} </p>
      <p>País: {info.country} </p>
    </div>
  );
};

export default Developer;
