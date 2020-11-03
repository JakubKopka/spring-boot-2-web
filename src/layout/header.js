import React from 'react';
import styled from 'styled-components'
import {MenuButton} from "./elements/buttons";
import {
    Link
} from "react-router-dom";


const Wrapper = styled.div`
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
//border-bottom: 1px solid rgb(224 223 223);
`

const Logo = styled.img`
width: 80px;
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
            <Logo src="https://www.flaticon.com/svg/static/icons/svg/259/259500.svg"/>
                <h1>myNote.</h1>
            </>
            <Menu>
                <ItemList><Link to={'/'}><MenuButton>home</MenuButton></Link></ItemList>
                <ItemList><Link to={'/add'}><MenuButton>add note</MenuButton></Link></ItemList>
            </Menu>
        </Wrapper>
    )
}

export default Header;