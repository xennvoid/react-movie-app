import React, { useState, useEffect, useMemo } from 'react'
import NavigationLink from '../UI/NavLink/NavigationLink';
import logoSvg from '../../assets/icons/logo.svg';
import styles from './Header.module.scss';
import Search from '../UI/Search/Search';
import { useAppDispatch, useAppSelector } from '../../hooks/typedHooks';
import { changeSearchQuery } from '../../redux/slices/searchQuerySlice';
import debounce from 'lodash.debounce';
import { useLocation } from 'react-router-dom';

interface Props { }

const Header: React.FC<Props> = (props: Props) => {

    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState<string>("")
    const dispatch = useAppDispatch()

    const handleInputChange = (inputValue: string) => {
        setSearchQuery(inputValue);
        updateSearchValue(inputValue);
    }

    const updateSearchValue = React.useCallback(
        debounce((value: string) => {
            dispatch(changeSearchQuery(value))
        }, 1000),
        []
    );

    const navlinks = [
        { textContent: 'Movies', path: '/' },
        { textContent: 'TV Show', path: '/' },
        { textContent: 'Genres', path: '/' },
        { textContent: 'Web series', path: '/' },
    ]

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <NavigationLink to="/">
                    <img
                        className={styles.logo}
                        src={logoSvg}
                        alt=""
                        onClick={() => {
                            setSearchQuery("")
                            dispatch(changeSearchQuery(""))
                        }}
                    />
                </NavigationLink>
                <div className={styles.links}>
                    {navlinks.map((link, i) => <NavigationLink key={i} to={link.path}>{link.textContent}</NavigationLink>)}
                </div>
                {
                    location.pathname === '/'
                        ? <Search query={searchQuery} onChange={handleInputChange} />
                        : null
                }
                <div className={styles.login}>
                    <NavigationLink to="/">LOG IN</NavigationLink>
                </div>
            </div>
        </header >
    )
}

export default Header