import React, { Component } from 'react';
import { useState } from 'react';

function LocalStorage(){
    const [basket, setBasket] = useState([]);

    function addToLocalStorage(name, price, id, quantity){
        let basket = JSON.parse(localStorage.getItem("basketList")) || [];
        console.log(name, price, id, quantity);

        const existingProduct = basket.find((product) => product.id === id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } 
        else {
            basket.push({ id: id, name: name, price: price, quantity: 1 });
        }
        localStorage.setItem("basketList", JSON.stringify(basket))
    }

    function IncreaseToLocalStorage(name){
        console.log("Increase button has been pressed");
        let basket = JSON.parse(localStorage.getItem("basketList"));

        const existingProduct = basket.find((product) => product.name === name);
        if (existingProduct !== -1) {
            existingProduct.quantity += 1;
        }
        else {
            console.log("Product not found in basket.");
        }

        localStorage.setItem("basketList", JSON.stringify(basket))
        return basket;
    }

    function DecreaseToLocalStorage(name){
        console.log("Decrease button has been pressed");
        let basket = JSON.parse(localStorage.getItem("basketList")) || [];


        const existingProduct = basket.find((product) => product.name === name);
        if (existingProduct) {
            if (existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            } 
            else {
                // Ta bort om 0
                const productIndex = basket.indexOf(existingProduct);
                if (productIndex !== -1) {
                    basket.splice(productIndex, 1);
                }
            }   
        }

        localStorage.setItem("basketList", JSON.stringify(basket))
        return basket;
    }

    function RemoveFromLocalStorage(name){
        console.log("Remove button has been pressed")
        let basket = JSON.parse(localStorage.getItem("basketList")) || [];

        const existingProduct = basket.find((product) => product.name === name);
        const productIndex = basket.indexOf(existingProduct);
            if (productIndex !== 0) {
                basket.splice(productIndex, 1);
            }
        localStorage.setItem("basketList", JSON.stringify(basket))
    }

    return { addToLocalStorage, RemoveFromLocalStorage, DecreaseToLocalStorage, IncreaseToLocalStorage};
}


export default LocalStorage;