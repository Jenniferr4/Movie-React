import React from 'react';
import { MoviesRepository } from '../api';
import { Link, Redirect } from 'react-router-dom';

export class MovieEditor extends React.Component{

    moviesRepository = new MoviesRepository();  

    state = {
        title: '',
        director: '', 
        protagonist: '',
        year: '',
        review : ''
    };
   

    render(){
        return <>
            {this.state.redirect && <Redirect to="/" /> }
            <form className="container">
                <h1>Movie Editor</h1>
                <div className="form-group">
                    <label htmlFor="title">
                        Name
                    </label>
                    <input type="text"
                            id="title"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange= {e => this.setState({title: e.target.value} ) } 
                            />
                </div>

                <div className="form-group">
                    <label htmlFor="director">
                        director
                    </label>
                    <input type="text"
                            id="director"
                            name="director"
                            className="form-control"
                            value={this.state.director}
                            onChange= {e => this.setState({director: e.target.value} ) } />

                </div>
                
                <div className="form-group">
                    <label htmlFor="protagonist">
                        protagonist
                    </label>
                    <input type="text"
                            id="protagonist"
                            name="protagonist"
                            className="form-control"
                            value={this.state.protagonist}
                            onChange= {e => this.setState({protagonist: e.target.value} ) } />

                </div>

                <div className="form-group">
                    <label htmlFor="year">
                        year
                    </label>
                    <input type="text"
                            id="year"
                            name="year"
                            className="form-control"
                            value={this.state.year}
                            onChange= {e => this.setState({year: e.target.value} ) } />

                </div>

                <div className="form-group">
                    <label htmlFor="review">
                        review
                    </label>
                    <input type="text"
                            id="review"
                            name="review"
                            className="form-control"
                            value={this.state.review}
                            onChange= {e => this.setState({review: e.target.value} ) } />

                </div>               
                
               <div>
                    <button type="button"  className="btn btn-primary btn-lg btn-block" 
                    onClick={ e => this.onSubmit() }>

                        Save
                    </button>
                    <Link to="/"
                        className="btn btn-secondary btn-block"
                         >
                            Return to List
                    </Link>
                </div>

            </form>
        </>;
    }

    componentDidMount(){
        let movieId = this.props.match.params.movieId;
        if(movieId){
            this.moviesRepository.getMoviesById(movieId)
        .then(movie => this.setState(movie));
        }
        
    }
    

    onSubmit(){
        var onSaveComplete = () => this.setState({redirect: true});
        if(this.state.id){
            this.moviesRepository.updateMovie(this.state.id, this.state)
            .then(onSaveComplete);
        }else{
            this.moviesRepository.addMovie(this.state).then(onSaveComplete);
        }
    }


}
