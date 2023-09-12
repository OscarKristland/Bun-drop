import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function Product(){
    const {productId} = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
    fetch(`http://localhost:7000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {setProduct(data); console.log(data)});
    }, [productId]);

    return (
        <div className="product-detail product-background">
            <h1>{product.name}</h1>
            <img src={`/images/${product.image}`} alt="Loading" />
            <em>{product.price + "kr"}</em>
            <p>{product.description}</p>
            <Link to="/Menu">
                <button className="snygg-knapp">Back</button>
            </Link>
        </div>
    );
}

export default Product;