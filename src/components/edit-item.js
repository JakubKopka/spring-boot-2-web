import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout";
import styled from 'styled-components'
import axios from "axios";
import {BasicInput} from "../layout/elements/inputs";
import {EditButton} from "../layout/elements/buttons";

const Box = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Row = styled.div`
margin: 10px;
`

const InfoLabel = styled.label`
`

const EditItem = ({match}) => {

    const id = match.params.id;
    const [mark, setMark] = useState("")
    const [model, setModel] = useState("")
    const [color, setColor] = useState("")
    const [modMark, setModMark] = useState(false)
    const [modModel, setModModel] = useState(false)
    const [modColor, setModColor] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8080/cars/${id}`)
            .then(res => {
                setMark(res.data.mark)
                setModel(res.data.model)
                setColor(res.data.color)
            })
    }, [])

    const saveItem = () => {
        if (mark.length > 0 && model.length > 0 && color.length > 0) {
            if (modMark && modModel && modColor) {
                axios.put(`http://localhost:8080/cars`, {
                    "id": id,
                    "mark": mark,
                    "model": model,
                    "color": color
                }).then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            } else {
                axios.patch(`http://localhost:8080/cars/${id}`, {
                    "mark": mark,
                    "model": model,
                    "color": color
                }).then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            }


        }
    }

    return (
        <Layout>
            <h3>Car </h3>
            <Box>
                <Row>
                    <InfoLabel>Mark: </InfoLabel> <BasicInput onChange={(event) => {
                    setMark(event.target.value);
                    setModMark(true)
                }} value={mark} placeholder="Mark" required/>
                </Row>
                <Row>
                    <InfoLabel>Model: </InfoLabel> <BasicInput onChange={(event) => {
                    setModel(event.target.value);
                    setModModel(true)
                }} value={model} placeholder="Model" required/>
                </Row>
                <Row>
                    <InfoLabel>Color: </InfoLabel> <BasicInput onChange={(event) => {
                    setColor(event.target.value);
                    setModColor(true)
                }} value={color} placeholder="Color" required/>
                </Row>
                <EditButton onClick={saveItem}>Save</EditButton>
            </Box>
        </Layout>
    )
}

export default EditItem;