import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout";
import axios from "axios";
import styled from 'styled-components'
import {BasicInput} from "../layout/elements/inputs";
import {MenuButton} from "../layout/elements/buttons";

const FilterTitle = styled.div`

`

const FilterBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid rgb(224 223 223);
`

const TableCars = styled.table`
width: 100%;
margin-top: 20px;
text-align: left;
`

const Home = () => {
    const [cars, setCars] = useState({})
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [loaded, setLoaded] = useState(false)

    const getDataFromAPI = (props) => {
        let url = "http://localhost:8080/cars"
        if(props){
            const {from, to} = props;
            url = `http://localhost:8080/cars/filter?from=${from ? from : ""}&to=${to ? to : ""}`
        }
        axios.get(url)
            .then(res => {
                setCars(res.data)
                console.log(url)
                console.log(res.data)
                setLoaded(true)
            })
    }

    useEffect(()=>{
        getDataFromAPI()
    },[])

    const getFilterData = () => {
        const props = {
            "from": from,
            "to": to
        }
        getDataFromAPI(props)
    }

    const resetFilter = () => {
        getDataFromAPI()
        setFrom("")
        setTo("")
    }


    return (
        <Layout>
            <FilterTitle>
                Production date
            </FilterTitle>
            <FilterBox>
                from <BasicInput value={from} onChange={(event) => setFrom(event.target.value)} max={to} type="date"/>
                to <BasicInput value={to} onChange={(event) => setTo(event.target.value)} min={from} type="date"/>
                <MenuButton onClick={getFilterData}>
                    Filter</MenuButton>
                <MenuButton onClick={resetFilter}>Reset</MenuButton>

            </FilterBox>
            {loaded ? (
                <TableCars>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mark</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Production date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cars.map(({id, mark, model, color, productionDate }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{mark}</td>
                            <td>{model}</td>
                            <td>{color}</td>
                            <td>{productionDate}</td>
                        </tr>
                        )
                    )}
                    </tbody>
                </TableCars>
            ) : (
                <>
                    Loading data...
                </>
            )}
        </Layout>
    )
}

export default Home;