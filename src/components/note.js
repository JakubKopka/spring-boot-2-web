import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {BasicButton} from "../layout/elements/buttons";
import {Link} from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`

`
const NoteBox = styled.div`
display: grid;
grid-template-rows: 40px 1fr 30px;
background: #F8FAFC;
border-radius: 10px;
height: 300px;
min-width: 250px;
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

const Note = (props) => {

    const {id, title, content, date, removeElementFromData} = props

    const deleteNote = () => {
        const url = `http://localhost:8080/note/${id}`
        axios.delete(url)
            .then(res => {
                console.log(res)
            })
        removeElementFromData(id)
    }
    return (
        <Wrapper>
            <NoteBox>
                <Top>
                    {title}
                </Top>
                <Content>
                    {content}
                </Content>
                <Bottom>
                    <Link to={`/edit/${id}`}><BasicButton>
                        edit
                    </BasicButton>
                    </Link>
                    <BasicButton onClick={deleteNote}>
                        delete
                    </BasicButton>
                </Bottom>
            </NoteBox>
        </Wrapper>
    )
}

export default Note;
