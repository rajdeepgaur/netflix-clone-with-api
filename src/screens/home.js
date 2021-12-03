import React from 'react';
import './home.css';
import Nav from '../components/nav/nav';
import Banner from '../components/banner/banner';
import Row from '../components/row/row';
import requests from '../requests';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row title="NETFLIX ORIGINALS" 
            fetchUrl={requests.fetchNetflixOriginals} 
            isLargeRow /> 
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> 
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen;
