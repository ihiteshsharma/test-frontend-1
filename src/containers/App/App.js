import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import logo from '../../assets/imgs/placeholderLogo.png';
import JumbotronGroup from '../JumbotronGroup/JumbotronGroup';
import NutritionalFacts from '../NutritionalFacts/NutritionalFacts';
import About from '../About/About';


const Wrapper = styled.div`
    height: auto;
    border: 3px solid black;
    padding: 1rem 0;
    margin: 0.1rem;
    border-radius: 30px;
    background-color: #fff;
`;

const App = (props) => {
    return(
        <Wrapper>
            <Header 
            logoSrc={logo}
            logoAlt="Logo Img"
            brandName="Healthy Fruits"
            tagLine="Delivering freshness with love"
            />
            <JumbotronGroup />
            <NutritionalFacts />
            <About />
        </Wrapper>
    )
}

export default App;