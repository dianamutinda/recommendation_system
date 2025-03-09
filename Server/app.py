from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv
import google.generativeai as genai
import os

load_dotenv()

app = Flask(__name__)
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

if not GEMINI_API_KEY:
    raise ValueError("Missing Google Gemini API Key. Please set it in the .env file.")
genai.configure(api_key=GEMINI_API_KEY)
@app.route('/', methods=['GET'])

def home():
    return "Welcome to the Career Recommendation System Chatbot"
@app.route('/chatbot', methods=['POST'])
def chatbot():
    try:

        user_data = request.json
        skills = user_data.get("skills", [])
        interests = user_data.get("interests", [])
        
        if not skills and not interests:
            return jsonify({"success": False, "error": "Please provide skills or interests."}), 400
        user_prompt = f"""
        I am a career chatbot. Based on the following skills and interests, suggest suitable career options.

        Skills: {', '.join(skills) if skills else 'Not provided'}
        Interests: {', '.join(interests) if interests else 'Not provided'}
        Provide a brief explanation for each recommended career.
        """
        
        model = genai.GenerativeModel("gemini-1.5-pro")
        response = model.generate_content(user_prompt) 
        
        recommendations = response.text if response.text else "No recommendations found."
        
        return jsonify({"success": True, "recommendations": recommendations})
    except Exception as e:
        return jsonify({"success": False, "error":str(e)}),500
        
if __name__ == '__main__':
    app.run(debug=True)