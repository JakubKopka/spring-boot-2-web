import React from 'react';
import styled from 'styled-components'
import {MenuButton} from "./elements/buttons";
import {
    Link
} from "react-router-dom";
import logo from "../logo.png"

const Wrapper = styled.div`
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Logo = styled.img`
height: 100px;
`
const Menu = styled.ul`
list-style: none;
display: flex;
justify-content: center;
`

const ItemList = styled.li`
margin: 20px;
`


const Header = () => {

    return (
        <Wrapper>
            <>
            <Logo src={logo}/>
                <h1>Latest news</h1>
            </>
            <Menu>
                <ItemList><Link to={'/'}><MenuButton>Home</MenuButton></Link></ItemList>
            </Menu>
        </Wrapper>
    )
}

export default Header;