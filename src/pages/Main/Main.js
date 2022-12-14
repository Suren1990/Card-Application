import { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Main.module.scss';

const Main = () => {
    const [cards, setCards] = useState([]);
    
    const cardsStorage = JSON.parse(localStorage.getItem("CardsList"));

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const createCard = () => {
        const uniqueId = generateRandomNumber(1, 5000);

        if (cards.indexOf(uniqueId) === -1) {
            setCards(currentArr => {
                const newCurrentArr = [...currentArr, uniqueId];
                localStorage.setItem("CardsList", JSON.stringify(newCurrentArr));
                return newCurrentArr;
            });
        }
    };

    const deleteCard = (cardId) => {
        if(cards.length) {
            setCards(currentArr => {
                const newCurrentArr = currentArr.filter((item) => item !== cardId);
                localStorage.setItem("CardsList", JSON.stringify(newCurrentArr));
                return newCurrentArr;
            })
        }
    }

    const sortCards = () => {
        if(cards.length) {
            setCards(currentArr => {
                const newCurrentArr = [...currentArr].sort((a, b) => a - b);
                localStorage.setItem("CardsList", JSON.stringify(newCurrentArr));
                return newCurrentArr;
            })
        }
    }

    useEffect(() => {
        if(cardsStorage) {
            setCards(cardsStorage); 
        }
    }, [])

    return (
        <div className={`${styles.main} container`}>
            <div className={styles.main__inner}>
                <Header createCard={createCard} sortCards={sortCards} />
                <CardList cards={cards} deleteCard={deleteCard} />
                <Footer />
            </div>
            <Sidebar />
        </div>
    );
};

export default Main;
