from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv
from google import genai
from knowledge import load_school_content

import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

school_content = load_school_content()

@app.get("/")
def home():

    return {
        "message": "Rising Nalanda AI API Running"
    }

@app.get("/chat")
def chat(
    question: str,
    history: str = ""
):

    prompt = f"""
You are the friendly AI Admission Assistant of Rising Nalanda.

Answer naturally and conversationally.

Keep answers under 100 words whenever possible.

Do not use bullet points unless specifically requested.

Summarize information in simple language suitable for parents and students.

Use only the school information below as your source.

If the information is unavailable, reply exactly:

Chutya ho kaa 🤣😂🤣 asan se question puch... ye sab nehai pata mujhe... I DON'T KNOW... I could not find that information on the school website.

School Information:

{school_content}

Conversation History:

{history}

Current Question:

{question}
"""

    try:

            response = client.models.generate_content(
                model="gemini-2.0-flash",
                contents=prompt
            )

            return {
                "answer": response.text
            }

    except Exception as e:

            print(e)

            return {
                "answer": "The AI assistant is temporarily busy. Please try again later."
            }