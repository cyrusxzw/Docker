import './App.css';
import React from 'react';
import MovieList from './movieList';
import Nav from './Nav';
import { MovieProvider } from './movieContext';
import AddMovie from './addMovie';
import UseGraphql from './graphql';
import Cat from './HOC/cat.js'

import ErrorBoundary from './ErrorBoundary';



const App = () => {

  return (
    <div>

      <MovieProvider>
        <div style={{ margin: 50 }}>
          <UseGraphql />
          <ErrorBoundary>
            <Cat />
            <Nav />
          </ErrorBoundary>
          <AddMovie />
          <MovieList />
        </div>
      </MovieProvider>
    </div>
  )
}

export default App;