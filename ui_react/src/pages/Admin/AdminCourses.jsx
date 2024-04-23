import React, { useState, useEffect } from 'react';
import axiosInstance from '../../components/Public/AxiosInstance';

function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [updateCid, setUpdateCid] = useState('');
  const [updateCoursename, setUpdateCoursename] = useState('');
  const [updateDuration, setUpdateDuration] = useState('');
  const [updateCategory, setUpdateCategory] = useState('');
  const [updateProvider, setUpdateProvider] = useState('');

  // Fetch courses data from backend on component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axiosInstance.get('http://localhost:8080/api/courses/getcourses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const addCourse = async () => {
    try {
      const response = await axiosInstance.post('http://localhost:8080/api/courses/postcourses', {
        cid: updateCid,
        coursename: updateCoursename,
        duration: updateDuration,
        category: updateCategory,
        provider: updateProvider,
      });
      setCourses([...courses, response.data]);
      closeAddModal();
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const updateCourse = async () => {
    try {
      await axiosInstance.put(`http://localhost:8080/api/courses/putcourses?cid=${selectedCourse.cid}`, {
        coursename: updateCoursename,
        duration: updateDuration,
        category: updateCategory,
        provider: updateProvider,
      });
      const updatedCourses = courses.map(course =>
        course.cid === selectedCourse.cid ? { ...course, coursename: updateCoursename, duration: updateDuration, category: updateCategory, provider: updateProvider } : course
      );
      setCourses(updatedCourses);
      closeUpdateModal();
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axiosInstance.delete(`http://localhost:8080/api/courses/deletecourses?cid=${id}`);
      const filteredCourses = courses.filter(course => course.cid !== id);
      setCourses(filteredCourses);
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const openUpdateModal = (course) => {
    setSelectedCourse(course);
    setUpdateCoursename(course.coursename);
    setUpdateDuration(course.duration);
    setUpdateCategory(course.category);
    setUpdateProvider(course.provider);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setSelectedCourse(null);
    setUpdateCoursename('');
    setUpdateDuration('');
    setUpdateCategory('');
    setUpdateProvider('');
    setShowUpdateModal(false);
  };

  return (
    <div className="flex flex-col w-screen p-8">
      <h2 className="font-sans text-2xl font-bold mb-8">Course List:</h2>
      <table className="border-collapse justify-center items-center ml-10 border w-[70%]">
        <thead>
          <tr>
            <th className="border p-1 border-gray-600">CID</th>
            <th className="border p-1 border-gray-600">Name</th>
            <th className="border p-1 border-gray-600">Duration</th>
            <th className="border p-1 border-gray-600">Category</th>
            <th className="border p-1 border-gray-600">Provider</th>
            <th className="border p-1 border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.cid}>
              <td className="border border-gray-600 p-1">{course.cid}</td>
              <td className="border p-1 border-gray-600">{course.coursename}</td>
              <td className="border p-1 border-gray-600">{course.duration}</td>
              <td className="border p-1 border-gray-600">{course.category}</td>
              <td className="border p-1 border-gray-600">{course.provider}</td>
              <td className="border p-1 border-gray-600">
                <button
                  className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => openUpdateModal(course)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => deleteCourse(course.cid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="bg-black mt-5 text-white font-bold py-5 px-6 rounded my-4 mx-10 w-[20%]" onClick={openAddModal}>Add Course</button>

      {showAddModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded">
            <h2 className="text-2xl mb-4">Add Course</h2>
            <form>
              <div className="flex flex-col mb-4">
                <label htmlFor="cid" className="mb-2">CID:</label>
                <input
                  type="text"
                  id="cid"
                  name="cid"
                  value={updateCid}
                  onChange={(e) => setUpdateCid(e.target.value)}
                  className="border p-2"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="coursename" className="mb-2">Name:</label>
                <input
                  type="text"
                  id="coursename"
                  name="coursename"
                  value={updateCoursename}
                  onChange={(e) => setUpdateCoursename(e.target.value)}
                  className="border p-2"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="duration" className="mb-2">Duration:</label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={updateDuration}
                  onChange={(e) => setUpdateDuration(e.target.value)}
                  className="border p-2"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="category" className="mb-2">Category:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={updateCategory}
                  onChange={(e) => setUpdateCategory(e.target.value)}
                  className="border p-2"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="provider" className="mb-2">Provider:</label>
                <input
                  type="text"
                  id="provider"
                  name="provider"
                  value={updateProvider}
                  onChange={(e) => setUpdateProvider(e.target.value)}
                  className="border p-2"
                />
              </div>

              <div className="flex justify-end">
                <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={closeAddModal}>Cancel</button>
                <button type="button" className="bg-green-500 text-white py-2 px-4 rounded" onClick={addCourse}>Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showUpdateModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded">
            <h2 className="text-2xl mb-4">Update Course</h2>
            <form onSubmit={(e) => { e.preventDefault(); }}>
              <div className="flex flex-col mb-4">
                <label htmlFor="coursename" className="mb-2">Name:</label>
                <input
                  type="text"
                  id="coursename"
                  name="coursename"
                  value={updateCoursename}
                  onChange={(e) => setUpdateCoursename(e.target.value)}
                  className="border p-2"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="duration" className="mb-2">Duration:</label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={updateDuration}
                  onChange={(e) => setUpdateDuration(e.target.value)}
                  className="border p-2"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="category" className="mb-2">Category:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={updateCategory}
                  onChange={(e) => setUpdateCategory(e.target.value)}
                  className="border p-2"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="provider" className="mb-2">Provider:</label>
                <input
                  type="text"
                  id="provider"
                  name="provider"
                  value={updateProvider}
                  onChange={(e) => setUpdateProvider(e.target.value)}
                  className="border p-2"
                />
              </div>

              <div className="flex justify-end">
                <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={closeUpdateModal}>Cancel</button>
                <button type="button" className="bg-green-500 text-white py-2 px-4 rounded" onClick={updateCourse}>Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCourses;
