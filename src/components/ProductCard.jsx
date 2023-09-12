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

  return (<div className="product">
    <Link to={`/${id}`}>
      <div>
        <h3>{name}</h3>
        <img src={imagePath} alt="empty" />
        <em>{price + "kr"}</em>
      </div>
    </Link>
    <button className="snygg-knapp"
          value={item}
          onClick={AddToBasket}
          >Add!
    </button>
  </div>
  );
}

export default ProductCard;
