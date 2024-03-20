import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import IT from '../../assets/img/IT.jpg';
import Game from '../../assets/img/game.jpg';
import Mongo from '../../assets/img/write.jpg';

function UserFavs() {
  const courses = [
    { id: 1, name: 'IT Networking Fundamentals Exclusively for Beginners', image: IT, instructor: 'Stephen Curry' },
    { id: 2, name: 'Learn game development with javascript', image: Game, instructor: 'Klay Thompson' },
    { id: 3, name: 'Basics: Introduction to the mongodb', image: Mongo, instructor: 'Rohit Sharma' },
    // Add more courses as needed
  ];

  return (
    <div className='flex flex-col pt-10 pl-2 w-screen'>
      <h2 className='font-sans font-bold text-xl flex gap-2 flex-row '> <AiOutlineHeart size={30} />Your Favourite Courses</h2>
      <div className='flex p-5 flex-row '>
        {courses.map((course) => (
          <div key={course.id} className='flex flex-col w-[25%] h-[50vh] bg-white shadow-2xl cursor-pointer mx-2'>
            <img src={course.image} className='w-full h-[50%]' alt={course.name} />
            <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>{course.name}</h2>
            <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: {course.instructor}</p>
            <div className='flex flex-row '>
              <div className='bg-red-600 mt-3 p-2 text-xl font-mono text-bold flex justify-center items-center text-white  w-full'>
                <h2 className=''>Start To Learn</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserFavs;