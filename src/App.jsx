import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(12);

  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  }

  return (
    <div>
      <h1>Gerador de senhas</h1>
      <label htmlFor="passwordSize">Tamanho: </label>
      <input
        type="number"
        id="passwordSize"
        min={1}
        value={passwordSize}
        onChange={(ev) => setPasswordSize(ev.target.value)}
      />
      <div>
        <button onClick={generate}>Gerar!</button>
        <button onClick={copyToClipboard}>{copyText}</button>
      </div>
      <div>{password}</div>
    </div>
  );
}

export default App;
