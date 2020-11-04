import React, { useState} from 'react';
import styled from 'styled-components'
import { MenuButton} from "../layout/elements/buttons";
import Layout from "../layout/layout";
import {ContentArea, Input} from "../layout/elements/inputs";
import axios from "axios";
import { useHistory } from "react-router"

const Wrapper = styled.div`
display: flex;
justify-content: center;
`
const NoteBox = styled.div`
background: #F8FAFC;
border-radius: 10px;
height: 100%;
width: 80%;
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
justify-content: center;
border-top: 1px solid rgb(224 223 223);
vertical-align: middle
`

const Image = styled.img`
max-height: 20px;
`

const Add = () => {
    let history = useHistory()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const addNewNote = () =>{
        const url = `http://localhost:8080/note/`
        axios.post(url, {
            "title": title,
            "content": content
        })
            .then(res => {
                history.push("/")
            })
    }

    return (
        <Layout>
            <Wrapper>
                <NoteBox>
                    <Top>
                        <Input value={title} onChange={(event) => setTitle(event.target.value)}
                               placeholder="Write title here"/>
                    </Top>
                    <Content>
                        <ContentArea value={content} onChange={(event) => setContent(event.target.value)}
                                     placeholder="Write some notes here..."/>

                    </Content>
                    <Bottom>
                        <MenuButton onClick={addNewNote}>
                            add note
                        </MenuButton>
                    </Bottom>
                </NoteBox>
            </Wrapper>
        </Layout>
    )
}

export default Add;
