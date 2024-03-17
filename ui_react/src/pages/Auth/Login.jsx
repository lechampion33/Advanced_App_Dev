import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-8">Login</h1>
          <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">Username:</label>
        <input  type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500">
        Login
      </button>
      <div className="mt-4">
        Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
      </div>
    </div>
  );
}

export default Login;
