import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import { FaTrash } from 'react-icons/fa';
import Like from './common/like';
import Pagination from './pagination';
import { paginate } from './utils/paginate';

class Movies extends Component {
  state = {
    movies: getMovies(),
    currPage: 1,
    pageSize: 4,
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
  handleChange = (page) => {
    this.setState({ currPage: page });
  };
  handlePaginate = (items, currPage, pageSize) => {
    const index = (currPage - 1) * pageSize;
    console.log(index);
  };
  render() {
    const { movies: allMovies, pageSize, currPage } = this.state;

    if (allMovies.length === 0)
      return <p>There are no movies in the database.</p>;
    const movies = paginate(allMovies, currPage, pageSize);
    return (
      <>
        <p>Showing {allMovies.length} movies in the database.</p>
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
        <Pagination
          itemsCount={allMovies.length}
          pageSize={pageSize}
          currPage={currPage}
          onPageChange={this.handleChange}
        />
      </>
    );
  }
}

export default Movies;
