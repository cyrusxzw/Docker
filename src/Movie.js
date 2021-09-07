import React from 'react';

const Movie = ({ movie }) => {

    return (
        <div><span>{movie.title}</span> <span>{movie.score}</span></div>
    )
}


export default Movie;