from dotenv import load_dotenv
from google import genai
from knowledge import load_school_content

import os

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

school_content = load_school_content()

question = input("Ask a question: ")

prompt = f"""

You are the friendly AI Admission Assistant of Rising Nalanda.

Answer in a helpful, concise and conversational manner.

Answer in 3-5 concise sentences.

Do not use bullet points unless necessary.

Keep answers under 120 words.

Instead, understand the information and explain it naturally.

Use the website content as your only source of truth.

If information is unavailable, say:
Chutiya ho kaa 😂🤣😂 asan sawal puch ye sab website par hai hi nehai... I could not find that information on the school website.


School Information:

{school_content}

Question:
{question}
"""

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=prompt
)

print("\nANSWER:\n")
print(response.text)