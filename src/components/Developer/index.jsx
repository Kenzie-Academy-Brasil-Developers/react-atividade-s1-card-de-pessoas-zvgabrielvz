import "./style.css";
const Developer = ({ info }) => {
  return (
    <div>
      <h1>Resultado</h1>
      <h3>Dev: {info[0].name} </h3>
      <p>Idade: {info[0].age} </p>
      <p>País: {info[0].country} </p>

      <h3>Dev: {info[1].name} </h3>
      <p>Idade: {info[1].age} </p>
      <p>País: {info[1].country} </p>

      <h3>Dev: {info[2].name} </h3>
      <p>Idade: {info[2].age} </p>
      <p>País: {info[2].country} </p>
    </div>
  );
};

export default Developer;
