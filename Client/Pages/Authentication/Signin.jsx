import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import './Authentication.css';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

const SignInForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="signin-container">
      <div className="signin-form-wrapper">
        <h2>Welcome Back</h2>
        <p className="form-subtitle">Sign in to continue your career journey</p>
        
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="signin-form">
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
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <Field type="checkbox" name="rememberMe" />
                  <span>Remember me</span>
                </label>
                <a href="/forgot-password" className="forgot-password">
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="signup-link">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInForm;
