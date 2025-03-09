
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Authentication.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiUrl = import.meta.env.VITE_API_URL_ROOT;

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

const SignInForm = () => {
  const [error, setError] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setisSubmitting(true); 
    try {
      const response = await fetch(`${apiUrl}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data);

      if (data.success === true) {
        toast.success("User logged in successfully", {
          position: "top-right",
          autoClose: 5000,
          style: { backgroundColor: 'green', color: 'white' },
        });
        setTimeout(() => {
          navigate('/');
          setisSubmitting(false);
        }, 500);
      } else {
        setError(data.message);
        toast.error(data.message || "Login failed", {
          position: "top-right",
          autoClose: 5000,
          style: { backgroundColor: 'red', color: 'white' },
        });
        setisSubmitting(false); 
      }
    } catch (error) {
      setError(error.message);
      toast.error("An error occurred", {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'red', color: 'white' },
      });
      setisSubmitting(false); 
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="signin-container">
      <ToastContainer />
      <div className="signin-form-wrapper">
        <h2>Welcome Back</h2>
        <p className="form-subtitle">Sign in to continue your career journey</p>
        <form className="signin-form" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
