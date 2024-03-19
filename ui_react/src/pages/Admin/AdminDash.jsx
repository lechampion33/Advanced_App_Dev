import React, { useState } from 'react';
function AdminDash() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
    { id: 5, name: 'Eva Martinez', email: 'eva@example.com' },
    { id: 6, name: 'Michael Lee', email: 'michael@example.com' },
    { id: 7, name: 'Sarah Wilson', email: 'sarah@example.com' },
  ]);

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="flex flex-col w-screen">
      <h2 className="font-sans text-2xl font-bold p-8">Total Users List:</h2>
      <table className="border-collapse justify-center items-center ml-10 border w-[70%]">
        <thead>
          <tr>
            <th className="border p-1 border-gray-600">#</th>
            <th className="border p-1 border-gray-600">Name</th>
            <th className="border p-1 border-gray-600">Email</th>
            <th className="border p-1 border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="border border-gray-600 p-1">{index + 1}</td>
              <td className="border p-1 border-gray-600">{user.name}</td>
              <td className="border p-1 border-gray-600">{user.email}</td>
              <td className="border p-1 border-gray-600">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminDash
