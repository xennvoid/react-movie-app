export interface MovieResponse {
    dates?: Dates;
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Movie {
    poster_path: string;
    adult?: boolean;
    overview: string;
    release_date?: string;
    genre_ids: number[];
    id: number;
    original_title?: string;
    original_language: string;
    title?: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video?: boolean;
    vote_average: number;
    first_air_date?: string;
    origin_country?: string[];
    name?: string;
    original_name?: string;
}

export interface Dates {
    maximum: string;
    minimum: string;
}