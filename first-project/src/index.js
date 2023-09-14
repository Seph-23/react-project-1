import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import data from './data';

const cards = data.map(item => {
  return (
    <Card 
      key={item.id}
      item={item}
      starImg="./images/star.png"
    />
  );
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar img="./images/airbnb-logo.png" />
    <Hero img="./images/photogrid.png" />
    <section className="cards-list">
      {cards} 
    </section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
