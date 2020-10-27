import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';

let data = require('../../data.json').nutritionData;

const Separator = styled.div`
    height: 2px;
    background-color: #000;
    margin: 1% 0;
`;

const RowWrapper = styled.div`
    width: max-content;
    height: fit-content;
    margin-top: 1%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftText = styled.span`
    font-weight: ${props => props.level === 1 ? 600 : 300};
    margin-left: ${props => props.level === 2 ? "0.5%" : 0};
`;

const RightText = styled.span`
    flex-grow: 1;
`;



const NutritionalFacts = (props) => {
    return(
        <Card cardHeading="Nutritional Information">
            <RowWrapper>
                ROW
                <LeftText level={1}>Serving Size</LeftText>
                <RightText>{data.serving_size}</RightText>
            </RowWrapper>
            <Separator />
        </Card>
    )
}

export default NutritionalFacts;
