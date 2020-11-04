import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout";
import axios from "axios";
import styled from 'styled-components'
import Note from "./note";

const Wrapper = styled.div`
display: grid;
max-width: 90vw;
grid-template-columns: 1fr 1fr 1fr;
row-gap: 30px;
column-gap: 30px;
justify-items: center;
`

const Home = () => {

    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)

    const getDataFromApi = () =>{
        const url = `http://localhost:8080/note`
        axios.get(url)
            .then(res => {
                setData(res.data)
                setLoaded(true)
            })
    }

    useEffect(() => {
        getDataFromApi()
    }, [])

    const removeElementFromData = (id) => {
        setData(data.filter(element => { return element.id !== id}))
    }

    return (
        <Layout>
            <Wrapper>
                {loaded ? (
                        data.map(({id, title, content, date}) => (
                            <Note key={id} id={id} title={title} content={content} date={date} removeElementFromData={removeElementFromData}/>
                        ))
                    ) : (
                        <h2>Loading...</h2>
                    )}
            </Wrapper>
        </Layout>
    )
}

export default Home;
