import logo from './logo.svg';
import './App.css';
import {  Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import News from './News/News';

function App() {
  const [news , setNews]= useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=d30e84254dfd4856b55ed35f874e9c5a')
    .then(res =>res.json())
    .then(data => setNews(data.articles));
  },[])
  return (
    <div className="App">
     <Row xs={1} md={3} className="g-4">
  {
    news.map(nw =>  <News news= {nw} ></News>)
  }
</Row>
    </div>
  );
}

export default App;
