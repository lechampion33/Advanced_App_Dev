import React, { useState } from 'react';

function AdminCourses() {
    const [courses, setCourses] = useState([
      { id: 1, name: 'Course 1', category: 'Category 1', author: 'Author 1' },
      { id: 2, name: 'Course 2', category: 'Category 2', author: 'Author 2' },
      { id: 3, name: 'Course 3', category: 'Category 3', author: 'Author 3' },
    ]);
  
    const updateCourse = (id) => {
      const newName = prompt('Enter new course name:');
      const newCategory = prompt('Enter new category:');
      const newAuthor = prompt('Enter new author:');
  
      const updatedCourses = courses.map(course => {
        if (course.id === id) {
          return {
            ...course,
            name: newName || course.name,
            category: newCategory || course.category,
            author: newAuthor || course.author
          };
        }
        return course;
      });
  
      setCourses(updatedCourses);
    };
  
    const deleteCourse = (id) => {
      if (window.confirm('Are you sure you want to delete this course?')) {
        const updatedCourses = courses.filter(course => course.id !== id);
        setCourses(updatedCourses);
      }
    };
  
    const addCourse = () => {
      const id = Math.max(...courses.map(course => course.id)) + 1;
      const name = prompt('Enter course name:');
      const category = prompt('Enter category:');
      const author = prompt('Enter author:');
  
      if (name && category && author) {
        const newCourse = { id, name, category, author };
        setCourses([...courses, newCourse]);
      }
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
                    onClick={() => updateCourse(course.id)}
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
        <button className="bg-black mt-5 text-white font-bold py-5 px-6 rounded my-4 mx-10 w-[20%]" onClick={addCourse}>Add Course</button>
      </div>
  )
}

export default AdminCourses
