const Events = () => {
  const handleMyEvent = () => {
    console.log("Ativou o evento!!");
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Click me!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!!")}>Click me tambem!</button>
      </div>
    </div>
  );
};
export default Events;
