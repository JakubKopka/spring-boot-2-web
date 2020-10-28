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

const BoldText = styled.span`
font-weight: 700;
`

const Home = () => {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [end, setEnd] = useState(false)
    const [userValue, setUserValue] = useState()
    const [counter, setCounter] = useState(0)
    const [box, setBox] = useState("");

    const getDataFromAPI = () => {
        axios.get(`http://localhost:8080/exchange-rate/PLN`)
            .then(res => {
                setData(res.data)
                console.log(res.data)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getDataFromAPI()
    }, [])


    useEffect(() => {
        setBox(
            <InfoBox>
                Wprowadź aktualny kurs <BoldText>{data.fullName}</BoldText> uwzględniając 2 miejsca po przecinku
            </InfoBox>
        )
    }, [isLoading])

    const checkAnswer = () => {
        let c = counter + 1
        setCounter(c)
        if (userValue > data.rates.value) {
            setBox(
                <WarningInfo>
                    Za dużo
                </WarningInfo>
            )
        } else if (userValue < data.rates.value) {
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
        getDataFromAPI()
        setIsLoading(true)
        setEnd(false)
        setUserValue()
        setCounter(0)
    }


    return (
        <Layout>
            {!isLoading ? (
                <>
                    {box}
                    <ControlBox>
                        <BasicInput value={userValue || ''}
                                    onChange={(event) => setUserValue(
                                        event.target.value !== null ?
                                            parseFloat(event.target.value) : ""
                                    )}
                                    type="number"/>
                        <div>
                            <MenuButton onClick={checkAnswer} disabled={end}>Sprawdź!</MenuButton>
                            <MenuButton onClick={restart} disabled={!end}>Restart</MenuButton>
                        </div>
                    </ControlBox>
                </>
            ) : (
                <BoldText>Loading...</BoldText>
            )}
        </Layout>
    )
}

export default Home;