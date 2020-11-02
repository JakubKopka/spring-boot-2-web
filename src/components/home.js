import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout";
import axios from "axios";
import News from "./news";


const Home = () => {

    const [data, setData] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=> {
        axios.get(`http://localhost:8080/news`)
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            })
    }, [])
    return (
        <Layout>
            {!isLoading ? (
            data.map(element => (
                <News id= {element.id} image={element.image} title={element.title} description={element.description}
                      url={element.url} published={element.published} author={element.author}/>
                ))):(
                    <h3>Loading...</h3>
                )}
        </Layout>
    )
}

export default Home;
