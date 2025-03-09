
import React, { useState } from 'react';
import './System.css';

const Dashboard = () => {
  const [grades, setGrades] = useState({
    mean_grade: '',
    mathematics: '',
    english: '',
    kiswahili: '',
    sciences: ''
  });
  const [interests, setInterests] = useState([]);
  const [cluster, setCluster] = useState('');

  const clusters = [
    { value: 'sciences', label: 'Sciences Cluster' },
    { value: 'arts', label: 'Arts and Humanities Cluster' },
    { value: 'business', label: 'Business and Economics Cluster' },
    { value: 'technology', label: 'Technology Cluster' }
  ];

  const interestOptions = [
    'Sciences & Research',
    'Technology & Computing',
    'Business & Entrepreneurship',
    'Healthcare & Medicine',
    'Teaching & Education',
    'Arts & Design',
    'Law & Justice',
    'Agriculture & Environment'
  ];
  
  const [recommendations, setRecommendations] = useState([
    {
      course: 'Bachelor of Medicine and Surgery',
      cluster: 'Sciences',
      requirements: {
        meanGrade: 'A-',
        clusterPoints: '45',
        keySubjects: ['Biology', 'Chemistry', 'Mathematics/Physics']
      },
      career_paths: ['Medical Doctor', 'Surgeon', 'Medical Researcher'],
      
    },
    {
      course: 'Bachelor of Business Science',
      cluster: 'Business',
      requirements: {
        meanGrade: 'B+',
        clusterPoints: '40',
        keySubjects: ['Mathematics', 'English', 'Business Studies']
      },
      career_paths: ['Business Analyst', 'Investment Banker', 'Management Consultant'],
      
    },
    {
      course: 'Bachelor of Computer Science',
      cluster: 'Technology',
      requirements: {
        meanGrade: 'B+',
        clusterPoints: '38',
        keySubjects: ['Mathematics', 'Physics', 'Computer Studies']
      },
      career_paths: ['Software Developer', 'Systems Analyst', 'Data Scientist'],
      
    }
  ]);

  const handleGradeChange = (subject, value) => {
    setGrades(prev => ({
      ...prev,
      [subject]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setInterests(prev => {
      if (prev.includes(interest)) {
        return prev.filter(i => i !== interest);
      }
      return [...prev, interest];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to get personalized recommendations
    console.log('Form submitted:', { grades, interests, cluster });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <h2>Career & Course Recommendations</h2>
        <p className="dashboard-subtitle">Find the best university courses based on your KCSE performance and interests</p>

        <div className="dashboard-content">
          <div className="profile-section">
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <label>KCSE Mean Grade</label>
                <select
                  className="form-input"
                  value={grades.mean_grade}
                  onChange={(e) => handleGradeChange('mean_grade', e.target.value)}
                >
                  <option value="">Select Mean Grade</option>
                  <option value="A">A</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="B-">B-</option>
                  <option value="C+">C+</option>
                  <option value="C">C</option>
                </select>
              </div>

              <div className="form-group">
                <label>Key Subject Grades</label>
                <div className="subject-grades">
                  <div>
                    <label>Mathematics</label>
                    <select
                      className="form-input"
                      value={grades.mathematics}
                      onChange={(e) => handleGradeChange('mathematics', e.target.value)}
                    >
                      <option value="">Grade</option>
                      {['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C'].map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label>English</label>
                    <select
                      className="form-input"
                      value={grades.english}
                      onChange={(e) => handleGradeChange('english', e.target.value)}
                    >
                      <option value="">Grade</option>
                      {['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C'].map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label>Kiswahili</label>
                    <select
                      className="form-input"
                      value={grades.kiswahili}
                      onChange={(e) => handleGradeChange('kiswahili', e.target.value)}
                    >
                      <option value="">Grade</option>
                      {['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C'].map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label>Sciences</label>
                    <select
                      className="form-input"
                      value={grades.sciences}
                      onChange={(e) => handleGradeChange('sciences', e.target.value)}
                    >
                      <option value="">Grade</option>
                      {['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D'].map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Preferred Cluster</label>
                <select
                  className="form-input"
                  value={cluster}
                  onChange={(e) => setCluster(e.target.value)}
                >
                  <option value="">Select Cluster</option>
                  {clusters.map(c => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Areas of Interest</label>
                <div className="interests-grid">
                  {interestOptions.map(interest => (
                    <div key={interest} className="interest-item">
                      <input
                        type="checkbox"
                        id={interest}
                        checked={interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                      />
                      <label htmlFor={interest}>{interest}</label>
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Get Recommendations
              </button>
            </form>
          </div>

          <div className="recommendations-section">
            <h3>Recommended Courses</h3>
            <div className="recommendations-grid">
              {recommendations.map((rec, index) => (
                <div key={index} className="career-card">
                  <div className="career-header">
                    <h4>{rec.course}</h4>
                    <span className="university-badge">{rec.university}</span>
                  </div>
                  <div className="requirements-section">
                    <h5>Entry Requirements:</h5>
                    <ul>
                      <li>Mean Grade: {rec.requirements.meanGrade}</li>
                      <li>Cluster Points: {rec.requirements.clusterPoints}</li>
                      <li>Key Subjects: {rec.requirements.keySubjects.join(', ')}</li>
                    </ul>
                  </div>
                  <div className="career-paths">
                    <h5>Career Paths:</h5>
                    <ul>
                      {rec.career_paths.map((path, idx) => (
                        <li key={idx}>{path}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="course-fees">
                    <span>{rec.estimated_fees}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
