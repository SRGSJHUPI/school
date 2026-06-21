print("NEW CHATBOT_RESPONSES LOADED")
RESPONSES = {
    (
    "admission", "admissions",
    "apply", "application",
    "join", "enroll",
    "enrolment", "admit"
):
"Admissions at Rising Nalanda start from Class 3 onwards. Admission is based on an admission test, the financial condition of parents and other necessary parameters. For detailed admission procedures, eligibility criteria and guidelines, visit: https://srgsjhupi.github.io/school/admission.html",

(
    "fee", "fees",
    "cost", "price",
    "payment", "discount",
    "waiver", "scholarship",
    "scholarships"
):
"Rising Nalanda follows an inclusive fee structure designed to make quality education accessible. Financially weaker students may receive fee concessions, scholarships and educational support. For complete fee structures, exemptions, scholarships and payment systems, visit: https://srgsjhupi.github.io/school/admission.html",

(
    "course", "courses",
    "subject", "subjects",
    "curriculum", "syllabus",
    "study", "studies"
):
"Rising Nalanda offers Mathematics, Physics, Chemistry, Biology, Computer Science, English, Economics, History, Geography, Law, Ethics, Research Projects and many other subjects. The curriculum focuses on conceptual understanding, critical thinking and skill development. For complete academic information, visit: https://srgsjhupi.github.io/school/academics.html",

(
    "jee", "neet",
    "olympiad", "clat",
    "nda", "competitive",
    "competition"
):
"Rising Nalanda provides preparation support for JEE, NEET, Olympiads, CLAT, NDA and other competitive examinations. The academic structure is designed to build strong fundamentals and problem-solving abilities from an early stage. For details, visit: https://srgsjhupi.github.io/school/academics.html",

(
    "research", "project",
    "projects", "innovation",
    "invent", "experiment",
    "experiments"
):
"Research and innovation are important parts of learning at Rising Nalanda. Students work on projects that develop creativity, scientific thinking, problem-solving skills and practical knowledge. For details about research programs and project structures, visit: https://srgsjhupi.github.io/school/research.html",

(
    "faculty", "teacher",
    "teachers", "mentor",
    "mentors", "staff"
):
"Rising Nalanda emphasizes mentorship, conceptual teaching and individual student guidance. Faculty members are expected to support both academic excellence and character development. For more information, visit: https://srgsjhupi.github.io/school/faculty.html",

(
    "contact", "phone",
    "email", "address",
    "location", "whatsapp"
):
"You can contact Rising Nalanda through the contact details provided on the website. Information regarding phone numbers, email addresses, location and communication channels is available at: https://srgsjhupi.github.io/school/contact.html",

(
    "club", "clubs",
    "activity", "activities",
    "robotics", "coding",
    "sports", "music",
    "art"
):
"Rising Nalanda encourages holistic development through coding, robotics, sports, arts, student clubs and various co-curricular activities. These activities help students build leadership, teamwork and creativity. Visit: https://srgsjhupi.github.io/school/faculty.html",

(
    "vision", "mission",
    "goal", "purpose",
    "objective", "aim"
):
"Rising Nalanda aims to provide inclusive, concept-driven education rooted in ethics, scientific thinking and social responsibility. The goal is to empower students with knowledge, character and leadership qualities. Visit: https://srgsjhupi.github.io/school/",

(
    "aec",
    "ambedkar excellence certificate"
):
"The Ambedkar Excellence Certificate (AEC) is designed to recognize merit and provide support to deserving students. It may also be linked with fee concessions and educational benefits. For complete details, visit: https://srgsjhupi.github.io/school/admission.html",

(
    "ffps",
    "forward fee payment system"
):
"The Forward Fee Payment System (FFPS) is one of the fee models used by Rising Nalanda. Eligible students may receive concessions and support under this structure. For complete rules and eligibility criteria, visit: https://srgsjhupi.github.io/school/admission.html",

(
    "rfps",
    "reverse fee payment system"
):
"The Reverse Fee Payment System (RFPS) is designed to support eligible students while encouraging regular attendance and academic commitment. For complete details, visit: https://srgsjhupi.github.io/school/admission.html",

(
    "girl child",
    "girls",
    "daughter"
):
"Rising Nalanda provides additional support and concessions for girl students as part of its commitment to equality and educational opportunity. For complete details, visit: https://srgsjhupi.github.io/school/admission.html",

(
    "technology",
    "ai",
    "artificial intelligence",
    "machine learning",
    "ml"
):
"Technology education is an important part of Rising Nalanda. Students are exposed to Artificial Intelligence, Machine Learning, coding, robotics and other emerging technologies. Visit: https://srgsjhupi.github.io/school/academics.html",

(
    "iit",
    "aiims",
    "nlu"
):
"Rising Nalanda aims to prepare students for admission to premier institutions such as IITs, AIIMS and NLUs through strong academic foundations and competitive exam preparation. Visit: https://srgsjhupi.github.io/school/academics.html",

(
    "parent",
    "parents",
    "guardian",
    "guardians"
):
"Parents play a vital role in a student's success at Rising Nalanda. The school encourages active parental involvement, cooperation and support in academic and personal development. For parental guidelines and expectations, visit: https://srgsjhupi.github.io/school/admission.html",

(
    "complaint",
    "complaints",
    "review",
    "reviews",
    "feedback",
    "grievance"
):
"Rising Nalanda maintains a complaint and review system to ensure transparency, accountability and continuous improvement. Students and parents are encouraged to provide constructive feedback. For details, visit: https://srgsjhupi.github.io/school/admission.html",

(
    "support",
    "donation",
    "donate",
    "contribute",
    "help school"
):
"Rising Nalanda welcomes support from individuals and organizations who wish to contribute towards quality education for students, especially those from financially weaker backgrounds. For more information, visit: https://srgsjhupi.github.io/school/",

(
    "library",
    "reading",
    "books"
):
"Rising Nalanda promotes reading habits, self-learning and intellectual growth through library resources and academic activities designed to strengthen knowledge and communication skills. Visit: https://srgsjhupi.github.io/school/gallery.html",

(
    "smart class",
    "smart classes",
    "digital classroom",
    "digital learning"
):
"Rising Nalanda uses smart classes and modern teaching methods to make learning more interactive, engaging and effective. Visit: https://srgsjhupi.github.io/school/gallery.html",

(
    "science fair",
    "science exhibition"
):
"Students participate in science fairs and project-based activities that encourage innovation, experimentation and scientific thinking. Visit: https://srgsjhupi.github.io/school/gallery.html",

(
    "coding",
    "programming",
    "web development",
    "app development"
):
"Rising Nalanda encourages students to learn coding, programming, web development and app development through practical and project-based learning. Visit: https://srgsjhupi.github.io/school/academics.html",

(
    "robotics",
):
"Robotics is an important part of Rising Nalanda's technology-focused learning approach, helping students develop creativity, engineering skills and problem-solving abilities. Visit: https://srgsjhupi.github.io/school/academics.html",

(
    "toefl",
    "gre"
):
"Rising Nalanda encourages students to prepare for international examinations such as TOEFL and GRE while building strong communication and academic skills. Visit: https://srgsjhupi.github.io/school/academics.html",

(
    "ntse",
    "kvpy"
):
"Students are encouraged to prepare for national-level talent and scholarship examinations such as NTSE and KVPY through structured academic guidance. Visit: https://srgsjhupi.github.io/school/academics.html",

(
    "founder",
    "founder's motivation"
):
"Rising Nalanda was established with the vision of providing high-quality, inclusive and concept-driven education while promoting scientific thinking, ethics and social responsibility. Visit: https://srgsjhupi.github.io/school/",

(
    "ethics",
    "values",
    "morality",
    "moral values"
):
"Ethics, equality, rationality, compassion and social responsibility are core values of Rising Nalanda and are integrated into the learning experience. Visit: https://srgsjhupi.github.io/school/",

(
    "scientific temper",
    "scientific thinking",
    "critical thinking"
):
"Rising Nalanda encourages scientific thinking, critical reasoning and evidence-based learning to help students become independent and responsible thinkers. Visit: https://srgsjhupi.github.io/school/",

(
    "opening hours",
    "working hours",
    "school timing",
    "school timings"
):
"Please visit the Contact page for the latest opening hours, office timings and communication details: https://srgsjhupi.github.io/school/contact.html",

(
    "faculty vacancy",
    "join faculty",
    "teacher vacancy",
    "teaching job",
    "become teacher"
):
"Rising Nalanda welcomes passionate and qualified educators who are committed to concept-based teaching, mentorship and student development. For faculty opportunities, visit: https://srgsjhupi.github.io/school/faculty.html",


}


