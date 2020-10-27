import React from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from './components/Jumbotron/Jumbotron';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = ({ children }) => {
  return(
    <div>
      {children}
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Jumbotron 
      primaryColor="blue"
      heading="Heading Text"
      subheading="subheading text spanning to multiple lines subheading text spanning to multiple lines subheading text spanning to multiple lines"
      headingColor="white"
      subheadingColor="aqua"
      imgSrc="https://unsplash.com/photos/FCrgmqqvl-w"/>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
