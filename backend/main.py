from chatbot_responses import local_answer
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv
from google import genai
from knowledge import load_school_content

import os
import random

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

def get_relevant_content(question):

    q = question.lower()

    if any(word in q for word in
           ["fee", "fees", "scholarship"]):

        return school_content.get(
            "admission.html",
            ""
        )

    if any(word in q for word in
           ["research", "project"]):

        return school_content.get(
            "research.html",
            ""
        )

    if any(word in q for word in
           ["faculty", "teacher"]):

        return school_content.get(
            "faculty.html",
            ""
        )
    if any(word in q for word in
        ["aec", "ambedkar excellence certificate", "certificate", "scholarship"]):

        return school_content.get(
            "admission.html",
            ""
        )

    if any(word in q for word in
           ["course", "jee", "neet",
            "olympiad", "subject"]):

        return school_content.get(
            "academics.html",
            ""
        )

    return ""

@app.get("/")
def home():

    return {
        "message": "Rising Nalanda AI API Running"
    }




def extract_best_part(question, text):

    q = question.lower()

    if "fee" in q or "fees" in q or "scholarship" in q:

        idx = text.lower().find("fees and scholarships")

        if idx != -1:

            return text[idx:idx+1200]

    if "research" in q:

        idx = text.lower().find("research")

        if idx != -1:

            return text[idx:idx+1200]

    if "faculty" in q or "teacher" in q:

        idx = text.lower().find("faculty")

        if idx != -1:

            return text[idx:idx+1200]

    return text[:800]

def search_content(question, text):

    q_words = question.lower().split()

    best_pos = -1
    best_score = 0

    text_lower = text.lower()

    for word in q_words:

        pos = text_lower.find(word)

        if pos != -1:
            best_pos = pos
            best_score += 1

    if best_pos == -1:
        return None

    start = best_pos
    end = min(len(text), best_pos + 700)

    return text[start:end]

@app.get("/chat")
def chat(
    question: str,
    # history: str = ""
   
):
    
    answer = local_answer(question)

    if answer:

        return {
            "answer": answer
        }
    
    relevant_content = get_relevant_content(question)

    if relevant_content:

        best_answer = search_content(
            question,
            relevant_content
        )

        if best_answer:

            return {
                "answer": best_answer
            }
    # truly unanswered



    print("Question received:", question)
    
    relevant_content = get_relevant_content(question)

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

{relevant_content}

Current Question:

{question}
"""

    try:

        print("Calling Gemini...")

        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )

        return {
            "answer": response.text
        }

    except Exception as e:

        print("ERROR:", e)

        fallbacks = [
            "I could not find that information on the Rising Nalanda website.",
            "Chutya ho kaa 🤣😂🤣 asan se question puch... ye sab nehai pata mujhe... I DON'T KNOW...",
            "Legends never Die but you will... 😂🤣🤣🤣",
            "Ruk ja padhala... kon si class me admission lega BSDK🤣🤣🤣 go to https://srgsjhupi.github.io/school/index.html#fee-support and submit your fee first.",
            "First say 5 times - Lord Rohit Gautam are Great... then I will answer...",
            "Tu🫵 agle janam me gadha🫏 banega...😹😹",
            "🖐️Aisa lagega na muh pe...",
            "pahle aise karo 👉fir aise👆fir aise 👇aur finally aise karo☝️",
            "🦹‍♀️Batman dekha hai kabhi zindgi me? le abhi dekh le 🦹‍♀️...",
            "That information is not currently available in my knowledge base. Please contact Rising Nalanda for details.",
            "I am still learning about that topic. Please check the relevant page or contact the school.",
            "Sorry, I could not find a reliable answer to that question from the school information available to me."
        ]

        return {
            "answer": random.choice(fallbacks)
        }