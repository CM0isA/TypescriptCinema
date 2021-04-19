import movies from '../data/movies.json';
import Seats  from '../data/Cinema.json';
import { Movie } from '../models';
import { Cinema } from '../models/cinema';
import { Rezervation } from '../models/rezervation'

export class Service1 {

    private _movieList: Movie[];
    private _todayMovies: Movie[] = [];
    private _cinema: Cinema[] = [];

    constructor() {
        this._movieList = movies;
        movies.forEach(movie => {
            let cinema: Cinema = {movieId: movie.id,
                                 freePlace: Seats[0].freeSeats,
                                 ocupiedPlace: Seats[0].occupiedSeats
                                };

            this._cinema.push(cinema);
        });
    }



    /**
     * getMovies
     * TODO: define and specify a return type. Normally, typescript will infere it
     * but for the purposes of this exercise, let's specify it 
     */
    public getMovies(): Movie[] {
        console.log(`Retrieving movies data: ${JSON.stringify(this._movieList)}`);
        return this._movieList;
    }



    public getTodayMovies(): Movie[] {
        let date = new Date;
        console.log(`Retrieving movies data: ${JSON.stringify(this._movieList)}`);
        this._movieList.forEach(movie => {
            let movieDate = new Date(movie.date);
            if(movieDate.getDate() == date.getDate() && movieDate.getFullYear() == date.getFullYear())
            {
                this._todayMovies.push(movie);
            }
        });
        return this._todayMovies;
    }


    public getSeat(id:number): number[] {
        console.log(`Retrieve Seats data: ${JSON.stringify(this._cinema)}`);
        
        
        console.log(id)
        let place:number[] = [];
        this._cinema.forEach(movie =>{
            if(id == movie.movieId)
            {
                place = movie.freePlace;
            }
        });

        return place;
    }

    /**
     * This is merely an example of how to edit the test data loaded in-memory
     * from the local .json file.
     * @returns The updated list of movies
     * TODO: remove this method. It was simply added for demonstrative purposes.
     */
    public deleteMovieExample() {
        console.log(`deleting last movie... ${JSON.stringify(movies)}`);
        // Remove the last movie from the in-memory collection
        movies.pop();
        return movies;
    }
}