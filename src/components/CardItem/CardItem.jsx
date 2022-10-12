import styles from './CardItem.module.scss';

const CardItem = ({ card, deleteCard }) => {
    return (
        <div className={styles.carditem}>
            <h4 className={styles.carditem__number}>{ card }</h4>
            <span
                className={styles.carditem__delete}
                onClick={() => deleteCard(card)}
            >+</span>
        </div>
    );
};

export default CardItem;
