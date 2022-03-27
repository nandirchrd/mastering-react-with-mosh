import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    const { movies } = this.state;
    const moviesFiltered = movies.filter((m) => m !== movie);
    this.setState({ movies: moviesFiltered });
  };
  render() {
    const { movies } = this.state;
    const length = movies.length;

    if (length === 0) return <p>There are no movies in the database.</p>;

    return (
      <>
        <p>Showing {length} movies in the database.</p>
        <table className='movies table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className='btn btn-danger btn-sm'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
