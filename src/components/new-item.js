import React, {useState} from 'react';
import Layout from "../layout/layout";
import {BasicInput} from "../layout/elements/inputs";
import {AddButton} from "../layout/elements/buttons";
import styled from 'styled-components'
import axios from "axios";


const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
`

const InfoBox = styled.div`
align-items: center;
text-align: center;
height: 50px;
color: green;
`

const NewItem = () => {

    const [mark, setMark] = useState("")
    const [model, setModel] = useState("")
    const [color, setColor] = useState("")
    const [infoBox, setInfoBox] = useState(false)

    const saveData = () => {
        if(mark.length > 0 && model.length > 0 && color.length > 0){
            axios.post(`http://localhost:8080/cars`, {
                "mark": mark,
                "model": model,
                "color": color
            }).then(res => {
                console.log(res);
                console.log(res.data);
            })
            setMark("")
            setModel("")
            setColor("")
            setInfoBox(true)
        }
    }

    return (
        <Layout>
            <h3>Add new car</h3>
            {infoBox ? (
                <InfoBox>Dodano obiekt poprawnie!</InfoBox>
            ) : <InfoBox/>}
            <Form>
                <BasicInput onChange={(event) => {
                    setMark(event.target.value)
                }} value={mark} placeholder="Mark" required />
                <BasicInput onChange={(event) => {
                    setModel(event.target.value)
                }} value={model} placeholder="Model" required />
                <BasicInput onChange={(event) => {
                    setColor(event.target.value)
                }} value={color} placeholder="Color" required />
                <AddButton type="submit" onClick={saveData}>+</AddButton>
            </Form>
        </Layout>
    )
}

export default NewItem;