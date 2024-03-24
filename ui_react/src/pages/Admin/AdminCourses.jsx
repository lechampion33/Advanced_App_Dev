import React, { useState } from 'react';

function AdminCourses() {
    const [courses, setCourses] = useState([
      { id: 1, name: 'Introduction to Computer Science', category: 'Computer Science', author: 'John Smith' },
      { id: 2, name: 'Artificial Intelligence Fundamentals', category: 'Artificial Intelligence', author: 'Emily Johnson' },
      { id: 3, name: 'Web Development Basics', category: 'Web Development', author: 'David Brown' },
    ]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [updateName, setUpdateName] = useState('');
    const [updateCategory, setUpdateCategory] = useState('');
    const [updateAuthor, setUpdateAuthor] = useState('');
  
    const openAddModal = () => {
      setShowAddModal(true);
    };
  
    const closeAddModal = () => {
      setShowAddModal(false);
    };
    
    const openUpdateModal = (course) => {
      setSelectedCourse(course);
      setUpdateName(course.name);
      setUpdateCategory(course.category);
      setUpdateAuthor(course.author);
      setShowUpdateModal(true);
    };
  
    const closeUpdateModal = () => {
      setSelectedCourse(null);
      setShowUpdateModal(false);
    };
    const addCourse = () => {
      if (updateName && updateCategory && updateAuthor) {
        const id = Math.max(...courses.map(course => course.id)) + 1;
        const newCourse = { id, name: updateName, category: updateCategory, author: updateAuthor };
        setCourses([...courses, newCourse]);
        closeAddModal();
      }
    };
    
    
  
    const updateCourse = () => {
      const updatedCourses = courses.map(course =>
        course.id === selectedCourse.id ? { ...course, name: updateName, category: updateCategory, author: updateAuthor } : course
      );
      setCourses(updatedCourses);
      closeUpdateModal();
    };
   
    return (
      <div className="flex flex-col w-screen">
        <h2 className="font-sans text-2xl font-bold p-8">Course List:</h2>
        <table className="border-collapse justify-center items-center ml-10 border w-[70%]">
          <thead>
            <tr>
              <th className="border p-1 border-gray-600">S.No</th>
              <th className="border p-1 border-gray-600">Name</th>
              <th className="border p-1 border-gray-600">Category</th>
              <th className="border p-1 border-gray-600">Author</th>
              <th className="border p-1 border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td className="border border-gray-600 p-1">{index + 1}</td>
                <td className="border p-1 border-gray-600">{course.name}</td>
                <td className="border p-1 border-gray-600">{course.category}</td>
                <td className="border p-1 border-gray-600">{course.author}</td>
                <td className="border p-1 border-gray-600">
                  <button
                    className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => openUpdateModal(course)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={() => deleteCourse(course.id)}
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
  <label htmlFor="name" className="mb-2">Name:</label>
  <input
    type="text"
    id="name"
    name="name"
    value={updateName}
    onChange={(e) => setUpdateName(e.target.value)}
    className="border p-2 mb-4"
  />

  <label htmlFor="category" className="mb-2">Category:</label>
  <input
    type="text"
    id="category"
    name="category"
    value={updateCategory}
    onChange={(e) => setUpdateCategory(e.target.value)}
    className="border p-2 mb-4"
  />

  <label htmlFor="author" className="mb-2">Author:</label>
  <input
    type="text"
    id="author"
    name="author"
    value={updateAuthor}
    onChange={(e) => setUpdateAuthor(e.target.value)}
    className="border p-2 mb-4"
  />

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
              <h2>Update Course</h2>
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

                <label htmlFor="updateCategory" className="mb-2">Category:</label>
                <input
                  type="text"
                  id="updateCategory"
                  name="updateCategory"
                  value={updateCategory}
                  onChange={(e) => setUpdateCategory(e.target.value)}
                  className="border p-2 mb-4"
                />

                <label htmlFor="updateAuthor" className="mb-2">Author:</label>
                <input
                  type="text"
                  id="updateAuthor"
                  name="updateAuthor"
                  value={updateAuthor}
                  onChange={(e) => setUpdateAuthor(e.target.value)}
                  className="border p-2 mb-4"
                />

                <div className="flex justify-end">
                  <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={closeUpdateModal}>Cancel</button>
                  <button type="button" className="bg-green-500 text-white py-2 px-4 rounded" onClick={updateCourse}>Save</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    )
}

export default AdminCourses;
