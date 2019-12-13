import React from 'react';
import { MoviesRepository } from '../api';
import {Movies} from './Movies';
import {Link} from 'react-router-dom';

export class MoviesDashboard extends React.Component {

    moviesRepository = new MoviesRepository();

  state = {
    movies: []
  }

  render() {
    return <>
    <div className="container">
        <Link to ="/new" className="btn btn-sm btn-success float-right">
            New Movie
        </Link>
      <h1 id="mainHeader">Movies Dashboard</h1>
      <div className="clear-fix"></div>
      <Movies movies={this.state.movies}
                    onDelete={x => this.onDelete(x)}
                    />
      </div>
    </>;
  }

  componentDidMount() {
    this.moviesRepository.getMovies()
      .then(movie => this.setState({movies: movie }));
  }


  onDelete(movieId) {
    if(window.confirm('Are you sure you want to DELETE???')) {
        this.moviesRepository.deleteMovie(movieId)
            .then(() => {
                this.setState(prevState => ({
                    message: 'Movie has been deleted',
                    movies: prevState.movies.filter(x => x.id !== movieId)
                }));
            });
    }
}

}