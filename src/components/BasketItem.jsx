import React, { useEffect, useState } from 'react';
import LocalStorage from './LocalStorage';

function BasketItem({name, price, quantity}) {
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
        <div className="product">
            <div>
                <h3>{name}</h3>
                <em>{price}</em>
                <p>Quantity: {quantity}</p>
                <button class="snygg-knapp" onClick={Increase}>Öka</button>
                <button class="snygg-knapp" onClick={Decrease}>Minska</button>
                <button class="snygg-knapp" onClick={Remove}>Ta bort</button>
            </div>
        </div>

    );
}

export default BasketItem;