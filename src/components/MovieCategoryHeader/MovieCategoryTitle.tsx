import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MovieCategoryTitle.module.scss';

interface Props {
    listName: string;
    to?: string;
    movieType?: string;
}

const MovieCategoryTitle: React.FC<Props> = ({ listName, to, movieType }) => {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.category}>{listName}</div>

            <div className={styles.link} onClick={() => to ? navigate(to, { state: { listName } }) : ''}>
                View All
            </div>
        </div>
    )
}

export default MovieCategoryTitle