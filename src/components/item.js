import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout";
import styled from 'styled-components'
import axios from "axios";


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

const Item = ({ match }) => {

    const [data, setData] = useState("");
    const [id, setId] = useState(match.params.id);

    useEffect(() => {
        axios.get(`http://localhost:8080/cars/${id}`)
            .then(res => {
                setData(res.data)
            })
    }, [])

    const {mark, model, color} = data;

    return (
        <Layout>
            <h3>Edit car </h3>
            <Box>
                <Row>
                    <InfoLabel>Mark: </InfoLabel> <span>{mark}</span>
                </Row>
                <Row>
                    <InfoLabel>Model: </InfoLabel> <span>{model}</span>
                </Row>
                <Row>
                    <InfoLabel>Color: </InfoLabel> <span>{color}</span>
                </Row>
            </Box>
        </Layout>
    )
}

export default Item;