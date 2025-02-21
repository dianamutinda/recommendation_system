import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import './Authentication.css';

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
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <h2>Create Your Career Account</h2>
        <p className="form-subtitle">Start your journey to career success</p>
        
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            
          }}
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="signup-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <Field
                  type="text"
                  name="fullName"
                  className={`form-input ${errors.fullName && touched.fullName ? 'error' : ''}`}
                  placeholder="Enter your full name"
                />
                <ErrorMessage name="fullName" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  className={`form-input ${errors.email && touched.email ? 'error' : ''}`}
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className={`form-input ${errors.password && touched.password ? 'error' : ''}`}
                  placeholder="Create a password"
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className={`form-input ${errors.confirmPassword && touched.confirmPassword ? 'error' : ''}`}
                  placeholder="Confirm your password"
                />
                <ErrorMessage name="confirmPassword" component="div" className="error-message" />
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>

              <div className="login-link">
                Already have an account? <Link to="/signin">Sign In</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
