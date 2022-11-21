import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

export default function RegistrationPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    function sendRegistration(e) {

        e.preventDefault();

        if (password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            alert(`Os campos "Senha" e "Confirme a senha" precisam ser iguais!`);
        }
        else {
            const body = { name, email, password };
            const promise = axios.post("http://localhost:5000/sign-up", body);

            promise.then((res) => {
                navigate(`/`);
            })
            promise.catch((err) => {
                alert("Ops! Algo deu errado...");
                console.log(err.response.data);
            })
        }
    }

    return (

        <Container>

            <h1>MyWallet</h1>

            <form onSubmit={sendRegistration}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    min={2}
                    max={50}
                    onChange={e => setName(e.target.value)}
                    required
                />
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
                    min={4}
                    max={8}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={confirmPassword}
                    min={4}
                    max={8}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>

            <Link to="/" style={{ textDecoration: 'none' }}>
                <p>Já tem uma conta? Entre agora!</p>
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