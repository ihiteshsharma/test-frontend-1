import React from 'react';
import styled from 'styled-components';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

//use node to load json
let data = require('../../data.json').jumbotronData;

const Wrapper = styled.div`
/* add styles here later if required */
`;

const JumbotronGroup = (props) => {
    return(
        <Wrapper>
            {data.map(jumbotron => 
                <Jumbotron
                key={jumbotron.id} 
                primaryColor={jumbotron.primaryColor}
                heading={jumbotron.heading}
                subheading={jumbotron.subheading}
                headingColor={jumbotron.headingColor}
                subheadingColor={jumbotron.subheadingColor}
                imageMode={jumbotron.imageMode}
                imgSrc={jumbotron.imgSrc}/>
            )}
        </Wrapper>
    )
}


export default JumbotronGroup;