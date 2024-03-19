import React, { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'User 1', email: 'user1@example.com', role: 'User' },
  { id: 2, name: 'User 2', email: 'user2@example.com', role: 'User' },
  { id: 3, name: 'User 3', email: 'user3@example.com', role: 'User' }
];

function AdminDash() {
  const [users, setUsers] = useState(initialUsers);

  const updateUser = (id) => {
    const newName = prompt('Enter new user name:');
    const newEmail = prompt('Enter new email:');

    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          name: newName || user.name,
          email: newEmail || user.email
        };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
    }
  };

  const addUser = () => {
    const id = Math.max(...users.map(user => user.id)) + 1;
    const name = prompt('Enter user name:');
    const email = prompt('Enter email:');

    if (name && email) {
      const newUser = { id, name, email, role: 'User' };
      setUsers([...users, newUser]);
    }
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
              <td className="border border-gray-600 p-1">{user.id}</td>
              <td className="border p-1 border-gray-600">{user.name}</td>
              <td className="border p-1 border-gray-600">{user.email}</td>
              <td className="border p-1 border-gray-600">
                <button
                  className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => updateUser(user.id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="bg-black mt-5 text-white font-bold py-5 px-6 rounded my-4 mx-10 w-[20%]" onClick={addUser}>Add User</button>
    </div>
  );
}

export default AdminDash;
