import React, { useContext, useState } from 'react';
import { MovieContext } from './movieContext';


const Nav = (props) => {
    const [movies] = useContext(MovieContext);
    let [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(++count)
        console.log(count);
    }

    return (
        <div>
            <button onClick={handleClick}>click</button>
            <h1>{count}</h1>
            Total Movies Amount: {movies.length}
        </div>
    )
}


export default Nav;