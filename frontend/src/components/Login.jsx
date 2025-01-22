import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // React Router's navigation hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', response.data.token); // Save token for authentication
      setMessage('Login successful!');
      setTimeout(() => {
        navigate('/dashboard'); // Redirect to the dashboard
      }, 1000);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Invalid username or password.');
      } else {
        setMessage('You need to register first.');
        setTimeout(() => {
          navigate('/register'); // Redirect to the registration page
        }, 1000);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {message && <p className="mb-4 text-red-500">{message}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate('/register')}
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
