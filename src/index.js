import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import logo from './assets/imgs/placeholderLogo.png';
import './index.css';
import reportWebVitals from './reportWebVitals';
import JumbotronGroup from './containers/JumbotronGroup/JumbotronGroup';
import Card from './components/Card/Card';

const App = styled.div`
    height: auto;
    border: 3px solid black;
    padding: 1rem 0;
    margin: 0.1rem;
    border-radius: 30px;
    background-color: #fff;
`;

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Header 
      logoSrc={logo}
      logoAlt="Logo Img"
      brandName="Healthy Fruits"
      tagLine="Delivering freshness with love"
      />
      <JumbotronGroup />
      <Card />
      
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
