import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import { FaTrash } from 'react-icons/fa';
import Like from './common/like';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  componentDidUpdate() {
    console.log(this.state.movies);
  }
  handleDelete = (movie) => {
    const { movies } = this.state;
    const moviesFiltered = movies.filter((m) => m !== movie);
    this.setState({ movies: moviesFiltered });
  };
  handleLike = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className='btn btn-danger btn-sm'>
                    <FaTrash />
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
