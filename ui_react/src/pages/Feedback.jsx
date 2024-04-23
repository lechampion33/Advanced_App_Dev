import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSend } from 'react-icons/ai';
import axiosInstance from '../components/Public/AxiosInstance';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    country: '',
    feedback: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, country, feedback } = formData;
    if (!username || !email || !country || !feedback) {
      toast.error('Please fill out all fields.');
      return;
    }

    try {
      await axiosInstance.post('http://localhost:8080/api/feedback/postFeedback', formData);
      toast.success('Feedback submitted successfully!', {
        autoClose: 2000,
        onClose: () => navigate('/')
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="text-center p-2 mb-6">
        <h2 className="text-3xl font-bold p-2">Feedback Form</h2>
        <p className="text-gray-600">We appreciate your feedback. Please fill out the form below.</p>
      </div>
      <div className="w-[100vh] bg-white p-10 rounded-lg shadow-2xl mx-auto">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 font-semibold mb-2">Country</label>
            <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700 font-semibold mb-2">Feedback</label>
            <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full h-24 resize-none focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-black focus:outline-none focus:bg-blue-700 flex items-center justify-center w-full">
            <AiOutlineSend className="mr-2" /> Submit 
          </button>
        </form>
      </div>
      <div className='p-10'>

      </div>
    </div>
  );
};

export default FeedbackForm;
