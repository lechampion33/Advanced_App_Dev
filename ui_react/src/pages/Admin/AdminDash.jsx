import React, { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'User 1', email: 'user1@example.com', },
  { id: 2, name: 'User 2', email: 'user2@example.com',  },
  { id: 3, name: 'User 3', email: 'user3@example.com',  },
];

function AdminDash() {
  const [users, setUsers] = useState(initialUsers);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updateName, setUpdateName] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };
  
  const openUpdateModal = (user) => {
    setSelectedUser(user);
    setUpdateName(user.name);
    setUpdateEmail(user.email);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setSelectedUser(null);
    setShowUpdateModal(false);
  };

  const addUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
  
    if (name && email) {
      const id = Math.max(...users.map(user => user.id)) + 1;
      const newUser = { id, name, email, role: 'User' };
      setUsers([...users, newUser]);
      closeAddModal();
    }
  };

  const updateUser = () => {
    const updatedUsers = users.map(user =>
      user.id === selectedUser.id ? { ...user, name: updateName, email: updateEmail } : user
    );
    setUsers(updatedUsers);
    closeUpdateModal();
  };
  const deleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
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
                  onClick={() => openUpdateModal(user)}
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
      <button className="bg-black mt-5 text-white font-bold py-5 px-6 rounded my-4 mx-10 w-[20%]" onClick={openAddModal}>Add User</button>

      {showAddModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded">
            <h2 className="text-2xl mb-4">Add User</h2>
            <form onSubmit={addUser} className="flex flex-col">
              <label htmlFor="name" className="mb-2">Name:</label>
              <input type="text" id="name" name="name" className="border p-2 mb-4" />

              <label htmlFor="email" className="mb-2">Email:</label>
              <input type="email" id="email" name="email" className="border p-2 mb-4" />

              <div className="flex justify-end">
                <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={closeAddModal}>Cancel</button>
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showUpdateModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded">
            <h2>Update User</h2>
            <form onSubmit={(e) => { e.preventDefault(); }}>
              <label htmlFor="updateName" className="mb-2">Name:</label>
              <input
                type="text"
                id="updateName"
                name="updateName"
                value={updateName}
                onChange={(e) => setUpdateName(e.target.value)}
                className="border p-2 mb-4"
              />

              <label htmlFor="updateEmail" className="mb-2">Email:</label>
              <input
                type="email"
                id="updateEmail"
                name="updateEmail"
                value={updateEmail}
                onChange={(e) => setUpdateEmail(e.target.value)}
                className="border p-2 mb-4"
              />

              <div className="flex justify-end">
                <button type="button" className="bg-blue-800 text-white py-2 px-4 rounded mr-2" onClick={closeUpdateModal}>Cancel</button>
                <button type="button" className="bg-black text-white py-2 px-4 rounded" onClick={updateUser}>Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDash;
