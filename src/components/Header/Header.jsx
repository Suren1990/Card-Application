import styles from './Header.module.scss';

const Header = ({ createCard, sortCards }) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__buttons__wrap}>
                <button
                    className={styles.header__button}
                    onClick={createCard}
                >Add Card</button>
                <button
                    className={styles.header__button}
                    onClick={sortCards}
                >Sort Cards</button>
            </div>
        </header>
    );
};

export default Header;
