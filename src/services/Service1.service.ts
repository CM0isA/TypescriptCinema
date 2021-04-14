import movies from '../data/movies.json';

export class Service1 {
    /**
     * getMovies
     * TODO: define and specify a return type. Normally, typescript will infere it
     * but for the purposes of this exercise, let's specify it 
     */
    public getMovies() {
        console.log(`Retrieving movies data: ${JSON.stringify(movies)}`);
        return movies;
    }
}