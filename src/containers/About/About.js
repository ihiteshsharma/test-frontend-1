import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 2%;
    width: fit-content;
    height: fit-content;
`;

const Separator = styled.div`
    height: 3px;
    width: 90vw;
    background-color: #000;
    margin: 1% 0;
`;

const AboutHeading = styled.h3`
    font-weight: 600;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
`;

const AboutDescription = styled.p`
    font-family: 'Montserrat', sans-serif;
`;


const About = (props) => {
    return(
        <Wrapper>
            <Separator />
            <AboutHeading>About Demo Group</AboutHeading>
            <AboutDescription>Magna labore sit in aliqua labore dolore tempor non consectetur ullamco excepteur nisi pariatur. Culpa reprehenderit sit irure fugiat aute dolore. Exercitation ipsum aliquip sint anim dolor adipisicing cupidatat culpa laborum est.
            Duis amet ad consequat cupidatat culpa cupidatat sit pariatur et elit do labore officia. Deserunt veniam adipisicing et nulla pariatur. Incididunt elit dolor eiusmod eu nisi ut amet quis. Consequat ullamco deserunt proident nostrud qui laborum. Quis minim aliquip proident sit. Esse minim sunt in minim Lorem aute incididunt voluptate laboris.</AboutDescription>
            <AboutDescription>
            Velit mollit magna commodo ad veniam minim proident consequat elit commodo consequat. Incididunt occaecat ullamco dolore non. Nulla dolor cupidatat eiusmod nisi exercitation anim laborum do magna tempor aliqua. Amet tempor esse nisi enim excepteur. Lorem cillum officia ut veniam aute ullamco.

            Anim eiusmod cillum labore id reprehenderit voluptate labore pariatur aliquip mollit. Sit ex minim laborum laboris sit exercitation sit ad ex deserunt. Esse laboris nostrud deserunt consequat ullamco est eu.
            </AboutDescription>
            <Separator />
        </Wrapper>
    )
}

export default About;