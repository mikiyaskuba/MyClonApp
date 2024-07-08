import React, { useState, useEffect } from "react";
import "./row.css";
import YouTube from "react-youtube";
import axios from "../utils/axios"; // Import the custom axios instance
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		async function fetchData() {
			try {
				const request = await axios.get(fetchUrl);
				console.log("Request Data:", request.data);
				setMovies(request.data.results || []);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, [fetchUrl]);

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row__posters d-flex">
				{movies.length > 0 ? (
					movies.map((movie) => (
						<img
							key={movie.id}
							onClick={() => handleClick(movie)}
							className={`row__poster ${isLargeRow && "row__posterLarge"}`}
							src={`https://image.tmdb.org/t/p/original/${
								isLargeRow ? movie.poster_path : movie.backdrop_path
							}`}
							alt={movie.title}
						/>
					))
				) : (
					<p>No movies available</p>
				)}
			</div>
			{trailerUrl && (
				<div className="video__container">
					<button className="close__button" onClick={() => setTrailerUrl("")}>
						X
					</button>
					<YouTube videoId={trailerUrl} opts={opts} />
				</div>
			)}
		</div>
	);
};

export default Row;
