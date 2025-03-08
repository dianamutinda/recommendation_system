import React, { useState } from 'react';
import './Courses.css';

const courses = {
    "University Programs": [
        {
            id: 1,
            title: "Bachelor of Computer Science",
            institution: "University Track",
            duration: "4 years",
            level: "Undergraduate",
            description: "Comprehensive study of computer science, programming, and software development.",
            topics: ["Programming", "Data Structures", "Algorithms", "Software Engineering", "Database Systems"],
            requirements: "C+ in Mathematics and Physics",
            career: ["Software Developer", "Systems Analyst", "Database Administrator"]
        },
        {
            id: 2,
            title: "Bachelor of Business Administration",
            institution: "University Track",
            duration: "4 years",
            level: "Undergraduate",
            description: "Study of business principles, management, and organizational leadership.",
            topics: ["Management", "Marketing", "Finance", "Economics", "Strategic Planning"],
            requirements: "C+ in Mathematics and English",
            career: ["Business Manager", "Marketing Executive", "Financial Analyst"]
        },
        {
            id: 3,
            title: "Bachelor of Engineering",
            institution: "University Track",
            duration: "5 years",
            level: "Undergraduate",
            description: "Study of engineering principles and technical problem-solving.",
            topics: ["Mathematics", "Physics", "Design", "Mechanics", "Electronics"],
            requirements: "B in Mathematics and Physics",
            career: ["Civil Engineer", "Mechanical Engineer", "Electrical Engineer"]
        }
    ],
    "TVET Programs": [
        {
            id: 4,
            title: "Diploma in Electrical Installation",
            institution: "TVET Track",
            duration: "2 years",
            level: "Diploma",
            description: "Hands-on training in electrical systems installation and maintenance.",
            topics: ["Circuit Theory", "Electrical Installation", "Safety Standards", "Maintenance", "Troubleshooting"],
            requirements: "D+ in Mathematics and Physics",
            career: ["Electrical Technician", "Maintenance Technician", "Installation Specialist"]
        },
        {
            id: 5,
            title: "Certificate in Automotive Technology",
            institution: "TVET Track",
            duration: "2 years",
            level: "Certificate",
            description: "Practical training in vehicle maintenance and repair.",
            topics: ["Engine Systems", "Auto Electronics", "Diagnostics", "Repair", "Maintenance"],
            requirements: "D+ in Mathematics",
            career: ["Automotive Technician", "Service Advisor", "Parts Specialist"]
        },
        {
            id: 6,
            title: "Diploma in Hospitality Management",
            institution: "TVET Track",
            duration: "2 years",
            level: "Diploma",
            description: "Training in hospitality services and management.",
            topics: ["Customer Service", "Food & Beverage", "Hotel Operations", "Event Planning", "Tourism"],
            requirements: "D+ in English",
            career: ["Hotel Manager", "Restaurant Supervisor", "Event Coordinator"]
        },
        {
            id: 7,
            title: "Certificate in Plumbing",
            institution: "TVET Track",
            duration: "1.5 years",
            level: "Certificate",
            description: "Practical training in plumbing installation and maintenance.",
            topics: ["Pipe Fitting", "Water Systems", "Drainage", "Maintenance", "Safety"],
            requirements: "D in Mathematics",
            career: ["Plumber", "Maintenance Technician", "Construction Specialist"]
        }
    ],
    "Short Courses": [
        {
            id: 8,
            title: "Digital Marketing",
            institution: "Both Tracks",
            duration: "6 months",
            level: "Certificate",
            description: "Learn modern digital marketing techniques and strategies.",
            topics: ["Social Media", "SEO", "Content Marketing", "Email Marketing", "Analytics"],
            requirements: "Basic computer knowledge",
            career: ["Digital Marketer", "Social Media Manager", "Content Strategist"]
        },
        {
            id: 9,
            title: "Web Development",
            institution: "Both Tracks",
            duration: "6 months",
            level: "Certificate",
            description: "Practical web development and design skills.",
            topics: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "Responsive Design"],
            requirements: "Basic computer knowledge",
            career: ["Web Developer", "Frontend Developer", "WordPress Developer"]
        }
    ]
};

const Courses = () => {
    const [selectedCategory, setSelectedCategory] = useState("University Programs");
    const [searchTerm, setSearchTerm] = useState("");

    const filterCourses = () => {
        if (!searchTerm) return courses[selectedCategory];
        
        return courses[selectedCategory].filter(course => 
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase())) ||
            course.career.some(career => career.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    };

    return (
        <div className="courses-container">
            <div className="courses-header">
                <h1>Academic and Technical Programs</h1>
                <p>Explore University Degrees and Technical Certifications</p>
                
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search programs by name, description, or career..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="category-tabs">
                {Object.keys(courses).map(category => (
                    <button
                        key={category}
                        className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="courses-grid">
                {filterCourses().map(course => (
                    <div key={course.id} className="course-card">
                        <div className="course-header">
                            <h3>{course.title}</h3>
                            <span className="course-level">{course.level}</span>
                        </div>
                        <span className="institution-tag">{course.institution}</span>
                        <p className="course-description">{course.description}</p>
                        <div className="course-details">
                            <span className="duration">
                                <i className="far fa-clock"></i> {course.duration}
                            </span>
                            <span className="requirements">
                                Required: {course.requirements}
                            </span>
                        </div>
                        <div className="course-topics">
                            <h4>Key Topics:</h4>
                            {course.topics.map(topic => (
                                <span key={topic} className="topic-tag">{topic}</span>
                            ))}
                        </div>
                        <div className="career-paths">
                            <h4>Career Paths:</h4>
                            {course.career.map(path => (
                                <span key={path} className="career-tag">{path}</span>
                            ))}
                        </div>
                        <button className="enroll-button">Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
