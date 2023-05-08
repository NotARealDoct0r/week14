// importing all the necessary React elements / components
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';
import MovieListContainer from './MovieListContainer';

// rendering ("displaying to the HTML using React")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MovieListContainer />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();