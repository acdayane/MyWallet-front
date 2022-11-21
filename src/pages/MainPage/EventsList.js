import { useEffect, useState } from "react";
import styled from "styled-components";

export default function EventsList({ events }) {

    const [sum, setSum] = useState("");
    let arrValues = [];
    let arrSum = 0;

    useEffect(() => {
        events.map((e) => arrValues.push(Number(e.newEvent.value)));

        for (let i = 0; i < events.length; i++) {
            arrSum += arrValues[i];
        };

        setSum(arrSum);
        console.log(arrValues)

        if (sum > 0) {
            setSum(<span style={{ color: "#03AC00" }}>{arrSum}</span>)
        } else {
            setSum(<span style={{ color: "#C70000" }}>-{arrSum}</span>)
        };
    }, []);

    return (
        <List>
            {events.map((e) =>
                <EventRow key={e._id}>
                    <p style={{ color: "#C6C6C6" }}>{e.newEvent.date}</p>
                    <p style={{ color: "#000000" }}>{e.newEvent.description}</p>
                    <p operation={e.operation}>{e.newEvent.value}</p>
                </EventRow>
            )}
            <FooterList>
                <span>SALDO</span>
                {sum}
            </FooterList>
        </List>
    )
};

const List = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`
const FooterList = styled.div`
    display: flex;
    justify-content: space-between;

span {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 17px;
    margin: 5px;
}
`
const EventRow = styled.div`    
    display: flex;
    justify-content: space-between;    
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: #C6C6C6;
    font-size: 17px;
p {
    margin: 5px;
    color: ${(props) => props.operation === "cashIn" ? "#03AC00" : "#C70000"};
}
`