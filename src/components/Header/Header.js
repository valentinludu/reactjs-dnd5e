import styles from './Header.module.css';

const Header = ({ screenTitle }) => {
    return (
        <header className={styles.header}>
            <h1>{screenTitle}</h1>
        </header>
    )
};

export default Header;