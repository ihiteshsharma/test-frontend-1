import React from 'react';
import styled from 'styled-components';
// Green - 
const Wrapper = styled.div`
    padding: 2%;
    width: auto;
    height: max-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.primaryColor ? props.primaryColor : "purple"};
    border-bottom: 5px solid ${props => props.headingColor};
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const ChildWrapper = styled.div`
    width: 50%;
    height: fit-content;
    padding: 2%;
    margin-left: ${props => props.imageMode === "left" ? "2%" : 0};
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Heading = styled.h1`
    font-family: 'Kaushan Script', cursive;
    font-size: 5em;
    color: ${props => props.headingColor};
    padding: 0;
    margin: 0;

    @media only screen and (max-width: 768px) {
        font-size: 4em;
    }
`;

const Subheading = styled.h3`
    margin-top: 0.5em;
    font-size: 1em;
    color: ${props => props.subheadingColor};
    font-family: 'Segoe UI', sans-serif;
    font-weight: 300;
    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

const Img = styled.img`
    width: 50%;
    height: auto;

    @media only screen and (max-width: 768px) {
        width: 100%;
        order: 2;
    }
`;

const Jumbotron = (props) => {
    let { primaryColor, heading, headingColor, subheading, subheadingColor, imageMode, imgSrc } = props;
    return(
        <Wrapper primaryColor={primaryColor} headingColor={headingColor}>
            {imageMode === "left" ? <Img src={imgSrc} /> : null}
            <ChildWrapper imageMode={imageMode}>
                <Heading headingColor={headingColor}>{heading}</Heading>
                <Subheading subheadingColor={subheadingColor}>{subheading}</Subheading>
            </ChildWrapper>
            {imageMode === "right" ? <Img src={imgSrc} /> : null}
        </Wrapper>
    );
};


export default Jumbotron;