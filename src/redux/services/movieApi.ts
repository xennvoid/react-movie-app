import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieById } from '../../types/movieByIdType';
import { MovieResponse } from '../../types/movieTypes';


const apiKey = process.env.REACT_APP_API_KEY;

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints: (builder) => ({
        getMovieList: builder.query<MovieResponse, { url: string, page?: number }>({
            query: ({ url, page }) => ({
                url: `${url}`,
                params: {
                    api_key: apiKey,
                    page: page ? page : '1',
                },
                transformResponse: (response: MovieResponse) => response.results
            }),
        }),
        getMovieByName: builder.query<MovieResponse, string>({
            query: (query) => query.length > 0 ? `/search/movie?api_key=${apiKey}&language=en-US${query ? "&query=" + query : ""}` : '',
        }),
        getMovieById: builder.query<MovieById, { movieType: string, movie_id: string }>({
            query: ({ movieType, movie_id }) => `/${movieType}/${movie_id}?api_key=${apiKey}&language=en-US`,
        }),
    }),
})

export const { useGetMovieListQuery, useGetMovieByNameQuery, useGetMovieByIdQuery } = movieApi;