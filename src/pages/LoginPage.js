import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import {useDataUser} from "../context/DataUser"

export default function LoginPage() {
 
    const { setToken, setUserName } = useDataUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function sendLogin(e) {

        e.preventDefault();

        const body = { email, password };
        const promise = axios.post("http://localhost:5000/sign-in", body);
       
        promise.then((res) => {    
            setToken(res.data.token); 
            setUserName(res.data.userName);          
            navigate(`/meus-registros`);
        });
 
        promise.catch((err) => {
            alert("E-mail ou senha incorretos");
            console.log(err.response.data);
        });        
    };

    return (
        <Container>

            <h1>MyWallet</h1>

            <form onSubmit={sendLogin}>
                <input
                    type="email"
                    placeholder="E-mail"
                   value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                   value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Entrar</button>
            </form>

            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </Container>
    )
};

const Container = styled.div`
    background-color: #8C11BE;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
h1 {
    font-family: 'Saira Stencil One', cursive;
    color: #FFFFFF;
    font-size: 35px;
    margin-bottom: 50px;
}
p {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
    font-size: 15px; 
    margin-top: 18px;
    cursor: pointer;
}    
form {
    display: flex;
    flex-direction: column;
}
input {
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 326px;
    height: 58px;
    margin-top: 8px;
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
    margin-top: 13px;
    cursor: pointer;
}
`