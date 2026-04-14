import { useState } from "react";
import CryptoJS from "crypto-js";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [llave, setLlave] = useState("");
  const [resultado, setResultado] = useState("");

  const cifrar = () => {
    if (!texto || !llave) return;
    const cifrado = CryptoJS.AES.encrypt(texto, llave).toString();
    setResultado(cifrado);
  };

  const descifrar = () => {
    if (!texto || !llave) return;
    const bytes = CryptoJS.AES.decrypt(texto, llave);
    const descifrado = bytes.toString(CryptoJS.enc.Utf8);
    setResultado(descifrado || "Llave incorrecta o texto inválido");
  };

  return (
    <div className="container">
      <h1>Cifrador AES</h1>

      <input
        type="text"
        placeholder="Texto a cifrar o descifrar"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <input
        type="text"
        placeholder="Llave secreta"
        value={llave}
        onChange={(e) => setLlave(e.target.value)}
      />

      <div className="buttons">
        <button onClick={cifrar}>Cifrar</button>
        <button onClick={descifrar}>Descifrar</button>
      </div>

      <div className="resultado">
        <h3>Resultado:</h3>
        <p>{resultado}</p>
      </div>
    </div>
  );
}

export default App;