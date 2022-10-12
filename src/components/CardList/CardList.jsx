import CardItem from '../CardItem/CardItem';
import styles from './CardList.module.scss';

const CardList = ({ cards, deleteCard }) => {
    return (
        <div className={styles.cardlist}>
            <div className={styles.cardlist__inner}>
                {
                    !!cards.length && (
                        cards.map((card) => (
                            <CardItem card={card} key={card} deleteCard={deleteCard} />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default CardList;
