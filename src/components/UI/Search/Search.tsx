import React, { useRef } from 'react';
import styles from './Search.module.scss';
import { BsSearch } from 'react-icons/bs';

interface Props {
    query: string;
    onChange: (query: string) => void;
}

const Search: React.FC<Props> = ({ query, onChange }) => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className={styles.search}>
            <input ref={inputRef} type="text" value={query} onChange={(e) => onChange(e.target.value)} />
            <BsSearch color="#FFF" size={20} onClick={() => inputRef?.current?.focus()} cursor="pointer" />
        </div>
    )
}

export default Search