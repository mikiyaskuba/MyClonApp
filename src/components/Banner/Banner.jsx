import React, { useState, useEffect } from "react";
import "./banner.css";
import axios from "../utils/axios";
import requests from "../utils/requests";
const Banner = () => {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request?.data.results[
					Math.floor(Math.random() * request.data.results.length)
				]
			);
			return request;
		}

		fetchData();
	}, []);
	// console.log(movie);
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}
	return (
		<>
			{/* <div className="banner" style={{backgroundImage: `url("https://image.tmdb
        .org/t/p/original/${movie?.backdrop_path}")`}}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>

                    </div>
                </div>

            </div> */}
			<header
				className="row banner"
				style={{
					backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
					backgroundSize: "cover",
					backgroundPosition: "center center",
				}}
			>
				<div className="banner__contents">
					<h1 className="banner__title">
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
					<div className="banner__buttons">
						<button className="banner__button">Play</button>
						<button className="banner__button">My List</button>
					</div>
					<h1 className="banner-decription">
						{truncate(movie?.overview, 150)}
					</h1>
				</div>
				<div className="banner__fadeBottom" />
			</header>
		</>
	);
};

export default Banner;
