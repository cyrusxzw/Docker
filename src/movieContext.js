import React, { createContext, useState } from 'react';


export const MovieContext = createContext();


export const MovieProvider = (props) => {
    const [movies, setMovies] = useState(
        [
            {
                title: "Harry Porter",
                score: 9.0
            },
            {
                title: "Gong Fu",
                score: 9.4
            },
            {
                title: "The Great Wall",
                score: 3.4
            }
        ]
    )

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

