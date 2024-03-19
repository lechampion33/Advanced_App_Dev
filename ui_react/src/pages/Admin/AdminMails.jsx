import React, { useState } from 'react';

function AdminMails() {
  const [mails, setMails] = useState([
    { id: 1, user: 'Alice Johnson', email: 'alice@example.com', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', reply: '', },
    { id: 2, user: 'Bob Brown', email: 'bob@example.com', message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', reply: '', },
    { id: 3, user: 'Charlie Davis', email: 'charlie@example.com', message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', reply: '', },
    { id: 4, user: 'David Evans', email: 'david@example.com', message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', reply: '', },
    { id: 5, user: 'Eva Martinez', email: 'eva@example.com', message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', reply: '', }
  ]);

  const deleteMail = (mailId) => {
    setMails(mails.filter((mail) => mail.id !== mailId));
  };

  return (
    <div className="flex flex-col w-screen">
      <h2 className="font-sans text-2xl font-bold p-8">Mail Details:</h2>
      <table className="border-collapse justify-center items-center ml-10 border w-[70%]">
        <thead>
          <tr>
            <th className="border p-1 border-gray-600">S.No</th>
            <th className="border p-1 border-gray-600">User</th>
            <th className="border p-1 border-gray-600">Mail ID</th>
            <th className="border p-1 border-gray-600">Message</th>
            <th className="border p-1 border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mails.map((mail, index) => (
            <tr key={mail.id}>
              <td className="border border-gray-600 p-1">{index + 1}</td>
              <td className="border p-1 border-gray-600">{mail.user}</td>
              <td className="border p-1 border-gray-600">{mail.email}</td>
              <td className="border p-1 border-gray-600">{mail.message}</td>
              <td className="border p-1 flex flex-row gap-3 border-gray-600">
                <button
                  className="bg-blue-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteMail(mail.id)}
                >
                  Replay
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteMail(mail.id)}
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

export default AdminMails;
