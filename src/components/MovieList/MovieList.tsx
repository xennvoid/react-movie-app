import React, { useRef } from 'react';
import { useGetMovieListQuery } from '../../redux/services/movieApi';
import MovieCard from '../MovieCard/MovieCard';
import MovieCategoryTitle from '../MovieCategoryHeader/MovieCategoryTitle';
import styles from './MovieList.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import CardSkeleton from '../UI/CardSkeleton/CardSkeleton';

interface Props {
    listName: string;
    url: string;
    simplified?: boolean;
    movieType?: string;
}

const MovieList: React.FC<Props> = ({ listName, url, simplified = false, movieType }) => {

    const { data: movieList, isFetching } = useGetMovieListQuery({ url });

    const sliderBreakPoints = { 320: { slidesPerView: 1 }, 560: { slidesPerView: 2 }, 850: { slidesPerView: 3 }, 1000: { slidesPerView: 4 } };

    return (
        <div className={styles.container} >

            {
                simplified
                    ? null
                    : <MovieCategoryTitle listName={listName} to={'list/' + url} movieType={movieType || 'movie'} />
            }

            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                modules={[Pagination]}
                grabCursor={true}
                spaceBetween={50}
                slidesPerView={4}
                allowTouchMove
                breakpoints={sliderBreakPoints}
                style={{ padding: "1rem" }}
            >
                {
                    isFetching
                        ? <>{[...new Array(4)].map((_, i) => <CardSkeleton key={i} />)}</>
                        :
                        movieList?.results.map(movie =>
                            <SwiperSlide key={movie.id}>
                                <MovieCard movie={movie} movieType={movieType} />
                            </SwiperSlide>)
                }
            </Swiper >
        </div >
    )
}

export default MovieList