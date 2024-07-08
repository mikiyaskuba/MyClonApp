import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import Footer from "../../components/Footer/Footer";
import requests from "../../components/utils/requests";


function Home() {
	return (
		<>
			<Header />
			<Banner />
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
			<Row
				title="Netflix Originals"
				fetchUrl={requests.fetchNetflixOriginals}
			/>
			<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
			<Footer />
		</>
	);
}

export default Home;
