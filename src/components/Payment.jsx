import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  const [totalPrice, setTotalPrice] = useState();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [receiptData, setReceiptData] = useState('');
  const [randomTime, setRandomTime] = useState ();

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

  const getRandomTime = () => {
    const minutes = Math.floor(Math.random() * (60 - 10 + 1) + 10);
    const seconds = Math.floor(Math.random() * (61));
    return `${minutes} minuter och ${seconds} sekunder`;
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    let receiptInfo = `Receipt:\nName: ${name}\nAddress: ${adress}\nCity: ${city}\nHousenumber: ${housenumber}`;
    const randomTime = getRandomTime();

    if(name.length <= 1){
      alert('Namn måste vara minst två bokstäver.');
      return;
    }

    if(adress.length <= 2){
      alert('adress måste vara minst tre bokstäver.');
      return;
    }
    if(city.length <= 2){
      alert('Stad måste vara minst tre bokstäver.');
      return;
    }

    if(housenumber.length <= 0){
      alert('husnummer måste vara minst en siffra.');
      return;
    }
    
    if(!paymentMethod){
      alert('Välj vilken betalningsmetod du vill använda.')
      return;
    }

    if (paymentMethod === 'Bankkort') {
      if (Bankcard.length !== 16) {
        alert('Bankkortsnummer måste vara 16 siffror.');
        return;
      }

      if (CCV.length !== 3) {
        alert('CCV/CVV måste vara 3 siffror.');
        return;
      }
    }
    
    if (paymentMethod === 'Swish') {
      if (phonenumber.length !== 10) {
        alert('Telefonnummer måste innehålla 10 siffror.');
        return;
      }
    }

    setReceiptData(receiptInfo);
    setRandomTime(randomTime);
    setIsPopupOpen(true);
  };
 
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
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Betalningsinformation</h2>
          <p>Vänligen fyll i alla rödmarkerade fällt.</p>
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
          {!paymentMethod && (
            <p style={{ color: 'red' }}>Vänligen välj en betalningsmetod</p>
          )}
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
        <button className="snygg-knapp" type="submit" disabled={!paymentMethod || !name || !city || !adress || !housenumber}>Slutför Betalning</button>
        <Link to="/Basket">
                <button className="snygg-knapp">Tillbaka till Varukorg</button>
        </Link>
      </form>
      {/* popup fönster */}
      <div className="popup" style={{ display: isPopupOpen ? 'block' : 'none' }}>
        <div className="popup-content">
          <h2>
            Tack för din beställning {name}! 
            Det väntas ta {getRandomTime(randomTime)}. 
            Leveransen sker till adressen {adress + " " + housenumber}, {city}.
          </h2>
          <Link to="/Menu">
                <button className="snygg-knapp" onClick={() => setIsPopupOpen(false)}>Stäng</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Payment;