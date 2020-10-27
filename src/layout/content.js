import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
background: #F8FAFC;
border-radius: 10px;
min-height: 30vh;
margin-top: 50px;
padding: 20px;
-webkit-box-shadow: 0px 0px 14px 0px rgba(181,181,181,1);
-moz-box-shadow: 0px 0px 14px 0px rgba(181,181,181,1);
box-shadow: 0px 0px 14px 0px rgba(181,181,181,1);
`

const Content = (props) => {

    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default Content;