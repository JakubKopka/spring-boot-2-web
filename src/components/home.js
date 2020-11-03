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

    return (
        <Layout>
            <Wrapper>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
            </Wrapper>
        </Layout>
    )
}

export default Home;