def local_answer(question):

    q = question.lower()

    for keywords, answer in RESPONSES.items():

        if any(word in q for word in keywords):

            print("MATCHED:", keywords)

            return answer

    return None






# def local_answer(question):

#     q = question.lower()

#     if any(word in q for word in
#        ["course", "courses",
#         "jee", "neet",
#         "olympiad", "subject",
#         "subjects"]):

#         return (
#         "Rising Nalanda offers Mathematics, Physics, "
#         "Chemistry, Biology, Computer Science, English, "
#         "Economics, History, Geography, Law, Ethics, "
#         "Research Projects and many other subjects which also helps to prepare for JEE, NEET and other competitive exams."
#     )

#     if any(word in q for word in
#         ["admission", "admissions",
#             "apply", "application",
#             "join", "enroll",
#             "enrolment", "admit"]):

#         return (
#             "Admissions start from Class 3 onwards. "
#             "Admission is based on an admission test, "
#             "financial condition of parents and other "
#             "necessary parameters."
#         )

#     if any(word in q for word in
#         ["fee", "fees",
#             "scholarship", "cost",
#             "price", "payment",
#             "discount", "waiver"]):

#         return (
#             "Rising Nalanda follows an inclusive fee "
#             "structure. Financially weaker students "
#             "may receive substantial fee concessions "
#             "and scholarships."
#         )

