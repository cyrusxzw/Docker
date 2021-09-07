import React, { useContext } from "react";
import Movie from './Movie';
import { MovieContext } from "./movieContext";


const MovieList = () => {
    const [movies] = useContext(MovieContext);

    return (
        <div>
            {
                movies.map((movie, index) => {
                    return (
                        <Movie key={index} movie={movie} />
                    )
                })
            }
        </div>
    )
}


export default MovieList;

