import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalStorage from "./LocalStorage";

function ProductCard({ name, price, id, quantity}) {
  const [item] = useState("");
  const {addToLocalStorage} = LocalStorage();

  function AddToBasket(){
    addToLocalStorage(name, price, id, quantity);
  }

  return (<div className="card">
    <Link to={`/${id}`}>
      <div>
        <h3>{name}</h3>
        <em>{price}</em>
        <img />
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
