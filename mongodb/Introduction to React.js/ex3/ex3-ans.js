import ReactDOM from 'react-dom';
import React from 'react'

const elementStyle = {
    color: 'blue'
};

const planetElement = <h1 style={elementStyle}>Welcome to my Space Adventure!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    planetElement
);
