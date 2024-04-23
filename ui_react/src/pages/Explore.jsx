import React, { useState } from 'react';
import { AiOutlineShoppingCart,AiOutlineSearch } from 'react-icons/ai';
import {AiOutlineEye} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import AWS from '../assets/img/aws.jpg';
import Cisco from '../assets/img/cisco.jpg';
import IT from '../assets/img/IT.jpg';
import ICT from '../assets/img/ict.jpg';
import DS1 from '../assets/img/DS1.jpg'
import DS2 from '../assets/img/DS2.jpg'
import Write from '../assets/img/write.jpg';
import DS3 from '../assets/img/DS3.jpg'
import JS from '../assets/img/js.jpg';
import P1 from '../assets/img/P1.jpeg';
import P2 from '../assets/img/P2.jpg';
import P3 from '../assets/img/P3.jpeg';
import P4 from '../assets/img/P4.jpg';

const courses = [
  // Artificial Intelligence courses
  { id: 1, name: 'AI Fundamentals: From Basics to Advanced', image:AWS, instructor: 'John Doe', topic: 'Artificial Intelligence' },
  { id: 2, name: 'Machine Learning for Beginners', image:DS2, instructor: 'Jane Smith', topic: 'Artificial Intelligence' },
  { id: 3, name: 'Deep Learning Specialization', image:DS1, instructor: 'Alice Johnson', topic: 'Artificial Intelligence' },
  { id: 4, name: 'Natural Language Processing Basics', image:DS3, instructor: 'Bob Johnson', topic: 'Artificial Intelligence' },
  
  // Business courses
  { id: 5, name: 'Introduction to Business Management', image:IT, instructor: 'John Doe', topic: 'Business' },
  { id: 6, name: 'Financial Accounting Basics', image:Cisco, instructor: 'Jane Smith', topic: 'Business' },
  { id: 7, name: 'Marketing Strategies for Success', image:Write, instructor: 'Alice Johnson', topic: 'Business' },
  { id: 8, name: 'Entrepreneurship Essentials', image: DS2, instructor: 'Bob Johnson', topic: 'Business' },
  
  // Health courses
  { id: 9, name: 'Python Mega Course: Learn Python in 60 Days, Build 20 Apps', image:P1, instructor: 'John Doe', topic: 'Health' },
  { id: 10, name: 'Python for beginners - Learn all the basics of python', image:P2, instructor: 'Jane Smith', topic: 'Health' },
  { id: 11, name: '100 Days of Code: The Complete Python Pro Bootcamp', image:P3, instructor: 'Alice Johnson', topic: 'Health' },
  { id: 12, name: 'The Complete Python Bootcamp From Zero to Hero in Python', image:P4, instructor: 'Bob Johnson', topic: 'Health' },
  
  // Computer Science courses
  { id: 13, name: 'Introduction to Computer Science', image:IT, instructor: 'John Doe', topic: 'Computer Science' },
  { id: 14, name: 'Algorithms and Data Structures', image:Cisco, instructor: 'Jane Smith', topic: 'Computer Science' },
  { id: 15, name: 'Web Development Bootcamp', image:Write, instructor: 'Alice Johnson', topic: 'Computer Science' },
  { id: 16, name: 'JavaScript Fundamentals', image:JS, instructor: 'Bob Johnson', topic: 'Computer Science' },
  
  // Data Science courses
  { id: 17, name: 'Data Science Fundamentals', image:ICT, instructor: 'John Doe', topic: 'Data Science' },
  { id: 18, name: 'Python for Data Analysis', image:DS1, instructor: 'Jane Smith', topic: 'Data Science' },
  { id: 19, name: 'Machine Learning with Python', image:DS2, instructor: 'Alice Johnson', topic: 'Data Science' },
  { id: 20, name: 'Big Data Analytics', image:DS3, instructor: 'Bob Johnson', topic: 'Data Science' },
];

function Explore() {
  const navigate = useNavigate();
const handleViewClick = () => {
  navigate('/view'); // Navigate to the desired view page
};

const handleCartClick = () => {
  navigate('/payment'); // Navigate to the cart page
};
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All'); // Default to all topics

  const filteredCourses = courses.filter((course) => {
    const nameMatch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const topicMatch = selectedTopic === 'All' || course.topic === selectedTopic;
    return nameMatch && topicMatch;
  });
  return (
    <div className='flex flex-col p-10'>
      <div className='container mx-auto bg-blue-800 rounded-lg p-14'>
        <form>
          <h1 class="text-center font-bold text-white text-4xl">EXPLORE OUR VARIETY OF COURSES</h1>
          <p class="mx-auto font-normal text-sm my-6  max-w-lg">
            Enter your search course term or choose a topic to filter courses.
          </p>
          <div className='sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between'>
          <AiOutlineSearch className='mr-2 text-gray-800' />
            <input
              className='text-base text-gray-800 flex-grow outline-none px-2'
              type='text'
              placeholder='Search by course name or filter the courses by category'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='ms:flex items-center px-2 rounded-lg space-x-4 mx-auto'>
              <select
                id='topic'
                className='text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg'
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
              >
                <option value='All'>All </option>
                {courses.reduce((acc, course) => {
                  if (!acc.includes(course.topic)) {
                    acc.push(course.topic);
                  }
                  return acc;
                }, []).map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
              <button className='bg-indigo-800 text-white text-base rounded-lg px-4 py-2 font-thin'>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className='flex p-10 gap-5 flex-row justify-between flex-wrap'>
        {filteredCourses.map((course) => (
          <div key={course.id} className='flex flex-col w-[30%] h-[45vh] bg-white shadow-2xl cursor-pointer'>
            <img src={course.image} className='w-full h-[50%]' alt={course.name} />
            <h2 className='font-sans pt-3 pl-3 font-bold text-xs'>{course.name}</h2>
            <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: {course.instructor}</p>
            <div className='flex flex-row pt-7'>
            <button onClick={handleViewClick} className='flex justify-center items-center px-4 font-mono mt-3 bg-black text-white w-[50%] h-[7vh]'>
             <AiOutlineEye className="mr-2 font-bold" />
                View
             </button>
                <button onClick={handleCartClick} className='flex justify-center items-center px-2 font-mono mt-3 bg-blue-800 text-white w-[50%] h-[7vh]'>
                  <AiOutlineShoppingCart className="mr-2" /> Cart
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
