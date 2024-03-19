
import { AiOutlineUser, AiOutlineDatabase, AiOutlineTeam,AiOutlineLogin, AiOutlineUsergroupDelete } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
function AdminBoard() {
    const CountingAnimation = ({ value }) => {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            if (count < value) {
              setCount((prevCount) => prevCount + 10);
            } else {
              clearInterval(interval);
            }
          }, 10);
          return () => clearInterval(interval);
        }, [count, value]);
      
        return <h2 className='font-sans text-3xl font-bold'>{count}</h2>;
      };
  return (
    <div className='p-10 flex flex-col font-sans w-screen'>
      <h2 className='font-bold text-2xl text-black'>Analytics of the Website</h2>
      <div className='flex p-10 flex-row'>
         <div className='flex flex-col w-[50vh] h-[25vh] bg-black gap-6 justify-center items-center text-white shadow-2xl '>
          <h2 className='font-sans flex flex-row text-3xl gap-3 font-bold'><AiOutlineUser size={35} />Users Enrolled</h2>
          <CountingAnimation value={4000} />
         </div>
         <div className='flex flex-col w-[50vh] h-[25vh] bg-black gap-6 justify-center items-center text-white shadow-2xl mr-4 ml-4 '>
          <h2 className='font-sans text-3xl flex flex-row gap-3 font-bold'><AiOutlineDatabase size={35}/>Total Courses</h2>
          <CountingAnimation value={400} />
         </div>
         <div className='flex flex-col w-[50vh] h-[25vh] bg-black gap-6 justify-center items-center text-white shadow-2xl '>
          <h2 className='font-sans text-3xl flex flex-row font-bold gap-3'><AiOutlineTeam size={35}/>Sliver Members</h2>
          <CountingAnimation value={1000} />
         </div>
         </div>   
         <div className='flex p-10 flex-row'>
         <div className='flex flex-col w-[50vh] h-[25vh] bg-black gap-6 justify-center items-center text-white shadow-2xl '>
          <h2 className='font-sans text-3xl flex flex-row gap-3 font-bold'><AiOutlineTeam size={35}/>Gold Members</h2>
          <CountingAnimation value={500} />
         </div>
         <div className='flex flex-col w-[50vh] h-[25vh] bg-black gap-6 justify-center items-center text-white shadow-2xl mr-4 ml-4 '>
          <h2 className='font-sans text-3xl flex flex-row gap-3 font-bold'><AiOutlineLogin size={35}/>Daily Logins</h2>
          <CountingAnimation value={800} />
         </div>
         <div className='flex flex-col w-[50vh] h-[25vh] bg-black gap-6 justify-center items-center text-white shadow-2xl '>
          <h2 className='font-sans text-3xl flex flex-row gap-3 font-bold'><AiOutlineUsergroupDelete size={35}/>Daily Learners</h2>
          <CountingAnimation value={200} />
         </div>
         </div>  
    </div>
  )
}

export default AdminBoard
