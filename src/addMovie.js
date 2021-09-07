import React, { useState, useContext } from 'react';
import { MovieContext } from './movieContext';

const AddMovie = () => {

    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState('');
    const [score, setScore] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleChange2 = (e) => {
        setScore(e.target.value);
    }

    const submitInput = () => {
        setMovies(pre => [
            ...pre,
            {
                title: name,
                score
            }
        ])
    }

    return (
        <div style={{ margin: 30 }}>
            <label>Name: </label>
            <input type="text" value={name} onChange={handleChange} />
            <label>Score: </label>
            <input type="text" value={score} onChange={handleChange2} />
            <button onClick={submitInput}>Submit</button>
        </div>
    )
}



export default AddMovie;