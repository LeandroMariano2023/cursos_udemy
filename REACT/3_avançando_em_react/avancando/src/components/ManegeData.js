import { useState } from "react";

const ManegeData = () => {
  let someData = 10;

  const [number, setNumber] = useState(15);

  return (
    <>
      <div>
        <p>valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Alterar Valor</button>
      </div>
      <div>
        <p>valor: {number}</p>
        <button onClick={() => setNumber(20)}>Alterar Valor</button>
      </div>
    </>
  );
};

export default ManegeData;
