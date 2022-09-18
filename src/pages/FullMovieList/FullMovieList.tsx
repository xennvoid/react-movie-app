import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useGetMovieListQuery } from '../../redux/services/movieApi';
import styles from './FullMovieList.module.scss';
import Button from '../../components/UI/Button/Button';
import { Movie } from '../../types/movieTypes';
import CardSkeleton from '../../components/UI/CardSkeleton/CardSkeleton';

interface State {
    listName: string;
}

const FullMovieList: React.FC = () => {

    const state = useLocation().state as State;
    const { category, movietype } = useParams();
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [movies, setMovies] = useState<Movie[] | []>([])
    const { data, isLoading } = useGetMovieListQuery({ url: category + "/" + movietype, page: currentPage })

    console.log(category)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (data) {
            setMovies([...movies, ...data?.results]);
            setTotalPages(data.total_pages)
        }
    }, [data]);

    return (
        <div className="container">
            <h2 className={styles.title}>{state.listName}</h2>

            <div className={styles.movie_list}>
                {
                    isLoading
                        ?
                        <>
                            {[...new Array(10)].map((_, i) => <CardSkeleton key={i} />)}
                        </>
                        : movies.map(movie => <MovieCard key={movie.id} movie={movie} movieType={category} />)
                }
            </div>
            {
                currentPage < totalPages
                    ?
                    <div className={styles.load_more}>
                        <Button onClick={() => setCurrentPage(currentPage => currentPage + 1)}>LOAD MORE</Button>
                    </div>
                    : null
            }
        </div>
    )
}

export default FullMovieList;