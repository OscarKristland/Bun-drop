import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Modal from 'react-modal';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [adress, setAdress] = useState('');
  const [housenumber, setHouseNumber] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [Bankcard, setBankcard] = useState('');
  const [CCV, setCCV] = useState('');
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handleSetName = (event) => {
    setName(event.target.value)
  };
  const handleSetCity = (event) => {
    setCity(event.target.value)
  };
  const handleSetAdress = (event) => {
    setAdress(event.target.value)
  };
  const handleSetHouseNumber = (value) => {
    setHouseNumber(value)
  };
  const handleSetBankcard = (value) => {
    setBankcard(value)
  };
  const handleSetPhoneNumber = (value) => {
    setPhonenumber(value)
  };
  const handleSetCCV = (value) => {
    setCCV(value)
  };
  const getReceipt = () => {
    console.log(`Receipt:\nName: ${name}\nAddress: ${adress}\nCity: ${city}\nHousenumber: ${housenumber}`);

    setShowConfirmation(true);

    const minTime = 10 * 60 * 1000;
    const maxTime = 60 * 60 * 2000;
    const randomDeliveryTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;

    setTimeout(() => {
      setShowConfirmation(false);
    }, randomDeliveryTime);

  };

  const isFormValid = name && (paymentMethod === 'Swish' ? phonenumber : Bankcard && CCV);

  //loading the storage and then showing price for all the items from the basket

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


  return (
    <div className="payment-box">
      <form className="payment-form">
        <div>
          <div>
            <input className="payment-box-input" placeholder='Namn' value={name} onChange={handleSetName} style={name ? {} : { border: '1px solid red' }}></input>
            <input className="payment-box-input" placeholder='Stad' value={city} onChange={handleSetCity} style={city ? {} : { border: '1px solid red' }}></input>
            <input className="payment-box-input" placeholder='Adress' value={adress} onChange={handleSetAdress} style={adress ? {} : { border: '1px solid red' }}></input>
            <input className="payment-box-input" placeholder='Husnummer' value={housenumber} onChange={(e) => {
                  const numericValue = e.target.value.replace(/\D/g, '');
                  handleSetHouseNumber(numericValue);}} 
                  style={housenumber ? {} : { border: '1px solid red' }} maxLength={5}>
            </input>
          </div>
          <label>
            <input
              type="radio"
              value="Swish"
              checked={paymentMethod === 'Swish'}
              onChange={handlePaymentMethodChange}
            />
            Swish
          </label>
          <label>
            <input
              type="radio"
              value="Bankkort"
              checked={paymentMethod === 'Bankkort'}
              onChange={handlePaymentMethodChange}
            />
            Bankkort
          </label>
          <div>
            {paymentMethod === 'Swish' && (
              <div>
                {/* phone */}
                <input className="payment-box-input" placeholder='Telefon' value={phonenumber} onChange={(e) => {
                  const numericValue = e.target.value.replace(/\D/g, '');
                  handleSetPhoneNumber(numericValue);}}
                  maxLength={10}
                  style={phonenumber ? {} : { border: '1px solid red' }}>
                </input>
              </div>
            )}
            {paymentMethod === 'Bankkort' && (
              <div>
                {/* bankcard */}
                <input className="payment-box-input" placeholder='Bankkort' value={Bankcard} onChange={(e) => {
                  const numericValue = e.target.value.replace(/\D/g, '');
                  handleSetBankcard(numericValue);}}
                  maxLength={16}
                  style={Bankcard ? {} : { border: '1px solid red' }}>
                </input>
                <input className="payment-box-input" placeholder='CCV/CVV' value={CCV} onChange={(e) => {
                  const numericValue = e.target.value.replace(/\D/g, '');
                  handleSetCCV(numericValue);}}
                  maxLength={3}
                  style={CCV ? {} : { border: '1px solid red' }}>
                </input>
              </div>
            )}
          </div>
        </div>
        <h1>Kostnad: {totalPrice}</h1>
        <button className="snygg-knapp" onClick={getReceipt} disabled={!isFormValid}>Slutför Betalning</button>
        <Link to="/Basket">
                <button className="snygg-knapp">Tillbaka till Varukorg</button>
        </Link>
      </form>
    </div>
  );
}

export default Payment;