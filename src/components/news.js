import {EditButton, MenuButton} from "../layout/elements/buttons";

import styled from "styled-components";


const Wrapper = styled.div`
width: 100%;
min-height: 100px;
display: grid;
grid-template-columns: 2fr 8fr;
column-gap: 15px;
//border-bottom: 1px solid black;
margin: 20px 0;
`

const NewsImg = styled.img`
 max-width: 100%;
 border-radius: 10px;
 margin-top: 25px;
`

const Content= styled.div`

`

const Description = styled.div`
font-size: 0.9rem;
`

const Title = styled.div`
font-weight: bold;
margin: 10px 0;
`
const Published = styled.div`
font-style: italic;
font-weight: lighter;
font-size: 0.8rem;
text-align: right;
`

const Panel = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const News = (props) => {

    return (
        <Wrapper>
            <NewsImg src={props.image}/>
            <Content>
                <Published>{props.published} by {props.author}</Published>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <Panel>
                    <a href={props.url}><MenuButton>View</MenuButton></a>
                    <a href={`/${props.id}`}><EditButton>Edit</EditButton></a>
                </Panel>
            </Content>
        </Wrapper>
    )
}

export default News;
