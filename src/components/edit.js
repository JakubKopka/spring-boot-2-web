import React, {useEffect, useState} from 'react';

import styled from "styled-components";
import Layout from "../layout/layout";
import axios from "axios";
import {BasicInput, TextBox} from "../layout/elements/inputs";
import {MenuButton} from "../layout/elements/buttons";

const Box = styled.form`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Row = styled.div`
margin: 10px;
`

const InfoLabel = styled.label`
`

const ImgPreview = styled.img`
border-radius: 10px;
height: 20vh;
`


const Edit = ({match}) => {

    const id = match.params.id;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [published, setPublished] = useState("");


    useEffect(() => {
        axios.get(`http://localhost:8080/news/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setDescription(res.data.description)
                setUrl(res.data.url)
                setAuthor(res.data.author)
                setImage(res.data.image)
                setPublished(res.data.published)
            })
    }, [])

    const saveItem = () => {
        axios.put(`http://localhost:8080/news`,
            {
                    "id": id,
                    "title": title,
                    "description": description,
                    "url": url,
                    "author": author,
                    "image": image,
                    "published": published
                }
        ).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.log(error.response)
            });
    }

    return (
        <Layout>
            <h3>Edit News </h3>
            <Box>
                <Row>
                    <InfoLabel>Title: </InfoLabel>
                    <BasicInput onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                                value={title} placeholder="Title" required/>
                </Row>

                <Row>
                    <InfoLabel>Description: </InfoLabel>
                    <TextBox onChange={(event) => {
                        setDescription(event.target.value)
                    }}
                             value={description} placeholder="Description" required/>
                </Row>

                <Row>
                    <InfoLabel>Url: </InfoLabel>
                    <BasicInput onChange={(event) => {
                        setUrl(event.target.value)
                    }}
                                value={url} placeholder="Url" required/>
                </Row>

                <Row>
                    <InfoLabel>Author: </InfoLabel>
                    <BasicInput onChange={(event) => {
                        setAuthor(event.target.value)
                    }}
                                value={author} placeholder="Author" required/>
                </Row>

                <Row>
                    <InfoLabel>Image url: </InfoLabel>
                    <BasicInput onChange={(event) => {
                        setImage(event.target.value)
                    }}
                                value={image} placeholder="Image url" required/>
                </Row>

                <Row>
                    <ImgPreview src={image}/>
                </Row>

                <Row>
                    <InfoLabel>Published: </InfoLabel>
                    <BasicInput onChange={(event) => {
                        setPublished(event.target.value)
                    }}
                                value={published} placeholder="Published" required/>
                </Row>

                <MenuButton onClick={saveItem}>Save</MenuButton>
            </Box>
        </Layout>
    )
}

export default Edit;
