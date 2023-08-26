import React, { useEffect, useState } from 'react';
import LocalStorage from './LocalStorage';

function BasketItem({name, price, quantity, id}) {
    const {IncreaseToLocalStorage, DecreaseToLocalStorage, RemoveFromLocalStorage} = LocalStorage();


    function Increase(){
        IncreaseToLocalStorage(name);
    }

    function Decrease(){
        DecreaseToLocalStorage(name);
    }

    function Remove(name){
        RemoveFromLocalStorage();
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