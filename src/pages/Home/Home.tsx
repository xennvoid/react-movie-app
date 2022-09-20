import MovieCard from "../../components/MovieCard/MovieCard";
import MovieList from "../../components/MovieList/MovieList";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { useAppSelector } from "../../hooks/typedHooks";
import { useGetMovieByNameQuery } from "../../redux/services/movieApi";
import styles from './Home.module.scss';

const Home: React.FC = () => {

    const { query } = useAppSelector(state => state.query);
    const { data: searchedMovieList } = useGetMovieByNameQuery(query);

    const movieLists = [
        { name: "Upcoming Movies", url: "movie/upcoming", type: 'movie' },
        { name: "Top Rated Movies", url: "movie/top_rated", type: 'movie' },
        { name: "Popular TV Shows", url: "tv/popular", type: 'tv' },
        { name: "Top Rated TV Shows", url: "tv/top_rated", type: 'tv' },
    ]

    return (
        <>
            <MovieSlider />
            <div className="home">
                <div className="container">
                    {
                        query.length > 0
                            ?
                            <div className={styles.movie_list}>
                                {
                                    searchedMovieList?.results.map(movie => <MovieCard key={movie.id} movie={movie} movieType="movie" />)
                                }
                            </div>
                            : movieLists.map((list, i) => <MovieList key={i} listName={list.name} url={list.url} movieType={list.type} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Home