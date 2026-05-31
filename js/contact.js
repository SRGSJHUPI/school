// ---------------- form submission and a popup modal
//  document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('messageForm');
//     const popup = document.getElementById('popupModal');
//     const closeBtn = document.getElementById('closeModal');

//     form.addEventListener('submit', function (e) {
//       e.preventDefault(); // prevent scroll / reload
//       popup.classList.remove('hidden'); // show modal
//     });

//     closeBtn.addEventListener('click', function () {
//       popup.classList.add('hidden'); // hide modal
//     });
//   });

//   // contact.js (your frontend JS file)
// document.getElementById('messageForm').addEventListener('submit', async function(e) {
//   e.preventDefault();

//   // Collect form data
//   const formData = {
//     name: e.target.querySelector('input[type="text"]').value,
//     email: e.target.querySelector('input[type="email"]').value,
//     phone: e.target.querySelector('input[type="tel"]').value,
//     subject: e.target.querySelector('select').value,
//     message: e.target.querySelector('textarea').value,
//   };

//   try {
//     const response = await fetch('http://localhost:5000/api/contact', {  // URL of your backend
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       alert('Message sent successfully!');
//       e.target.reset();
//     } else {
//       alert('Failed to send message.');
//     }
//   } catch(error) {
//     alert('Error: ' + error.message);
//   }
// });


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('messageForm');
  const popup = document.getElementById('popupModal');
  const closeBtn = document.getElementById('closeModal');

  if(form){

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
      name: form.querySelector('input[type="text"]').value,
      email: form.querySelector('input[type="email"]').value,
      phone: form.querySelector('input[type="tel"]').value,
      subject: form.querySelector('select').value,
      message: form.querySelector('textarea').value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
  // Success modal content
  popup.querySelector('h2').textContent = 'Thank you!';
  popup.querySelector('p').textContent = 'Your message was submitted successfully.';
  popup.classList.remove('hidden');
  form.reset();
} else {
  // Error modal content
  popup.querySelector('h2').textContent = 'Unable to Send';
  popup.querySelector('p').textContent = 'Please send a mail at risingnalanda.org@gmail.com';
  popup.classList.remove('hidden');
}

    } catch (error) {
      alert('Error: ' + error.message);
    }
  });

  closeBtn.addEventListener('click', function () {
    popup.classList.add('hidden'); // Hide modal when close clicked
  });
}
});







// AI chat bot ka function hai ye
let conversationHistory = "";

async function sendMessage() {

    const input =
      document.getElementById("user-input");

    const question =
      input.value;

    if (!question.trim()) return;

    const chatBox =
      document.getElementById("chat-box");

    chatBox.innerHTML +=
      `<p><strong>You:</strong> ${question}</p>`;

    input.value = "";
    // show typing message
    chatBox.innerHTML +=
  `<p id="typing"><strong>Assistant:</strong> Typing...</p>`;

    try {

        const response =
          await fetch(
              "https://school-zy1r.onrender.com/chat?"
              + "question=" + encodeURIComponent(question)
              + "&history=" + encodeURIComponent(conversationHistory)
            );

                  const data =
            await response.json();

          // Remove typing message
          document.getElementById("typing").remove();

          chatBox.innerHTML +=
            `<p><strong>Assistant:</strong> ${data.answer}</p>`;

            conversationHistory +=
              `User: ${question}\n`;

            conversationHistory +=
              `Assistant: ${data.answer}\n\n`;

    }

    catch(error) {

    const typing =
      document.getElementById("typing");

    if (typing) {
        typing.remove();
    }

    chatBox.innerHTML +=
      `<p><strong>Assistant:</strong> Unable to connect.</p>`;

        console.error(error);
    }

    chatBox.scrollTop =
      chatBox.scrollHeight;
}

document.getElementById("user-input")
.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});

function askQuestion(question) {

    document.getElementById(
      "user-input"
    ).value = question;

    sendMessage();
}

function clearChat() {

    conversationHistory = "";

    document.getElementById("chat-box").innerHTML =
      `<p><strong>Assistant:</strong>
      Hello! Ask me about admissions,
      fees, courses, or school facilities.
      </p>`;
}