import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout";
import axios from "axios";
import styled from 'styled-components'
import {MenuButton} from "../layout/elements/buttons";
import {BasicInput} from "../layout/elements/inputs";

const InfoBox = styled.div`
margin-top: 10px;
width: 100%;
height: 60px;
border: 5px solid rgb(224 223 223);
border-radius: 10px;
text-align: center;
line-height: 60px;
`
const ControlBox = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const WarningInfo = styled(InfoBox)`
border: 5px solid #ac0f27;
`

const WinInfo = styled(InfoBox)`
border: 5px solid #186518;
`

const Home = () => {

    const [userValue, setUserValue] = useState(0)
    const [currency, setCurrency] = useState(10)
    const [counter, setCounter] = useState(0)
    const [box, setBox] = useState(
        <InfoBox>
            Wprowadź aktualny kurs ___ uwzględniając 2 miejsca po przecinku
        </InfoBox>
    );
    const [end, setEnd] = useState(false)

    useEffect(() => {

    }, [counter])

    const checkAnswer = () => {
        let c = counter + 1
        setCounter(c)
        if (userValue > currency) {
            setBox(
                <WarningInfo>
                    Za dużo
                </WarningInfo>
            )
        } else if (userValue < currency) {
            setBox(
                <WarningInfo>
                    Za mało
                </WarningInfo>
            )
        } else {
            setBox(
                <WinInfo>
                    Gratki! Udało się za {c} razem!
                </WinInfo>
            )
            setEnd(true)
        }
    }

    const restart = () => {
        setUserValue(0)
        setCurrency(10)
        setCounter(0)
        setBox(
            <InfoBox>
                Wprowadź aktualny kurs ___ uwzględniając 2 miejsca po przecinku
            </InfoBox>
        )
        setEnd(false)
    }


    return (
        <Layout>
            {box}
            <ControlBox>
                <BasicInput value={userValue} onChange={(event) => setUserValue(parseFloat(event.target.value))}
                            type="number" />
                <div>
                    <MenuButton onClick={checkAnswer} disabled={end}>Sprawdź!</MenuButton>
                    <MenuButton onClick={restart} disabled={!end}>Restart</MenuButton>
                </div>
            </ControlBox>
        </Layout>
    )
}

export default Home;