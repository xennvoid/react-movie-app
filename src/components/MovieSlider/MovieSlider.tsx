import React from 'react';
import { useGetMovieListQuery } from '../../redux/services/movieApi';
import styles from './MovieSlider.module.scss';
import { AiFillStar } from 'react-icons/ai';

import './Swiper.scss';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';

const MovieSlider: React.FC = () => {

    const navigate = useNavigate();

    const { data: moviesList } = useGetMovieListQuery({ url: 'movie/popular' });

    const movieType = 'movie';

    return (
        <div className={styles.container}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                speed={2000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="myswiper"
            >
                {moviesList?.results.slice(0, 4).map(movie =>
                    <SwiperSlide key={movie.id}>
                        <div className={styles.slider_image} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
                            <div className={styles.description}>
                                <p className={styles.title}>
                                    {movie.original_title}
                                </p>
                                <p className={styles.rating}>
                                    <AiFillStar color="gold" size={30} />
                                    {movie.vote_average} / 10
                                </p>
                                <p className={styles.overview}>
                                    {movie.overview}
                                </p>
                                <Button onClick={() => navigate("/" + movieType + "/" + movie.id.toString(), { state: movieType })}>
                                    More info
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default MovieSlider;