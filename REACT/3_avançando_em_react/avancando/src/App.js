import "./App.css";
import Mao from "./assets/Mao.jpg";
import ManegeData from "./components/ManegeData";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        {/* imagem em public */}
        <img src="/paisagem.jpg" alt="paisagem" width="500" height="300" />
      </div>
      <div>
        {/* imagem em assets */}
        <img src={Mao} alt="Mão" width="500" height="300" />
      </div>
      <ManegeData />
    </div>
  );
}

export default App;
