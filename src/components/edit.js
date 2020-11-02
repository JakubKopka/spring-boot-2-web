import React, {useEffect, useState} from 'react';

import styled from "styled-components";
import Layout from "../layout/layout";
import axios from "axios";
import {BasicInput} from "../layout/elements/inputs";
import {EditButton} from "../layout/elements/buttons";

const Box = styled.form`
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

const TextBox = styled.textarea`
border: none;
min-width: 800px;
margin: 20px 50px 20px 20px;
background: inherit;
border: 1px solid black;
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
                             value={description} placeholder="Title" required/>
                </Row>

                <Row>
                    <InfoLabel>Url: </InfoLabel>
                    <BasicInput onChange={(event) => {
                        setUrl(event.target.value)
                    }}
                                value={url} placeholder="Title" required/>
                </Row>

                <Row>
                    <InfoLabel>Author: </InfoLabel>
                    <BasicInput onChange={(event) => {
                        setAuthor(event.target.value)
                    }}
                                value={author} placeholder="Title" required/>
                </Row>

                <Row>
                    <InfoLabel>Image url: </InfoLabel>
                    <BasicInput onChange={(event) => {
                        setImage(event.target.value)
                    }}
                                value={image} placeholder="Title" required/>
                </Row>

                <Row>
                    <InfoLabel>Published: </InfoLabel>
                    <BasicInput onChange={(event) => {
                        setPublished(event.target.value)
                    }}
                                value={published} placeholder="Title" required/>
                </Row>

                <EditButton onClick={saveItem}>Save</EditButton>
            </Box>
        </Layout>
    )
}

export default Edit;
