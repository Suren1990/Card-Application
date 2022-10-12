import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__inner}>
                <p className={styles.sidebar__text}>
                    Press the "Add Card" button to add new card.
                </p>
                <p className={styles.sidebar__text}>
                    Use the "Sort Cards" button to sort the Cards by Increase.
                </p>
                <p className={styles.sidebar__text}>
                    Press an "X" iconon the top right to delete them.
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
