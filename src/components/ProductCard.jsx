import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalStorage from "./LocalStorage";

function ProductCard({ name, price, id, quantity, image}) {
  const [item] = useState("");
  const {addToLocalStorage} = LocalStorage();
  const imagePath = `/images/${image}`;

  function AddToBasket(){
    addToLocalStorage(name, price, id, quantity);
  }

  return (<div className="card">
    <Link to={`/${id}`}>
      <div>
        <h3>{name}</h3>
        <em>{price}</em>
        <img src={imagePath} alt="empty" />
      </div>
    </Link>      
    <button
          value={item} 
          style={{width:"50px"}}
          onClick={AddToBasket}
          >Add!
    </button>
  </div>
  );
}

export default ProductCard;
