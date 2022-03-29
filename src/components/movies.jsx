import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { FaTrash } from 'react-icons/fa';
import Like from './common/like';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { paginate } from './utils/paginate';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currPage: 1,
    pageSize: 4,
    selectedGenre: null,
  };
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ name: 'All Movies' }, ...getGenres()],
    });
  }
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
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currPage: 1 });
  };
  render() {
    const {
      movies: allMovies,
      genres,
      pageSize,
      currPage,
      selectedGenre,
    } = this.state;

    if (allMovies.length === 0)
      return <p>There are no movies in the database.</p>;
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filteredMovies, currPage, pageSize);
    return (
      <>
        <div className='row'>
          <div className='col-3'>
            <ListGroup
              items={genres}
              selectedGenre={selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className='col'>
            <p>Showing {filteredMovies.length} movies in the database.</p>
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
              itemsCount={filteredMovies.length}
              pageSize={pageSize}
              currPage={currPage}
              onPageChange={this.handleChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
