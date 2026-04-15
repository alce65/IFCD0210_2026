import type { Genre } from "./genre.ts";

export interface Movie {
    id: number;
    title: string;
    year: number; 
    director: string;
    duration: number; // Duration in minutes
    poster: string; // URL to the movie poster
    rate: number; // Movie rating (e.g., from 0 to 10)
    genres?: Genre[]; // Array of genres associated with the movie
}
