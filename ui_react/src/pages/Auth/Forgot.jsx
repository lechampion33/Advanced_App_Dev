import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { AiOutlineReload } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Forgot() {
  const [email, setEmail] = useState('');
  const navigate=useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = () => {
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
    } else {
      console.log("Email:", email);
      toast.success('Password reset email sent successfully!');
      navigate('/login')
    }
  };

  return (
    <div className="flex flex-col items-center h-[75vh]">
      <h1 className="text-2xl font-semibold mb-8 mt-14">Forgot Password</h1>
      <div className="w-80">
        <div className="relative w-full min-w-[300px] h-15 mt-5">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-1 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
          />
          <label
            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
          >
            Email
          </label>
        </div>
        <div className="relative w-full min-w-[300px] h-20 mt-10">
          <button onClick={handleResetPassword} className='w-full h-18 bg-blue-800 rounded p-3 text-white flex items-center justify-center'>
            <AiOutlineReload size={20} /> 
            <span className="ml-2 font-mono font-semibold text-xl">Reset Password</span>
          </button>
        </div>
        <div className='pl-32'>
          or <Link to="/login" className="text-red-600 hover:underline font-semibold text-1xl"> Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
