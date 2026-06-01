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

def local_answer(question):

    q = question.lower()

    if any(word in q for word in
       ["course", "courses",
        "jee", "neet",
        "olympiad", "subject",
        "subjects"]):

        return (
        "Rising Nalanda offers Mathematics, Physics, "
        "Chemistry, Biology, Computer Science, English, "
        "Economics, History, Geography, Law, Ethics, "
        "Research Projects and many other subjects."
    )

    # if any(word in q for word in
    #        ["fee", "fees", "scholarship"]):

    #     return (
    #         "Rising Nalanda follows an inclusive fee "
    #         "structure and supports economically weaker "
    #         "families. Please visit the Admission page "
    #         "for details."
    #     )

    if any(word in q for word in
           ["research", "project"]):

        return (
            "Students participate in research projects, "
            "innovation activities and mentorship-based "
            "learning."
        )

    if any(word in q for word in
           ["faculty", "teacher"]):

        return (
            "Rising Nalanda focuses on mentorship, "
            "conceptual teaching and student guidance."
        )

    return None


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

        best_answer = extract_best_part(
        question,
        relevant_content
    )

        return {
            "answer": best_answer[:500]
    }
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

        return {
        "answer":
        "I could not find that information. Please contact the school for more details."
    }