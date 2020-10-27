import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 90vw;
    height: 50vh;
    border: 2px solid white;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: -1rem;
    padding: 2%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    background-color: #FFF;
    z-index: 999;
`;

const Separator = styled.div`
    height: 3px;
    background-color: #000;
    margin: 1% 0;
`;

const CardHeading = styled.span`
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
`;

const Card = (props, { children }) => {
    return(
        <Wrapper>
            <CardHeading>{props.cardHeading}</CardHeading>
            <Separator />
            {children}
        </Wrapper>
    );
}


export default Card;
