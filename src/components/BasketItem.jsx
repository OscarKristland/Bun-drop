import React, { Component, useState } from 'react';
import LocalStorage from './LocalStorage';

function BasketItem({name, price, quantity}) {
    const [item] = useState("");
    const {IncreaseToLocalStorage, DecreaseToLocalStorage, RemoveFromLocalStorage} = LocalStorage();

    function Increase(){
        IncreaseToLocalStorage();
    }

    function Decrease(){
        DecreaseToLocalStorage();
    }

    function Remove(){
        // RemoveFromLocalStorage();
        console.log('Remove button has been pressed');

        // const updatedBasket = basket.filter((product) => product.id !== id);

        // setBasket(updatedBasket);
        // localStorage.setItem('basketList', JSON.stringify(updatedBasket));
    }

    return (
        <div className='card'>
            <div>
                <h3>{name}</h3>
                <em>{price}</em>
                <p>Quantity: {quantity}</p>
                <button onClick={Increase}>INCREASE!!!!</button>
                <button onClick={Decrease}>DECREASE!!!!</button>
                <button onClick={Remove}>REMOVE!!</button>
            </div>
        </div>

    );
}

export default BasketItem;