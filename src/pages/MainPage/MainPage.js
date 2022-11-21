import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDataUser } from "../../context/DataUser";
import axios from "axios";
import EventsList from "./EventsList";

export default function MainPage() {

    const { token, userName } = useDataUser();
    const [events, setEvents] = useState(null);
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/get-events", config)

        promise.then((res) => {
            setEvents(res.data);
        });
        promise.catch((err) => {
            console.log(err.response.data);
        });
    }, []);

    function logout() {
        const promise = axios.delete("http://localhost:5000/sign-out", config)

        promise.then((res) => {
            alert("Até breve!");
        });
        promise.catch((err) => {
            console.log(err.response.data)
        });
    };

    if (events === null) {
        return (
            <Container>
                <img src="https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif" alt={'Carregando...'} />
            </Container>
        )
    };

    return (
        <Container>
            <Header>
                <h1>Olá, {userName}!</h1>
                <Link to="/">
                    <ion-icon name="log-out-outline" onClick={logout}></ion-icon>
                </Link>
            </Header>
            <BoxMain>
                {events.length === 0 ? (
                    <h2>Não há registros de entrada ou saída</h2>
                ) : (
                    <EventsList events={events} />
                )}
            </BoxMain>
            <ContainerBotton>
                <BoxCashInOut>
                    <Link to="/nova-entrada">
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </Link>
                    <p>Nova entrada</p>
                </BoxCashInOut>
                <BoxCashInOut>
                    <Link to="/nova-saida">
                        <ion-icon name="remove-circle-outline"></ion-icon>
                    </Link>
                    <p>Nova saída</p>
                </BoxCashInOut>
            </ContainerBotton>
        </Container >
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
`
const Header = styled.div`
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
h1 {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
    font-size: 26px;
    text-transform: capitalize;
}
ion-icon {
    font-size: 30px;
    color: #FFFFFF;
}
`
const BoxMain = styled.div`
    background-color: #FFFFFF;
    height: auto;
    min-height: 60vh;
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin-bottom: 15px;
h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: #868686;
    font-size: 20px;
    text-align: center;
    margin: auto;
}
`
const ContainerBotton = styled.div`
    width: 90vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`
const BoxCashInOut = styled.div`       
    border-radius: 5px;
    height: 20vh;
    width: 44vw;
    background-color: #A328D6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
p {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 700;
    line-height: 20px;
    width: 80px;
    color: #FFFFFF;
    font-size: 17px;
    margin: 10px;
}
ion-icon {
    margin: 10px;
    font-size: 30px;
    color: #FFFFFF;
    cursor: pointer;
}
`