import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieById } from '../../types/movieByIdType';
import { MovieResponse } from '../../types/movieTypes';


export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        getMovieList: builder.query<MovieResponse, { url: string, page?: number }>({
            query: ({ url, page }) => `${url}?api_key=8c2c836e5c2e4fe7d6d0996bb92f2766&language=en-US${page ? "&page=" + page : ''}`,
        }),
        getMovieByName: builder.query<MovieResponse, string>({
            query: (query) => query.length > 0 ? `/search/movie?api_key=8c2c836e5c2e4fe7d6d0996bb92f2766&language=en-US${query ? "&query=" + query : ""}` : '',
        }),
        getMovieById: builder.query<MovieById, { movieType: string, movie_id: string }>({
            query: ({ movieType, movie_id }) => `/${movieType}/${movie_id}?api_key=8c2c836e5c2e4fe7d6d0996bb92f2766&language=en-US`,
        }),
    }),
})

export const { useGetMovieListQuery, useGetMovieByNameQuery, useGetMovieByIdQuery } = movieApi;