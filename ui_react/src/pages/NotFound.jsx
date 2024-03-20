import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-200'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-gray-800 mb-4'>Oops!</h1>
        <h2 className='text-4xl font-semibold text-gray-700 mb-8'>Page Not Found</h2>
        <p className='text-lg text-gray-600 mb-8'>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <NavLink to="/" className='inline-block bg-teal-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-teal-600 transition duration-300'>
          Go to Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
