import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDataUser } from "../context/DataUser";

export default function CashOutPage() {

    const { token } = useDataUser();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    function newCashOut(e) {

        e.preventDefault();

        const config = { headers: { Authorization: `Bearer ${token}` } };
        const body = { description, value };
        const promise = axios.post("http://localhost:5000/add-event", config, body);

        promise.then((res) => {
            const result = window.confirm("Deseja adicionar mais uma despesa?");
            if (result === true) {
                setValue("");
                setDescription("");
            }
            else {
                navigate("/meus-registros");
            }
        });

        promise.catch((err) => {
            console.log(err.response.data)
        });
    };

    return (

        <Container>
            <h1>Nova saída</h1>
            <form onSubmit={newCashOut}>
                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    min={-999999}
                    max={-1}
                    onChange={e => setValue(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    min={3}
                    max={30}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Salvar saída</button>
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