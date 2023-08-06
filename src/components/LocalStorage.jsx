import React, { Component } from 'react';
import { useState } from 'react';

function LocalStorage(){
    const [basket, setBasket] = useState([]);

    function addToLocalStorage(name, price, id, quantity){
        let basket = localStorage.getItem("basketList");

        console.log(name, price, id, quantity);

        if(!basket){
            basket = [];
        }
        else {
            basket = JSON.parse(basket);
        }

        const existingProduct = basket.find((product) => product.id === id);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } 
        else {
            basket.push({ id: id, name: name, price: price, quantity: 1 });
        }
        localStorage.setItem("basketList", JSON.stringify(basket))
    }

    function IncreaseToLocalStorage(id){
        console.log("Increase button has been pressed");

    }

    function DecreaseToLocalStorage(id){
        console.log("Decrease button has been pressed");

    }

    function RemoveFromLocalStorage(id){
        console.log("Remove button has been pressed")
    }

    return { addToLocalStorage, RemoveFromLocalStorage, DecreaseToLocalStorage, IncreaseToLocalStorage};
}


export default LocalStorage;