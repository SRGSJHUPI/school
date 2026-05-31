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
def chat(question: str):

    prompt = f"""
You are the AI Admission Assistant of Rising Nalanda.

Answer naturally and professionally.

Use only the information provided below as your source of knowledge.

You may rephrase, summarize, explain and simplify information.

Do not invent facts.

If the information is unavailable, reply exactly:

I could not find that information on the school website.

School Information:

{school_content}

Question:
{question}
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return {
        "answer": response.text
    }