import React, { useState } from 'react';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [Bankcard, setBankcard] = useState('');
  const [CCV, setCCV] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handleSetName = (event) => {
    setName(event.target.value)
  };
  const handleSetAdress = (event) => {
    setAdress(event.target.value)
  };
  const handleSetBankcard = (event) => {
    setBankcard(event.target.value)
  };
  const handleSetPhoneNumber = (event) => {
    setPhonenumber(event.target.value)
  };
  const handleSetCCV = (event) => {
    setCCV(event.target.value)
  };
  const getReceipt = () => {
    console.log("Hey");
    console.log(`Receipt:\nName: ${name}\nAddress: ${adress}`);
  };


  return (
    <div>
      <form>
        <div>
          <div>
            <input placeholder='Namn' value={name} onChange={handleSetName}></input>
            <input placeholder='Adress' value={adress} onChange={handleSetAdress}></input>
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
                {/* Form 1 with some fields */}
                <input placeholder='Telefon' value={phonenumber} onChange={handleSetPhoneNumber}></input>
              </div>
            )}
            {paymentMethod === 'Bankkort' && (
              <div>
                {/* Form 2 with some other fields */}
                <input placeholder='Bankkort' value={Bankcard} onChange={handleSetBankcard}></input>
                <input placeholder='CCV/CVV' value={CCV} onChange={handleSetCCV}></input>
              </div>
            )}
          </div>
        </div>
        <button onClick={getReceipt}>Slutför Betalning</button>
      </form>
    </div>
  );
}

export default Payment;

