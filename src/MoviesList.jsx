import React, {useState} from "react";
import './movielist.css';

function MoviesList(){
    const [movies, setMovies] = useState([
        {
            title: "La La Land",
            director: "Damien Chazelle",
            genre: "Musical",
            description: "La La Land is a 2016 musical romance about a jazz musician and an aspiring actress pursuing their dreams in Los Angeles. Known for its vibrant visuals and original music, the film combines romance, drama, and classic Hollywood charm.",
            poster: "https://i5.walmartimages.com/asr/20f02811-01b4-4aea-9bb2-a79942bd2642_1.856c035d66f8fd216f6d933259bc3dfb.jpeg",
            showDetails: false //initialize the showDetails so each movie can keep track of its own state
        },
        {
            title: "Inglourious Basterds",
            director: "Quentin Tarantino",
            genre: "War",
            description: "Inglourious Basterds is a 2009 war film by Quentin Tarantino. It blends drama and dark comedy, featuring a group of Jewish-American soldiers on a mission to kill Nazis and a French Jewish woman seeking revenge. The film is known for its sharp dialogue and stylized violence.",
            poster: "https://m.media-amazon.com/images/I/61PXdxTJGPL._AC_UF894,1000_QL80_.jpg",
            showDetails: false
        },
        {
            title: "The Thing",
            director: "John Carpenter",
            genre: "Horror",
            description: "The Thing (1982) is a sci-fi horror film about researchers in Antarctica battling a shape-shifting alien that can mimic any creature. The film is praised for its suspense and practical effects.",
            poster: "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
            showDetails: false
        },
        {
            title: "Interstellar",
            director: "Christopher Nolan",
            genre: "SciFi",
            description: "Interstellar (2014) is a sci-fi film about astronauts traveling through a wormhole to find a new home for humanity as Earth deteriorates. It combines space exploration with themes of love and survival.",
            poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            showDetails: false
        },
        {
            title: "Donnie Darko",
            director: "Richard Kelly",
            genre: "Thriller",
            description: "Donnie Darko (2001) is a psychological thriller and sci-fi film about a troubled teen who sees a mysterious rabbit figure and starts questioning reality and time.",
            poster: "https://ih1.redbubble.net/image.2266753210.9722/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
            showDetails: false
        },
    ])

    // Function to toggle the display of movie details
    const toggleDetails = (index) => {
        const updatedMovies = movies.map((movie, i) => 
            i === index ? { ...movie, showDetails: !movie.showDetails } : movie
        );
        setMovies(updatedMovies);
    };

    // Function to remove a movie from the list
    const removeMovie = (index) => {
        const updatedMovies = movies.filter((_, i) => i !== index);
        setMovies(updatedMovies);
    };

    return (
        <ul>
            {movies.map((movie, index) => (
                <li key={index}>
                    <img src={movie.poster} alt={movie.title} className="movie-poster" />
                    <h2>{movie.title}</h2>
                    <button onClick={() => toggleDetails(index)}>
                        {movie.showDetails ? "Hide Details" : "Show Details"}
                    </button>
                    <button onClick={() => removeMovie(index)}>Remove</button>
                    {movie.showDetails && (
                        <div className="movie-details">
                            <p><strong>Director: </strong>{movie.director}</p>
                            <p><strong>Genre:</strong> {movie.genre}</p>
                            <p><strong>Description: </strong>{movie.description}</p>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}


export default MoviesList;