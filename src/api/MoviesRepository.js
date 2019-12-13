
import axios from 'axios';

export class MoviesRepository{
    
    url = "http://localhost:8080/movies";
    

    getMoviesById(id){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject();
                
        });
    });
    }


    getMovies() {
        return new Promise((resolve, reject) => {
          axios.get(`${this.url}`)
            .then(x => resolve(x.data))
            .catch(x => {
              alert(x);
              reject();
            });
        });
    }
    



    updateMovie(id, movie){
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${id}`, movie)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject();
            });
        });
    }


    addMovie(movie){
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}`, movie)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject();
            });
        });
    }

    deleteMovie(movieId){
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/${movieId}`)
            .then(x => resolve(x.data))
            .catch(x => alert(x));
        });
    }

}