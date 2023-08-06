import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function Product(){
    const {productId} = useParams();
    const [product, setProduct] = useState({});

    function log(){
    };

    useEffect(() => {
    fetch(`http://localhost:7000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {setProduct(data); console.log(data)});
    }, [productId]);

    return (
        <div className="card">
            <img src={product.image}/>
            <h1>{product.name}</h1>
            <em>{product.price}</em>
            <p>{product.description}</p>
            <Link to="/Menu">
                <button>Back</button>
            </Link>
        </div>
    );
}

export default Product;