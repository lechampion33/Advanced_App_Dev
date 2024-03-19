import React, { useState } from 'react';

function AdminPayment() {
    const [payments, setPayments] = useState([
        { id: 1, course: 'React Basics', user: 'John Doe', price: '$50', date: '2024-03-15' },
        { id: 2, course: 'Node.js Masterclass', user: 'Jane Smith', price: '$80', date: '2024-03-16' },
        { id: 3, course: 'Python Fundamentals', user: 'Alice Johnson', price: '$60', date: '2024-03-17' },
        { id: 4, course: 'JavaScript Advanced', user: 'Bob Brown', price: '$70', date: '2024-03-18' },
        { id: 5, course: 'HTML/CSS Crash Course', user: 'Eva Martinez', price: '$40', date: '2024-03-19' },
      ]);
    
      const deletePayment = (paymentId) => {
        setPayments(payments.filter((payment) => payment.id !== paymentId));
      };
    
      return (
        <div className="flex flex-col w-screen">
          <h2 className="font-sans text-2xl font-bold p-8">Payment Details:</h2>
          <table className="border-collapse justify-center items-center ml-10 border w-[70%]">
            <thead>
              <tr>
                <th className="border p-1 border-gray-600">S.No</th>
                <th className="border p-1 border-gray-600">Course</th>
                <th className="border p-1 border-gray-600">User</th>
                <th className="border p-1 border-gray-600">Price</th>
                <th className="border p-1 border-gray-600">Date</th>
                <th className="border p-1 border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment.id}>
                  <td className="border border-gray-600 p-1">{index + 1}</td>
                  <td className="border p-1 border-gray-600">{payment.course}</td>
                  <td className="border p-1 border-gray-600">{payment.user}</td>
                  <td className="border p-1 border-gray-600">{payment.price}</td>
                  <td className="border p-1 border-gray-600">{payment.date}</td>
                  <td className="border p-1 border-gray-600">
                    <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                      View
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => deletePayment(payment.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

export default AdminPayment
