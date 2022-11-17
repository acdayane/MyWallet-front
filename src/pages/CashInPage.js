import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

export default function CashInPage() {

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    function newCashIn(e) {

        e.preventDefault();
    }

    return (

        <Container>
            <h1>Nova entrada</h1>
            <form onSubmit={newCashIn}>
                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Salvar entrada</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    background-color: #8C11BE;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
h1 {
    width: 90vw;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
    font-size: 26px;
    margin: 20px 0;
}   
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
input {
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 90vw;
    height: 58px;
    margin-bottom: 10px;
    color: #363636;
    font-family:'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
}
input::placeholder {
    font-family:'Lexend Deca', sans-serif;
    font-weight: 400;
    color: #363636;
    font-size: 18px;
}
button {
    border: 1px solid #A328D6;
    border-radius: 5px;
    width: 331px;
    height: 48px;
    background: #A328D6;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
    font-size: 20px;
    cursor: pointer;
}
`