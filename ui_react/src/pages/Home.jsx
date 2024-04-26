import React from 'react';
import { AiOutlinePlayCircle, AiFillFire, AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import hom from '../assets/img/home3img.png';
import IT from '../assets/img/IT.jpg';
import { AiOutlineComment ,AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import AWS from '../assets/img/aws.jpg';
import Cisco from '../assets/img/cisco.jpg';
import Write from '../assets/img/write.jpg';
import ICT from '../assets/img/ict.jpg';
import DS1 from '../assets/img/DS1.jpg'
import DS2 from '../assets/img/DS2.jpg'
import DS3 from '../assets/img/DS3.jpg'
import JS from '../assets/img/js.jpg';
import P1 from '../assets/img/P1.jpeg';
import P2 from '../assets/img/P2.jpg';
import ASK from '../assets/img/ASK.jpg'
import P3 from '../assets/img/P3.jpeg';
import P4 from '../assets/img/P4.jpg';
import { useState ,useEffect} from 'react';
import axiosInstance from '../components/Public/AxiosInstance';
function Home() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        const response = await axiosInstance.get('http://localhost:8080/api/feedback/getFeedback');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    }

    fetchFeedbacks();
  }, []);
  const totalPages = Math.ceil(feedbacks.length / 3);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Navigate to another page
    navigate('/explore');
  };

  const handleViewClick = () => {
    navigate('/view'); // Navigate to the desired view page
  };

  const handleCartClick = () => {
    navigate('/payment'); // Navigate to the cart page
  };
  const courses = [
    { id: 1, name: 'AI Fundamentals: From Basics to Advanced', image:AWS, instructor: 'John Doe', topic: 'Artificial Intelligence' },
    { id: 2, name: 'Machine Learning for Beginners', image:DS2, instructor: 'Jane Smith', topic: 'Artificial Intelligence' },
    { id: 3, name: 'Deep Learning Specialization', image:DS1, instructor: 'Alice Johnson', topic: 'Artificial Intelligence' },
    { id: 4, name: 'Natural Language Processing Basics', image:DS3, instructor: 'Bob Johnson', topic: 'Artificial Intelligence' },

    { id: 5, name: 'Introduction to Business Management', image:IT, instructor: 'John Doe', topic: 'Business' },
    { id: 6, name: 'Financial Accounting Basics', image:Cisco, instructor: 'Jane Smith', topic: 'Business' },
    { id: 7, name: 'Marketing Strategies for Success', image:Write, instructor: 'Alice Johnson', topic: 'Business' },
    { id: 8, name: 'Entrepreneurship Essentials', image: DS2, instructor: 'Bob Johnson', topic: 'Business' },

    { id: 9, name: 'Python Mega Course: Learn Python in 60 Days, Build 20 Apps', image:P1, instructor: 'John Doe', topic: 'Health' },
    { id: 10, name: 'Python for beginners - Learn all the basics of python', image:P2, instructor: 'Jane Smith', topic: 'Health' },
    { id: 11, name: '100 Days of Code: The Complete Python Pro Bootcamp', image:P3, instructor: 'Alice Johnson', topic: 'Health' },
    { id: 12, name: 'The Complete Python Bootcamp From Zero to Hero in Python', image:P4, instructor: 'Bob Johnson', topic: 'Health' },

    { id: 13, name: 'Introduction to Computer Science', image:IT, instructor: 'John Doe', topic: 'Computer Science' },
    { id: 14, name: 'Algorithms and Data Structures', image:Cisco, instructor: 'Jane Smith', topic: 'Computer Science' },
    { id: 15, name: 'Web Development Bootcamp', image:Write, instructor: 'Alice Johnson', topic: 'Computer Science' },
    { id: 16, name: 'JavaScript Fundamentals', image:JS, instructor: 'Bob Johnson', topic: 'Computer Science' },

    { id: 17, name: 'Data Science Fundamentals', image:ICT, instructor: 'John Doe', topic: 'Data Science' },
    { id: 18, name: 'Python for Data Analysis', image:DS1, instructor: 'Jane Smith', topic: 'Data Science' },
    { id: 19, name: 'Machine Learning with Python', image:DS2, instructor: 'Alice Johnson', topic: 'Data Science' },
    { id: 20, name: 'Big Data Analytics', image:DS3, instructor: 'Bob Johnson', topic: 'Data Science' },
  ];
  
  const handleStart = () => {
    navigate('/register');
  };
  const handleQuery = () => {
    navigate('/enquiry');
  };
 
  const [currentTopic, setCurrentTopic] = useState('Artificial Intelligence');
  
  const handleTabClick = (topic) => {
    setCurrentTopic(topic);
  };

  const filteredCourses = courses.filter(course => course.topic === currentTopic).slice(0, 4);
  return (
    <div>
      <div className="flex flex-row items-center pt-10 font-mono pb-3">
        <div className="flex flex-col ml-4 w-[50%] p-5 gap-4">
          <h2 className='font-sans font-bold text-4xl'>Subscribe to the best of Course Compass</h2>
          <p className="fade-in">With Personal Plan, you get access to 8,000 of our top-rated courses in tech, business, and more.</p>
          <button onClick={handleStart} className="flex items-center px-4 font-mono py-2 mt-4 bg-blue-800 text-white rounded-md w-[30%]">
            <AiOutlinePlayCircle size={20} className="mr-2" />
            Get Started
          </button>
        </div>
        <img src={hom} alt="Home" className="pr-4 h-auto w-[100vh] max-h-80" />
      </div>

      <div className='flex flex-col p-5'>
        <div className='flex font-mono font-bold text-3xl pl-4'>
          <AiFillFire size={40} className="mr-2 text-red-500" />
          Trending Courses
        </div>
        <div className='flex flex-row pl-10 pt-10'>
  <div className='mb-5'>
    <button className={`text-lg font-semibold border border-black rounded-full px-4 py-2 mr-2 ${currentTopic === 'Artificial Intelligence' ? 'text-blue-800' : 'text-black'}`} onClick={() => handleTabClick('Artificial Intelligence')}>Artificial Intelligence</button>
  </div>
  <div className='mb-5'>
    <button className={`text-lg font-semibold border border-black rounded-full px-4 py-2 mr-2 ${currentTopic === 'Health' ? 'text-blue-800' : 'text-black'}`} onClick={() => handleTabClick('Health')}>Python</button>
  </div>
  <div className='mb-5'>
    <button className={`text-lg font-semibold border border-black rounded-full px-4 py-2 mr-2 ${currentTopic === 'Computer Science' ? 'text-blue-800' : 'text-black'}`} onClick={() => handleTabClick('Computer Science')}>Computer Science</button>
  </div>
  <div className='mb-5'>
    <button className={`text-lg font-semibold border border-black rounded-full px-4 py-2 mr-2 ${currentTopic === 'Data Science' ? 'text-blue-800' : 'text-black'}`} onClick={() => handleTabClick('Data Science')}>Data Science</button>
  </div>
  <div className='mb-5'>
    <button className={`text-lg font-semibold border border-black rounded-full px-4 py-2 mr-2 ${currentTopic === 'Business' ? 'text-blue-800' : 'text-black'}`} onClick={() => handleTabClick('Business')}>Business</button>
  </div>
  <div className='mb-5'>
  <button onClick={handleButtonClick} className='flex items-center text-lg font-semibold border border-black rounded-full px-4 py-2 mr-2 bg-blue-800 text-white'>
    View More <AiOutlineArrowRight className="ml-2" />
  </button>
</div>
</div>

        <div className='flex p-10 gap-5 flex-row justify-between'>
        {filteredCourses.map((course) =>(
            <div key={course.id} className='flex flex-col w-[55vh] h-[45vh] bg-white shadow-2xl cursor-pointer'>
              <img src={course.image} className='w-[100%] h-[50%]' alt={course.name} />
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

      <div className='flex flex-row'>
        <div className='flex flex-col font-sans'> 
          <h2 className='justify-center items-center flex text-3xl font-bold'>Why Join Course Compass</h2>
          <div className='flex flex-row gap-10 px-40 py-20'>
            <div className="flex justify-center items-center w-[20vh] h-[20vh]">
              <lord-icon
                src="https://cdn.lordicon.com/kthelypq.json"
                trigger="hover"
                class="w-[20vh] h-[20vh] text-blue-500 hover:text-blue-700"
              ></lord-icon>
            </div>
            <div className='flex flex-col w-[50%] gap-5'>
              <h2 className='flex font-mono font-bold text-2xl'>
                Personalized
              </h2>
              <p className='w-[80%]'>Get customized class recommendations based on your interests.</p>
            </div>
            <div className="flex justify-center items-center w-[20vh] h-[20vh]">
              <lord-icon
                src="https://cdn.lordicon.com/zyzoecaw.json"
                trigger="hover"
                class="w-[20vh] h-[20vh] text-blue-500 hover:text-blue-700"
              ></lord-icon>
            </div>
            <div className='flex flex-col w-[50%] gap-3'>
              <h2 className='flex font-mono font-bold text-2xl'>
                Thousands of Classes
              </h2>
              <p className='w-[80%]'>Build a portfolio of projects that showcases your skills.</p>
            </div>
          </div>
          <div className='flex flex-row gap-10 px-40 py-5'>
            <div className="flex justify-center items-center w-[20vh] h-[20vh]">
              <lord-icon
                src="https://cdn.lordicon.com/rbbnmpcf.json"
                trigger="hover"
                class="w-[20vh] h-[20vh] text-blue-500 hover:text-blue-700"
              ></lord-icon>
            </div>
            <div className='flex flex-col w-[50%] gap-5'>
              <h2 className='flex customfont2 font-bold text-2xl'>
                On-Demand
              </h2>
              <p className='w-[80%]'>Watch bite-sized classes on your own schedule, anytime, anywhere on desktop or mobile app.</p>
            </div>
            <div className="flex justify-center items-center w-[20vh] h-[20vh]">
              <lord-icon
                src="https://cdn.lordicon.com/fdxqrdfe.json"
                trigger="hover"
                class="w-[20vh] h-[20vh] text-blue-500 hover:text-blue-700"
              ></lord-icon>
            </div>
            <div className='flex flex-col w-[50%] gap-5'>
              <h2 className='flex font-mono font-bold text-2xl'>
                Online Community
              </h2>
              <p className='w-[80%]'>Ask questions, exchange feedback, and learn alongside other students.</p>
            </div>
          </div>
        </div>
      </div>
     
      <div class='p-10 flex flex-row gap-4 w-[100%]'>
  <div class='w-[50%] '>
    <img className="pr-4 h-auto w-[80vh] max-h-80" src={ASK} alt='Image description'></img>
  </div>
  <div className='w-[50%]'>
    <h2 class='text-3xl font-bold text-blue-800 mb-4'>Unlocking Knowledge: Your Questions Answered!</h2>
    <p class='text-gray-800'>At our center, we thrive on unraveling the mysteries of education. From decoding complex theories to demystifying puzzling problems, our team is here to ensure that no query remains unanswered. Let's embark on this journey together, where every question leads to a new discovery!</p>
    <button onClick={handleQuery} class='bg-black hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded mt-4'>Discover More</button>
  </div>
</div>
<div className='p-10'>
      <h2 className="text-2xl font-bold mb-4 flex items-center p-5">
        <AiOutlineComment className="mr-2" />
        These are our valuable feedbacks!
      </h2>
      <div className="grid grid-cols-3 gap-4 px-20 relative">
        {feedbacks.slice((currentPage - 1) * 3, currentPage * 3).map((feedback, index) => (
          <div key={index} className="bg-blue-800 w-[50vh] h-[30vh] rounded-lg shadow-md p-8 transform transition duration-300 hover:scale-105 hover:bg-black">
            <p className="text-white mb-2 font-serif font-bold ">"{feedback.feedback}"</p>
            <div className="flex justify-between pl-20 pt-5">
              <p className="text-white">{feedback.username}, {feedback.country}</p>
            </div>
          </div>
        ))}
        {totalPages > 1 && (
          <>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-transparent border-2 border-gray-600 rounded-full p-2 text-3xl" style={{ marginLeft: '20px' }} onClick={handlePrevPage}><AiOutlineArrowLeft /></button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-transparent border-2 border-gray-600 rounded-full p-2 text-3xl" onClick={handleNextPage}><AiOutlineArrowRight /></button>
          </>
        )}
      </div>
    </div>
    </div>
  );
}

export default Home;
