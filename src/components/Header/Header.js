import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    width: inherit;
    height: 5vh;
    margin-left: 0.5%;
    margin-bottom: 1%;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Separator = styled.div`
    width: 2px;
    height: 5vh;
    background-color: #000;
    margin: 0 1.5rem;
`;

const LogoImage = styled.img`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50%;
`;

const BrandName = styled.h2`
    font-size: 1.5em;
    font-weight: 600;
`;

const Tagline = styled.h2`
    font-size: 1em;
    font-weight: 400;
`;

const Header = (props) => {
    let { logoSrc, logoAlt, brandName, tagLine } = props;
    return(
        <Wrapper>
            <LogoImage src={logoSrc} alt={logoAlt} />
            <Separator />
            <BrandName>{brandName}</BrandName>
            <Separator />
            <Tagline>{tagLine}</Tagline>
        </Wrapper>
    )
};  



export default Header;