import styles from './Button.module.scss';

interface Props {
    children: React.ReactNode;
    onClick?: () => void
}

const Button: React.FC<Props> = ({ children, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button