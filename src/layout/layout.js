import React from 'react';
import styled from 'styled-components'
import Header from "./header";
import Content from "./content";


const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700;900&display=swap');
font-family: 'Lato', sans-serif;
width: 60vw;
background: rgb(255 255 255 1);
margin: 50px auto auto;
display: flex;
flex-direction: column;
`
const Layout = (props) => {

    return (
        <Wrapper>
            <Header/>
            <Content>
                {props.children}
            </Content>
        </Wrapper>
    )
}

export default Layout;