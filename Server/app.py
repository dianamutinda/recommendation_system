from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv
from flask_cors import CORS
import google.generativeai as genai
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

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
        user_message = user_data.get("message", "").strip()  # Get message from request

        if not user_message:
          return jsonify({"success": False, "error": "Message cannot be empty."}), 400

        user_prompt = f"""
        I am a career chatbot. Based on the following user input, suggest suitable career options.

        User message: {user_message}

        Provide a brief explanation for each recommended career.
        """

        
        model = genai.GenerativeModel("gemini-1.5-pro")
        response = model.generate_content(user_prompt) 
        
        recommendations = response.text if response.text else "No recommendations found."
        
        return jsonify({"success": True, "response": recommendations})
    except Exception as e:
        return jsonify({"success": False, "error":str(e)}),500
        
if __name__ == '__main__':
    app.run(debug=True)