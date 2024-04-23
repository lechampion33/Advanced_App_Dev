import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSend } from 'react-icons/ai'; // Importing the React Icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import axiosInstance from '../components/Public/AxiosInstance';

const StudentInquiryForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eid: '', // Add eid field with an empty string as initial value
    name: '',
    email: '',
    phone: '',
    program: '',
    inquiry: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { eid, name, email, phone, program, inquiry } = formData;
    if (!eid || !name || !email || !phone || !program || !inquiry) {
      toast.error('Please fill out all fields.');
      return;
    }
  
    try {
      const response = await axiosInstance.post('http://localhost:8080/api/web/postenquires', formData);
      console.log('Response from backend:', response.data);

      toast.success('Form submitted successfully!', {
        autoClose: 2000,
        onClose: () => {
          navigate('/enquirytable', { state: formData });
        }
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mt-10">
      <div className="text-center p-5 mb-8">
        <h2 className="text-3xl p-5 font-bold">Student Inquiry Form</h2>
        <p className="text-gray-600">Please fill out the form below to submit your inquiries.</p>
      </div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="w-[100vh] mx-auto bg-white p-10 rounded-lg shadow-2xl">
        <div className="mb-4">
          <label htmlFor="eid" className="block text-gray-700 font-bold mb-2">E.NO</label>
          <input type="text" id="eid" name="eid" value={formData.eid} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="program" className="block text-gray-700 font-bold mb-2">Program of Interest</label>
          <select id="program" name="program" value={formData.program} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full">
            <option value="">Select Program</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Business Administration">Business Administration</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="inquiry" className="block text-gray-700 font-bold mb-2">Message/Inquiry</label>
          <textarea id="inquiry" name="inquiry" value={formData.inquiry} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded flex items-center justify-center w-full">
          <AiOutlineSend className="mr-2" /> Submit 
        </button>
      </form>
      <div className='p-5'>

      </div>
    </div>
  );
};

export default StudentInquiryForm;
