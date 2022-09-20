export interface MovieById {
    adult: boolean;
    backdrop_path: string;
    created_by?: Createdby[];
    episode_run_time?: number[];
    first_air_date?: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production?: boolean;
    languages?: string[];
    last_air_date?: string;
    last_episode_to_air?: Lastepisodetoair;
    name?: string;
    next_episode_to_air?: any;
    networks?: Network[];
    number_of_episodes?: number;
    number_of_seasons?: number;
    origin_country?: string[];
    original_language: string;
    original_name?: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Productioncompany[];
    production_countries: Productioncountry[];
    seasons?: Season[];
    spoken_languages: Spokenlanguage[];
    status: string;
    tagline: string;
    type?: string;
    vote_average: number;
    vote_count: number;
    videos: Videos;
    belongs_to_collection?: Belongstocollection;
    budget?: number;
    imdb_id?: string;
    original_title?: string;
    release_date?: string;
    revenue?: number;
    runtime?: number;
    title?: string;
    video?: boolean;
}

interface Belongstocollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

interface Videos {
    results: Result[];
}

interface Result {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

interface Spokenlanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

interface Season {
    air_date?: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path?: string;
    season_number: number;
}

interface Productioncountry {
    iso_3166_1: string;
    name: string;
}

interface Productioncompany {
    id: number;
    name: string;
    logo_path?: string | string;
    origin_country: string;
}

interface Network {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}

interface Lastepisodetoair {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

interface Genre {
    id: number;
    name: string;
}

interface Createdby {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
}