import { useEffect, useState } from "react";
import styled from "styled-components";

export default function EventsList({ events }) {

    const [sum, setSum] = useState("");

    useEffect(() => {
        let arrValues = [];
        let arrSum = 0;

        events.map((e) => arrValues.push(Number(e.newEvent.value)));

        for (let i = 0; i < events.length; i++) {
            arrSum += arrValues[i];
        };

        setSum(arrSum);

        if (sum > 0) {
            setSum(<span style={{ color: "#03AC00" }}>{arrSum},00</span>)
        } else {
            setSum(<span style={{ color: "#C70000" }}>{arrSum},00</span>)
        };
    }, []);

    return (
        <List>
            {events.map((e) =>
                <EventRow key={e._id}>
                    <p style={{ color: "#C6C6C6" }}>{e.newEvent.date}</p>
                    <p style={{ color: "#000000" }}>{e.newEvent.description}</p>
                    <p style={{ color: "#000000" }}>{e.newEvent.value},00</p>
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
}
`