#     if any(word in q for word in
#         ["course", "courses",
#             "subject", "subjects",
#             "curriculum", "syllabus",
#             "study", "studies"]):

#         return (
#             "Rising Nalanda offers Mathematics, Physics, "
#             "Chemistry, Biology, Computer Science, English, "
#             "Economics, History, Geography, Law, Ethics, "
#             "Research Projects and many other subjects."
#         )

#     if any(word in q for word in
#         ["jee", "neet",
#             "olympiad", "clat",
#             "nda", "competitive exam",
#             "competition"]):

#         return (
#             "Rising Nalanda provides preparation support "
#             "for JEE, NEET, Olympiads, NDA, CLAT and "
#             "other competitive examinations."
#         )

#     if any(word in q for word in
#         ["research", "project",
#             "innovation", "invent",
#             "experiment"]):

#         return (
#             "Students participate in research projects, "
#             "innovation activities and mentorship-based learning."
#         )

#     if any(word in q for word in
#         ["faculty", "teacher",
#             "teachers", "mentor",
#             "mentors", "staff"]):

#         return (
#             "Rising Nalanda focuses on mentorship, "
#             "conceptual teaching and student guidance."
#         )

#     if any(word in q for word in
#         ["contact", "phone",
#             "email", "address",
#             "location", "whatsapp"]):

#         return (
#             "Please visit the Contact page for phone numbers, "
#             "email address, location and communication details."
#         )

#     if any(word in q for word in
#         ["club", "clubs",
#             "activity", "activities",
#             "robotics", "coding",
#             "sports", "music", "art"]):

#         return (
#             "Rising Nalanda offers clubs and activities "
#             "including coding, robotics, sports, arts "
#             "and other student development programs."
#         )

#     if any(word in q for word in
#         ["vision", "mission",
#             "goal", "purpose",
#             "objective", "aim"]):

#         return (
#             "Rising Nalanda aims to provide inclusive, "
#             "concept-driven education rooted in ethics, "
#             "scientific thinking and social responsibility."
#         )

#     if any(word in q for word in
#            ["research", "project"]):

#         return (
#             "Students participate in research projects, "
#             "innovation activities and mentorship-based "
#             "learning."
#         )

#     if any(word in q for word in
#            ["faculty", "teacher"]):

#         return (
#             "Rising Nalanda focuses on mentorship, "
#             "conceptual teaching and student guidance."
#         )

#     return None



