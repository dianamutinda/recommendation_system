import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            text: "Hello! I'm your Career Guide Assistant. How can I help you today?",
            sender: 'bot'
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const newMessages = [...messages, { text: inputMessage, sender: 'user' }];
        setMessages(newMessages);
        setLoading(true);

        try {
            const response = await axios.post("http://127.0.0.1:5000/chatbot", 
                     {message: inputMessage }, // Data payload
                     {headers: { "Content-Type": "application/json" } } // Headers
                
            );
            console.log("API Response:", response.data);

            if (response.data.success) {
                setMessages([...newMessages, { text: response.data.response, sender: 'bot' }]);
            } else {
                setMessages([...newMessages, { text: "Sorry, I couldn't understand.", sender: 'bot' }]);
            }
        } catch (error) {
            setMessages([...newMessages, { text: "Error connecting to the server.", sender: 'bot' }]);
        }

        setInputMessage('');
        setLoading(false);
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
                <button type="submit" className="send-button" disabled={loading}>
                    {loading ? "Loading..." : "Send"}
                </button>
            </form>
        </div>
    );
};

export default Chatbot;
