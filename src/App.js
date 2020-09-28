import React from 'react';
import './App.css';
import Banner from './Component/Banner';
import Header from './Component/Header';
import Row from './Component/Row';
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />

      <Row isLargeRow={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries Movie" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
