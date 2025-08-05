import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext.jsx';
import { validateLoginForm } from '../Utils/formValidators.js';

const loginFields = [
  { name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email address' },
  { name: 'password', type: 'password', placeholder: 'Enter your password', label: 'Password' },
];

const Login = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const validateForm = () => {
    const validationErrors = validateLoginForm(formData);
    setError(validationErrors.email || validationErrors.password || '');
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      if (!validateForm()) return;
      
    try {
      // console.log('Submitting form data:', formData);

      const res = await axios.post('http://localhost:5000/api/auth/login', formData, {
        withCredentials: true,
      });
      console.log("Login API response:", res.data);
      login(res.data.user); // 👈 Update global context
      alert('✅ Login successful!');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setError(err.response?.data?.msg || '❌ Login failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>

        {loginFields.map(({ name, type, placeholder, label }) => (
          <div key={name} className="mb-4">
            <label className="block text-sm font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name] || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>
        ))}

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Log In
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
