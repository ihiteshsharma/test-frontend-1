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
`;

const Separator = styled.div`
    height: 5px;
    background-color: #000;
    margin: 1% 0;
`;

const Card = (props) => {
    return(
        <Wrapper>
            CARD
            <Separator />
            Card
        </Wrapper>
    );
}


export default Card;
