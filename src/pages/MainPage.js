import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainPage() {

    const [name, setName] = useState("Dayane");

    return (
        <Container>
            <Header>
                <h1>Olá, {name}!</h1>
                <Link to="/">
                    <ion-icon name="log-out-outline"></ion-icon>
                </Link>
            </Header>
            <BoxMain>
                <h2>Não há registros de entrada ou saída</h2>
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
}

const Container = styled.div`
    background-color: #8C11BE;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width:80px;
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