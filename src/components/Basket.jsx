import React, { useState, useEffect } from 'react';
import BasketItem from './BasketItem';
import { Link } from 'react-router-dom';
import LocalStorage from './LocalStorage';

function Basket() {
    const { DecreaseToLocalStorage, IncreaseToLocalStorage, RemoveFromLocalStorage } = LocalStorage();
    const [basket, setBasket] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const basketList = localStorage.getItem("basketList");
        if (basketList) {
            setBasket(JSON.parse(basketList));
        }
    }, [basket]);

    useEffect(() => {
        const calculateTotalPrice = () => {
            let total = 0;
            basket.forEach((p) => {
                total += p.price * p.quantity;
            });
            setTotalPrice(total);
        };

        calculateTotalPrice();
    }, [basket]);

    const canProceedToPayment = basket.length > 0;

    return (
        <div>
            {basket.length > 0 ? (
                <div className='product-container'>
                    {basket.map((p) => (
                        <BasketItem
                            key={p.name}
                            name={p.name}
                            price={p.price}
                            quantity={p.quantity}
                            IncreaseToLocalStorage={IncreaseToLocalStorage}
                            DecreaseToLocalStorage={DecreaseToLocalStorage}
                            RemoveFromLocalStorage={RemoveFromLocalStorage}
                        />
                    ))}
                </div>
            ) : (
                <p>Basket is empty</p>
            )}
            <div className='total-cost-box'>
                <h1>Kostnad: {totalPrice}</h1>
                <Link to='/Payment'>
                    <button className="snygg-knapp" disabled={!canProceedToPayment}>Betala</button>
                </Link>
            </div>
            
        </div>
    );
}

export default Basket;