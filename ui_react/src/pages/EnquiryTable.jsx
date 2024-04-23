import React, { useState, useEffect } from 'react';
import axiosInstance from '../components/Public/AxiosInstance';

const SubmittedDataPage = () => {
  const [editingData, setEditingData] = useState(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('http://localhost:8080/api/web/getenquires');
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (data) => {
    setEditingData(data);
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`http://localhost:8080/api/web/deleteenquires?eid=${id}`);
    setTableData(prevData => prevData.filter(item => item.eid !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosInstance.put(`http://localhost:8080/api/web/putenquires?eid=${editingData.eid}`, editingData);
      setEditingData(null);
      fetchData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="w-[100vh]">
      <div className="text-center p-5 mb-8">
        <h2 className="text-3xl font-bold ">Submitted Enquires</h2>
      </div>
      <div className="flex pb-10 h-full ">
        <table className="bg-white  rounded-lg ">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Program of Interest</th>
              <th className="px-4 py-2">Inquiry</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData) => (
              <tr key={rowData.eid}>
                <td className="border px-4 py-2">{rowData.eid}</td>
                <td className="border px-4 py-2">{rowData.name}</td>
                <td className="border px-4 py-2">{rowData.email}</td>
                <td className="border px-4 py-2">{rowData.phone}</td>
                <td className="border px-4 py-2">{rowData.program}</td>
                <td className="border px-4 py-2">{rowData.inquiry}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleEdit(rowData)} className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(rowData.eid)} className="bg-red-500 hover:bg-red-700 text-white font-bold mt-2 py-2 px-4 rounded">
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
                <label className="block text-sm mb-2" htmlFor="eid">ID:</label>
                <input
                  id="eid"
                  type="text"
                  className="form-input mt-1 block w-full"
                  defaultValue={editingData.eid}
                  disabled
                />
              </div>
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
