import movies from '../data/movies.json';
import Seats  from '../data/Cinema.json';
import { Movie } from '../models';
import { Cinema } from '../models/cinema';
import { Rezervation } from '../models/rezervation'

export class Service1 {

    private _movieList: Movie[];
    private _todayMovies: Movie[] = [];
    private _cinema: Cinema[] = [];
    private _rezervations: Rezervation[] = [];

    constructor() {
        this._movieList = movies;
        movies.forEach(movie => {
            let cinema: Cinema = {  movieId: movie.id,
                                    place : Seats[0].seats,
                                    freePlace : Seats[0].freeSeats
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


    public getSeat(movieId:number): number[] {
        console.log(`Retrieve Seats data: ${JSON.stringify(this._cinema)}`);
        let places:number[] = [];

        for( let i = 0; i< this._cinema.length; i++)
        {
            if(this._cinema[i].movieId == movieId)
            {
                
                for( let j = 0; j< this._cinema[i].place.length; j++)
                {
                    
                    if(this._cinema[i].freePlace[j])
                    {
                        places.push(this._cinema[i].place[j]);
                    }
                }
                break;
            }
        }

        return places;
    }

    public reserveSeats(movieId:number,seats: number[]){
        let valid: boolean = true;

        for( let seat of seats)
        {
            if(this._cinema[movieId].freePlace[seat]==false)
            {
                valid = false;
            }
        }
        if(valid)
        {
            let rezervation:Rezervation = {
                rezervationid : this._rezervations.length,
                movieId : movieId,
                seat : seats
            }
            this._rezervations.push(rezervation)
            seats.forEach((index: number) => {
                this._cinema[movieId].freePlace[index-1] = false;
            });


            return rezervation.rezervationid;

        }
        else
            return "The given seats are already occupied";

    }

    public cancelRezervatiopn(rezervationId:number){
        let movieId = this._rezervations[rezervationId].movieId
        
        this._rezervations[rezervationId].seat.forEach(seat =>{
            this._cinema[movieId].freePlace[seat] = true;
        });

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