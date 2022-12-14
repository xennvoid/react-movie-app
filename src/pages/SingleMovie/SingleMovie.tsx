import { useEffect, useRef } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import BackButton from '../../components/UI/BackButton/BackButton';
import CardSkeleton from '../../components/UI/CardSkeleton/CardSkeleton';
import { useGetMovieByIdQuery } from '../../redux/services/movieApi';
import timeConvert from '../../utils/MinsToMinsAndHours';
import styles from './SingleMovie.module.scss';

const videoUrl = 'https://www.youtube.com/embed/';

const SingleMovie: React.FC = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const movieType = useLocation().state as string;

    const { data: movie, isLoading, isFetching } = useGetMovieByIdQuery({ movieType, movie_id: id || '' });

    const releaseDate = new Date(`${movie?.release_date || movie?.first_air_date}`);

    const trailer = movie?.videos.results.find(movie => movie.type.toLowerCase() === 'trailer');

    const animationBlockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        animationBlockRef.current?.classList.add(styles.animate);

        const timeout = setTimeout(() => animationBlockRef.current?.classList.remove(styles.animate), 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, [id])

    if (isLoading)
        return null;

    return (
        <div ref={animationBlockRef} className={styles.background} style={{ backgroundImage: `url(${'https://image.tmdb.org/t/p/original' + movie?.backdrop_path})` }}>
            <div className="container">
                <div className={styles.content}>
                    <BackButton onClick={() => navigate(-1)} />
                    <div className={styles.movie}>
                        <div className={styles.main_info}>
                            <div className={styles.title}>
                                {movie?.title || movie?.name}
                            </div>
                            <div className={styles.tagline}>
                                {movie?.tagline}
                            </div>
                            <div className={styles.runtime}>
                                <p className={styles.caption}>Runtime</p>
                                {
                                    (movie?.runtime && timeConvert(movie.runtime))
                                    || (movie?.episode_run_time && timeConvert(movie?.episode_run_time[0]))
                                }
                            </div>
                            <div className={styles.release}>
                                <p className={styles.caption}>Release date</p>
                                {releaseDate.toDateString()}
                            </div>
                            <div className={styles.rating}>
                                <p className={styles.caption}>Rating</p>
                                <div className={styles.rating_description}>
                                    <AiFillStar color="gold" size={32} />
                                    {movie?.vote_average ? Math.round(movie?.vote_average) : '? '}
                                    <span className={styles.caption}> / 10</span>
                                </div>
                            </div>
                            <div className={styles.genre}>
                                <p className={styles.caption}>Genre</p>
                                {movie?.genres.map(genre => genre.name).join(',')}
                            </div>
                            <div className={styles.description}>
                                <p className={styles.caption}>Description</p>
                                <span>{movie?.overview}</span>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={'https://image.tmdb.org/t/p/w500' + movie?.poster_path} alt="movie" />
                        </div>
                    </div>
                    {
                        movie?.videos?.results?.length !== 0
                        &&
                        (<div className={styles.trailer}>
                            <iframe
                                src={`${videoUrl + trailer?.key}`}
                                title={`${trailer?.name}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder={0}
                            >
                            </iframe>
                        </div>)
                    }
                    <div className={styles.recommendations}>
                        <h3 className={styles.recommendations_title}>
                            Similar movies
                        </h3>
                        {
                            isFetching || isLoading
                                ? <>{[...new Array(4)].map((_, i) => <CardSkeleton key={i} />)}</>
                                : <MovieList listName="Similar" url={`${movieType}/${id}/similar`} movieType={movieType} simplified />
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleMovie;