import React, { useState } from 'react';

function Payment() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter the amount");
    } else {
      var options = {
        key: "rzp_test_BrZBtFrjCgrfzH",
        key_secret: "ak36iX8O2bI5FkQtLObyCZ3F",
        amount: amount * 100,
        currency: "INR",
        name: "COURSE_COMPASS",
        description: "For testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "AjithKumar",
          email: "akjstyles003@gmail.com",
          contact: "9025453480"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#000000"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Secure Payment Gateway</h2>
      <p className="text-lg text-gray-700 mb-4 text-center">Make a secure payment with Razorpay</p>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
        <input
          id="amount"
          type="number"
          placeholder="Enter Amount"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Submit
        </button>
      </div>
      <p className="text-sm text-gray-500">Powered by Razorpay</p>
    </div>
  );
}

export default Payment;
