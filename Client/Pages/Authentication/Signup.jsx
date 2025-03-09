import React from 'react';
import {ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Authentication.css';

const apiUrl = import.meta.env.VITE_API_URL_ROOT;
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Name is too short')
    .max(10, 'Name is too long')
    .required('Full name is required'),
  lastName: Yup.string()
    .min(2, 'Name is too short')
    .max(10, 'Name is too long')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
 
});

const SignUpForm = () => {
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async(values) => {
    try {
      const response = await fetch(`${apiUrl}/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const data = await response.json();
      console.log(data);
      
      if (data.success === true){
        console.log(response);
        
        toast.success("User registered successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { backgroundColor: 'green' , color: 'white' },
          
        });
        
        setError(false)
        setTimeout(() => navigate('/signin'), 3000);
        
      } else {
        setError(data.message)
        if (data.message === "Email already exists") {
          toast.error("Email already exists", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { backgroundColor: 'red' , color: 'white' },
            
          })
        }
        
        
      }
    } catch (error) {
      setError(error.message)
    }
  };

  const formik = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      
    },
    validationSchema:SignUpSchema,
    onSubmit:handleSubmit
  })
  return (
    <div className="signup-container">
      <ToastContainer />
      <div className="signup-form-wrapper">
        <h2>Create Your Career Account</h2>
        <p className="form-subtitle">Start your journey to career success</p>
          
          
            <form className="signup-form" onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className={`form-input`}
                  id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  className={`form-input`}
                  id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`form-input`}
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
                  placeholder="Create a password"
                  id="password"
                  className={`form-input`}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  id="confirmPassword"
                  className={`form-input`}
                  value={formik.values.confirmPasswordpassword}
                  onChange={formik.handleChange}
                />
              </div>

             

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>

              <div className="login-link">
                Already have an account? <Link to="/signin">Sign In</Link>
              </div>
            </form>
          
        
      </div>
    </div>
  );
};

export default SignUpForm;
