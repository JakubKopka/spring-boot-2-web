import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout";
import axios from "axios";
import styled from 'styled-components'
import {ShowButton, DeleteButton, EditButton} from "../layout/elements/buttons";


const CarTable = styled.table`
width: 100%;
`
const RowTitle = styled.tr`
height: 50px;
`

const Cell = styled.td`
height: 30px;
text-align: center;
`

const CellOption = styled(Cell)`
max-width: 80px;
`


const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/cars`)
            .then(res => {
                setCars(res.data)
                setIsLoading(false)
            })
    }, [])


    const deleteCar = (id) => {
        axios.delete(`http://localhost:8080/cars/${id}`)
            .then(res => {
                if (res.status === 200) {
                    setCars(cars.filter(item => item.id !== id))
                }
            })
    }

    return (
        <Layout>
            <CarTable>
                <RowTitle>
                    <th>Mark</th>
                    <th>Model</th>
                    <th>Color</th>
                    <th></th>

                </RowTitle>
                {!isLoading ? (
                    cars.map(car => {
                        const {id, mark, model, color} = car;
                        return (
                            <tr key={id}>
                                <Cell>{mark}</Cell>
                                <Cell>{model}</Cell>
                                <Cell>{color}</Cell>
                                <CellOption>
                                    <a href={`/${id}`}><ShowButton>Show</ShowButton></a>
                                    <a href={`/edit/${id}`}><EditButton>Edit</EditButton></a>
                                    <DeleteButton onClick={() => {
                                        deleteCar(id)
                                    }}>Delete</DeleteButton>
                                </CellOption>
                            </tr>
                        );
                    })
                ) : (
                <h3>Loading...</h3>
                )}
            </CarTable>
        </Layout>
    )
}

export default Home;