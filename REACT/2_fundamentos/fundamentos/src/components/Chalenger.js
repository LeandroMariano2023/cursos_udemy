// exercício 2
const Challenger = () => {
    const A = 10;
    const B = 20;
  return (
    <div>
      <p>A é {A}</p>
      <p>B é {B}</p>
      <button onClick={() => console.log(A + B)}>Somar</button>
    </div>
  );
};

export default Challenger;