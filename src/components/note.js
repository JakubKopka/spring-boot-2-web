import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {BasicButton} from "../layout/elements/buttons";
import {Link} from "react-router-dom";

const Wrapper = styled.div`

`
const NoteBox = styled.div`
display: grid;
grid-template-rows: 40px 1fr 30px;
background: #F8FAFC;
border-radius: 10px;
height: 300px;
width: 250px;
border: 1px solid rgb(224 223 223);
//-webkit-box-shadow: 0px 0px 14px 0px rgba(181,181,181,1);
//-moz-box-shadow: 0px 0px 14px 0px rgba(181,181,181,1);
//box-shadow: 0px 0px 14px 0px rgba(181,181,181,1);
`
const Top = styled.div`
border-bottom: 1px solid rgb(224 223 223);
padding: 10px;
font-weight: bold;
`

const Content = styled.div`
padding: 10px;
font-size: 0.9rem;
overflow: auto;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
border-top: 1px solid rgb(224 223 223);
vertical-align: middle
`

const Image = styled.img`
max-height: 20px;
`

const Note = () => {

    return (
        <Wrapper>
            <NoteBox>
                <Top>
                    Lorem ipsum dolor sit amet
                </Top>
                <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Content>
                <Bottom>
                    <Link to={'/edit/1'}><BasicButton>
                        edit
                    </BasicButton>
                    </Link>
                    <Link to={'/delete/1'}><BasicButton>
                        delete
                    </BasicButton>
                    </Link>
                </Bottom>
            </NoteBox>
        </Wrapper>
    )
}

export default Note;