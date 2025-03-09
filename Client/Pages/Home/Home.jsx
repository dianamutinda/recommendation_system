import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Computer Science Graduate",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            text: "The career recommendation system helped me find my perfect path in software development. The personalized guidance was invaluable!"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "TVET Student",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            text: "Thanks to this platform, I discovered my passion for electrical engineering. The course recommendations were spot-on!"
        },
        {
            id: 3,
            name: "Emily Roberts",
            role: "Career Switcher",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            text: "The AI-powered guidance helped me transition from marketing to UX design. The learning path was clear and achievable."
        }
    ];

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Discover Your Perfect Career Path</h1>
                    <p>AI-powered career guidance to help you make informed decisions about your future</p>
                    <div className="hero-buttons">
                        <Link to="/courses" className="primary-button">Explore Courses</Link>
                        <Link to="/chatbot" className="secondary-button">Talk to Career AI</Link>
                    </div>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">1000+</span>
                        <span className="stat-label">Courses</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Career Paths</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10k+</span>
                        <span className="stat-label">Students Guided</span>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-section">
                <div className="about-content">
                    <h2>About Our Career Guidance System</h2>
                    <div className="about-grid">
                        <div className="about-card">
                            <div className="about-icon">🎯</div>
                            <h3>Personalized Recommendations</h3>
                            <p>Our AI analyzes your interests, skills, and goals to suggest the best career paths.</p>
                        </div>
                        <div className="about-card">
                            <div className="about-icon">🤖</div>
                            <h3>AI-Powered Guidance</h3>
                            <p>Get real-time answers to your career questions from our advanced AI chatbot.</p>
                        </div>
                        <div className="about-card">
                            <div className="about-icon">📚</div>
                            <h3>Comprehensive Resources</h3>
                            <p>Access a wide range of courses, both academic and technical, to support your career journey.</p>
                        </div>
                        <div className="about-card">
                            <div className="about-icon">🌟</div>
                            <h3>Success Tracking</h3>
                            <p>Monitor your progress and get continuous guidance to achieve your career goals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>Success Stories</h2>
                <p className="section-subtitle">Hear from students who found their perfect career path</p>
                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-image">
                                <img src={testimonial.image} alt={testimonial.name} />
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-author">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <h2>Ready to Start Your Career Journey?</h2>
                <p>Get personalized guidance and course recommendations today</p>
                <Link to="/signup" className="cta-button">Get Started</Link>
            </section>
        </div>
    );
};

export default Home;
