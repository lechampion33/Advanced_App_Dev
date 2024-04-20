import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SubmittedDataPage = () => {
  const formData = useLocation().state;

  // State to manage editing and table data
  const [editingData, setEditingData] = useState(null);
  const [tableData, setTableData] = useState(Array(6).fill(null).map(() => ({
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    program: "Computer Science",
    inquiry: "General Inquiry",
    id: Math.random().toString(36).substr(2, 9) // Generate unique ID for each row
  })));

  useEffect(() => {
    if (formData) {
      // Append new data to tableData
      setTableData(prevData => [...prevData, formData]);
    }
  }, [formData]);

  // Edit function to handle edit button click
  const handleEdit = (data) => {
    setEditingData(data);
  };

  // Delete function to handle delete button click
  const handleDelete = (id) => {
    setTableData(prevData => prevData.filter(item => item.id !== id));
  };

  // Function to handle form submission for editing
  const handleSubmit = (event) => {
    event.preventDefault();
    // Find the index of the edited data in tableData
    const dataIndex = tableData.findIndex(item => item.id === editingData.id);
    if (dataIndex !== -1) {
      // Create a copy of the tableData array
      const updatedTableData = [...tableData];
      // Update the edited data in the copied array
      updatedTableData[dataIndex] = editingData;
      // Update the state with the edited data
      setTableData(updatedTableData);
    }
    setEditingData(null); // Clear editing state after submission
  };

  return (
    <div className="container mt-10 relative">
        <div className="text-center p-5 mb-8">
      <h2 className="text-3xl font-bold mb-4">Submitted Data</h2>
      </div>
      <div className="flex items-center justify-center pb-20 h-full">
      <table className=" bg-white rounded-lg overflow-hidden">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Program of Interest</th>
            <th className="px-4 py-2">Inquiry</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={rowData.id}>
              {/* Render table data */}
              <td className="border px-4 py-2">{rowData.name}</td>
              <td className="border px-4 py-2">{rowData.email}</td>
              <td className="border px-4 py-2">{rowData.phone}</td>
              <td className="border px-4 py-2">{rowData.program}</td>
              <td className="border px-4 py-2">{rowData.inquiry}</td>
              {/* Render edit and delete buttons */}
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(rowData)} className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(rowData.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {editingData && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 className="text-xl font-bold mb-4">Edit Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            className="form-input mt-1 block w-full"
            defaultValue={editingData.name}
            onChange={(e) => setEditingData({ ...editingData, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="form-input mt-1 block w-full"
            defaultValue={editingData.email}
            onChange={(e) => setEditingData({ ...editingData, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            className="form-input mt-1 block w-full"
            defaultValue={editingData.phone}
            onChange={(e) => setEditingData({ ...editingData, phone: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="program">Program of Interest:</label>
          <input
            id="program"
            type="text"
            className="form-input mt-1 block w-full"
            defaultValue={editingData.program}
            onChange={(e) => setEditingData({ ...editingData, program: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="inquiry">Inquiry:</label>
          <input
            id="inquiry"
            type="text"
            className="form-input mt-1 block w-full"
            defaultValue={editingData.inquiry}
            onChange={(e) => setEditingData({ ...editingData, inquiry: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default SubmittedDataPage;
