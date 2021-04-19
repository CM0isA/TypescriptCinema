import { Movie } from "./movie";

export interface Rezervation {
    rezervationid: number;
    movie: Movie;
    seat: number[];

}