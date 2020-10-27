import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1rem;
    margin: 0 auto;
    width: 90vw;
    height: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.primaryColor ? props.primaryColor : "purple"};
`;

const ChildWrapper = styled.div`
    padding: 1rem;
    width: 50%;
    height: 100%;
    margin: 0 auto;
`;

const Heading = styled.h1`
    font-family: 'Kaushan Script', cursive;
    font-size: 5em;
    color: ${props => props.headingColor}
`;

const Subheading = styled.h3`
    margin-top: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: ${props => props.subheadingColor}
`;

const Img = styled.img`
    width: 400px;
    height: 400px;
    src: ${props => props.imgSrc}
`;


const Jumbotron = (props) => {
    let { primaryColor, heading, headingColor, subheading, subheadingColor, imageMode, imgSrc } = props;
    imageMode = imageMode === null || imageMode === undefined ? "right" : imageMode;
    return(
        <Wrapper primaryColor={primaryColor}>
            {imageMode === "left" ? <ChildWrapper>
                <Img imgSrc={imgSrc} />
            </ChildWrapper> : null}
            <ChildWrapper>
                <Heading headingColor={headingColor}>{heading}</Heading>
                <Subheading subheadingColor={subheadingColor}>{subheading}</Subheading>
            </ChildWrapper>
            {imageMode === "right" ? <ChildWrapper>
                <Img imgSrc={imgSrc} />
            </ChildWrapper> : null}
        </Wrapper>
    );
};


export default Jumbotron;