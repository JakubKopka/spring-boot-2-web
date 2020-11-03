import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
margin-top: 50px;
padding: 20px;
`

const Content = (props) => {

    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default Content;