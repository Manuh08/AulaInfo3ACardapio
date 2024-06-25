import "../src/globals.css";
import {  useState } from "react";

export default function App() {

const [nome, setNome] = useState("Professor");
const [numero, setNumero] = useState("(67) 9989-8855")
const [cpf, setCpf] = useState("03915957844")

const mudarNome = () => {
    setNome("Kally")
}

const mudarNumero = () => {
    setNumero("(55) 99655-8844")
}

const mudarCpf = () => {
    setCpf ("0391384677")
}
    return (
       <div>
       <p>{nome}</p>
       <p>{numero}</p>
       <p>{cpf}</p>
        <button onClick={mudarNome}> Mudar </button>
        <button onClick={mudarNumero}> Mudar </button>
        <button onClick={mudarCpf}> Mudar </button>
       </div>
    );
}