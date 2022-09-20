import React from 'react';
import { Movie } from '../../types/movieTypes';
import styles from './MovieCard.module.scss';
import moviePlaceholderImg from '../../assets/images/movie-placeholder.png';
import { useNavigate } from 'react-router-dom';

interface Props {
    movie: Movie;
    movieType: string;
}


const MovieCard: React.FC<Props> = ({ movie, movieType }) => {

    const navigate = useNavigate();

    return (

        <article className={styles.movie_card} onClick={() => navigate("/" + movieType + "/" + movie.id.toString(), { state: movieType || 'movie' })}>
            <div>
                <img
                    src={
                        movie.poster_path
                            ? `${'https://image.tmdb.org/t/p/w500' + movie.poster_path}`
                            : moviePlaceholderImg
                    }
                    alt=""
                />
            </div>
            <div className={styles.description}>
                <div className={styles.year}>{movie?.release_date?.split('-')[0] || movie?.first_air_date?.split('-')[0]}</div>
                <div className={styles.title}>{movie?.title || movie?.name}</div>
            </div>
        </article >
    )
}

export default MovieCard