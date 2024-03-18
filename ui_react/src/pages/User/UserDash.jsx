import React, { useState } from 'react';
import Profile from '../../assets/img/profile.jpg'
import { AiOutlineSave,AiOutlineEdit } from 'react-icons/ai';
function UserDash() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    mobile: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };
  return (
    <div className='bg-white  w-screen h-screen rounded-xl'>
      <div className='flex flex-row p-5'>
       <h2 className='font-mono font-bold text-2xl'>Public profile</h2>
      </div>
      <div className='flex flex-row'>
      <div className='w-[40%] p-10 flex flex-col'>
            <img src={Profile} alt="Your Image" className="w-[70%] h-[70%] border-b-2  border-gray-300" />
             <h2 className="text-xl font-semibold mt-4 flex  p-4 cursor-pointer bg-blue-800 w-[70%] text-white rounded-md">Update Your Profile Picture</h2>
      </div>
        <div className='w-[60%]'>
        <div className="flex flex-col">
      {!submitted ? (
        <>
          <h2 className="font-sans text-xl font-semibold text-black">Add information About Yourself</h2>
          <form onSubmit={handleSubmit} className="mt-4 w-[60%]">
            <div className="mb-4 ">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-black">
  <AiOutlineSave size={20}/> Save Profile
</button>
          </form>
        </>
      ) : (
        <form className="mt-4">
          <div className="mb-4">
            <p className="text-3xl font-medium pb-3 text-gray-700">Updated Profile:</p>
            <label htmlFor="updatedName" className="block text-sm font-medium text-gray-700 ">Name</label>
            <input
              type="text"
              id="updatedName"
              name="updatedName"
              value={formData.name}
              readOnly
              className="mt-1 p-2 bg-gray-100 rounded-md  w-[60%]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="updatedEmail" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="updatedEmail"
              name="updatedEmail"
              value={formData.email}
              readOnly
              className="mt-1 p-2 bg-gray-100 rounded-md  w-[60%]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="updatedCountry" className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              id="updatedCountry"
              name="updatedCountry"
              value={formData.country}
              readOnly
              className="mt-1 p-2 bg-gray-100 rounded-md w-[60%]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="updatedMobile" className="block text-sm font-medium text-gray-700">Mobile</label>
            <input
              type="tel"
              id="updatedMobile"
              name="updatedMobile"
              value={formData.mobile}
              readOnly
              className="mt-1 p-2 bg-gray-100 rounded-md  w-[60%]"
            />
          </div>
          <button onClick={() => setSubmitted(false)} className="bg-black text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-800">
  <AiOutlineEdit size={20}/> Edit Your Profile
</button>
        </form>
      )}
    </div>
      </div>
    </div>
    </div>
  )
}

export default UserDash
