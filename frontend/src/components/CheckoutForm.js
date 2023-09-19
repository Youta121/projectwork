import React, { useState } from "react";
import axios from "axios";

const CheckoutForm = () => {
  const [selectedPack, setSelectedPack] = useState("standard");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handlePackChange = (e) => {
    setSelectedPack(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // send payment info to server to process payment and update user status
      const response = await axios.post("/api/payments", {
        pack: selectedPack,
        cardNumber,
        expiryDate,
        cvc,
      });

      // handle success response
    } catch (error) {
      // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="pack-select">Choose your pack:</label>
        <select id="pack-select" value={selectedPack} onChange={handlePackChange}>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <div>
        <label htmlFor="card-number-input">Card number:</label>
        <input id="card-number-input" type="text" value={cardNumber} onChange={handleCardNumberChange} />
      </div>
      <div>
        <label htmlFor="expiry-date-input">Expiry date:</label>
        <input id="expiry-date-input" type="text" value={expiryDate} onChange={handleExpiryDateChange} />
      </div>
      <div>
        <label htmlFor="cvc-input">CVC:</label>
        <input id="cvc-input" type="text" value={cvc} onChange={handleCvcChange} />
      </div>
      <button type="submit">Pay</button>
    </form>
  );
};

export default CheckoutForm;
