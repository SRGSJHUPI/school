
  //This file is only used in academic_content_html_way.html which is not active file of academics.

  
  // Toggle class panels
  const classHeadings = document.querySelectorAll('.class-heading');
classHeadings.forEach(heading => {
  heading.addEventListener('click', () => {
    heading.classList.toggle('active');
    const classPanel = heading.nextElementSibling;
    if (classPanel.style.display === "block") {
      classPanel.style.display = "none";
    } else {
      classPanel.style.display = "block";
      heading.style.hover = "background-color: red;"; // Change color on hover
    }
    // Optionally, update classPanel border here too:
    classPanel.style.borderLeftColor = heading.classList.contains('active') ? 'red' : '#2980b9';
  });
});


  // Toggle course accordions
  const acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  }
