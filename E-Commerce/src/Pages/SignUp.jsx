import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {validateRegisterForm} from '../Utils/formValidators.js'

const signupFields = [
  { name: 'username', type: 'text', placeholder: 'Enter your full name'},
  { name: 'email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', type: 'password', placeholder: 'Create a password'},
];

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [serverMsg, setServerMsg] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
  const validationErrors = validateRegisterForm(formData);
  setErrors(validationErrors);
  return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
    setServerMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData, {
        withCredentials: true,
      });
      console.log('✅ Signup response:', res.data);
      alert('✅ Registered successfully!');
      setFormData({});
      setTimeout(() => navigate('/login'), 1000); // Redirect after delay
    } catch (err) {
      alert(err.response?.data?.msg || '❌ Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 bg-gray-100 ">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {signupFields.map(({ name, type, placeholder, label }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name] || ''}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none transition 
                  ${errors[name]
                    ? 'border-red-500 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-blue-500'
                  }`}
              />
              {errors[name] && (
                <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm hover:shadow-md"
          >
            Sign Up
          </button>

          {serverMsg && (
            <p className={`text-sm text-center mt-4 ${serverMsg.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
              {serverMsg}
            </p>
          )}
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-blue-600 hover:underline font-medium"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
