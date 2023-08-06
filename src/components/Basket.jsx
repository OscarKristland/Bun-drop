// import BasketItem from './BasketItem';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import LocalStorage from './LocalStorage';

// function Basket() {
//   const [basket, setBasket] = LocalStorage();
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     const calculateTotalPrice = () => {
//       let total = 0;
//       basket.forEach((p) => {
//         total += p.price * p.quantity;
//       });
//       setTotalPrice(total);
//     };

//     calculateTotalPrice();
//   }, [basket]);

//   if (basket.length > 0) {
//     return (
//       <div>
//         <h1>Basket</h1>
//         <div className='product-container'>
//           {basket.map((p) => (
//             <BasketItem
//               key={p.name}
//               name={p.name}
//               price={p.price}
//               quantity={p.quantity}
//             />
//           ))}
//         </div>
//         <h1>Kostnad: {totalPrice}</h1>
//         <Link to='/Payment'>
//           <button>Betala</button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Basket</h1>
//       <p>Basket is empty</p>
//     </div>
//   );
// }

// export default Basket;

import BasketItem from './BasketItem';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LocalStorage from './LocalStorage';

function Basket() {
    const { addToLocalStorage, RemoveFromLocalStorage, DecreaseToLocalStorage, IncreaseToLocalStorage } = LocalStorage();
    const [basket, setBasket] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const basketList = localStorage.getItem("basketList");
        if (basketList) {
            setBasket(JSON.parse(basketList));
        }
    }, []);

    useEffect(() => {
        const calculateTotalPrice = () => {
            let total = 0;
            basket.forEach((p) => {
                total += p.price * p.quantity;
            });
            setTotalPrice(total);
        };

        calculateTotalPrice();
    }, [basket]);

    // Rest of your code for rendering the basket



  if (basket.length > 0) {
    return (
      <div>
        <h1>Basket</h1>
        <div className='product-container'>
          {basket.map((p) => (
            <BasketItem
              key={p.name}
              name={p.name}
              price={p.price}
              quantity={p.quantity}
            />
          ))}
        </div>
        <h1>Kostnad: {totalPrice}</h1>
        <Link to='/Payment'>
          <button>Betala</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Basket</h1>
      <p>Basket is empty</p>
    </div>
  );
}

export default Basket;
