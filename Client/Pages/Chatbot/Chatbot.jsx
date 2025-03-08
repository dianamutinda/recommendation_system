import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            text: "Hello! I'm your Career Guide Assistant. How can I help you today?",
            sender: 'bot'
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const careerResponses = {
        keywords: {
            'career path': 'Consider your interests, skills, and values when choosing a career path. I can help you explore different options based on your preferences.',
            'resume': 'A strong resume should highlight your relevant skills, experience, and achievements. Make sure to tailor it for each job application.',
            'interview': 'Prepare for interviews by researching the company, practicing common questions, and preparing examples of your experiences.',
            'skills': 'Focus on both technical and soft skills. Technical skills vary by field, but soft skills like communication and problem-solving are valuable in any career.',
            'salary': 'Salary expectations vary by industry, location, and experience level. Research industry standards and consider the total compensation package.',
            'internship': 'Internships provide valuable experience and networking opportunities. Look for opportunities that align with your career goals.',
            'education': 'Consider your career goals when choosing educational paths. Some careers require specific degrees or certifications.',
            'networking': 'Build your professional network through LinkedIn, industry events, and professional associations.',
            'job search': 'Use multiple channels for job searching: company websites, job boards, LinkedIn, and professional networks.',
            'industry': 'Research industry trends and growth prospects to make informed career decisions.'
        },
        default: "I'm not sure about that specific topic. Could you rephrase your question or ask about career paths, skills, education, job search, or interview preparation?"
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const findBestResponse = (input) => {
        const lowercaseInput = input.toLowerCase();
        for (const [keyword, response] of Object.entries(careerResponses.keywords)) {
            if (lowercaseInput.includes(keyword)) {
                return response;
            }
        }
        return careerResponses.default;
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        // Add user message
        const newMessages = [...messages, { text: inputMessage, sender: 'user' }];
        setMessages(newMessages);

        // Generate bot response
        const botResponse = findBestResponse(inputMessage);
        setTimeout(() => {
            setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
        }, 500);

        setInputMessage('');
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h2>Career Guide Assistant</h2>
                <p>Ask me anything about careers!</p>
            </div>
            
            <div className="messages-container">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        <div className="message-content">
                            {message.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="input-form">
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your career question here..."
                    className="message-input"
                />
                <button type="submit" className="send-button">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chatbot;
