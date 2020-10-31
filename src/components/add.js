import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout";
import axios from "axios";
import styled from 'styled-components'
import {BasicInput} from "../layout/elements/inputs";
import {BasicButton, MenuButton} from "../layout/elements/buttons";
import Redirect from "react-router-dom/es/Redirect";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const LabelForm = styled.label`
margin-top: 20px;
text-align: center;
`

const Add = () => {
    const [mark, setMark] = useState("")
    const [model, setModel] = useState("")
    const [color, setColor] = useState("")
    const [date, setDate] = useState("")


    const reset = () =>{
        setMark("")
        setModel("")
        setColor("")
        setDate("")
    }

    const add = () => {
        axios.post(`http://localhost:8080/cars`, {
            "mark": mark,
            "model": model,
            "color": color,
            "productionDate": date
        }).then(res => {
            console.log(res);
            console.log(res.data);
        })
        reset()
    }

    return (
        <Layout>
            <Wrapper>
                <div>
                    <LabelForm>Mark: </LabelForm>
                    <BasicInput value={mark} onChange={event => setMark(event.target.value)} type="text"/>
                </div>

                <div>
                    <LabelForm>Model: </LabelForm>
                    <BasicInput value={model} onChange={event => setModel(event.target.value)} type="text"/>
                </div>

                <div>
                    <LabelForm>Color: </LabelForm>
                    <BasicInput value={color} onChange={event => setColor(event.target.value)} type="text"/>
                </div>

                <div>
                    <LabelForm>Production date: </LabelForm>
                    <BasicInput value={date} onChange={event => setDate(event.target.value)} type="date"/>
                </div>

                <div>
                    <MenuButton onClick={add}>
                        Add new car!
                    </MenuButton>
                </div>
            </Wrapper>
        </Layout>
    )
}

export default Add;