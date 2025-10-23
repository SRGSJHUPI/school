document.addEventListener("DOMContentLoaded", () => {
  const galleryData = {
    "Smart Class": {
      2027: [
        "images/Research Projects/student following robot.png",
        "images/Research Projects/students in class with mini robot wiring.png"
      ],
      2028: [
        "images/Research Projects/student following robot.png",
        "images/Research Projects/students in class with mini robot wiring.png"
      ],
      2029: [
        "images/Research Projects/student following robot.png",
        "images/Research Projects/students in class with mini robot wiring.png"
      ]
    },
    "Science Fair": {
      2027: [
        "images/Research Projects/students with and and wood plane.png",
        "images/Research Projects/student connecting wire of humanoid robot.png"
      ],
      2028: [
        "images/Research Projects/student following robot.png",
        "images/Research Projects/students in class with mini robot wiring.png",
        "images/Research Projects/student in lab with mini robot.png",
        "images/Research Projects/student with fire extinguiser.png",
        "images/Research Projects/students with and and wood plane.png",
        "images/Research Projects/student connecting wire of humanoid robot.png"
      ],
      2029: [
        "images/Research Projects/student following robot.png",
        "images/Research Projects/students in class with mini robot wiring.png"
      ]
    },
    "Robotics Club": {
      2027: [
        "images/Research Projects/student in lab with mini robot.png",
        "images/Research Projects/student with fire extinguiser.png"
      ],
      2028: [
        "images/Research Projects/student following robot.png",
        "images/Research Projects/students in class with mini robot wiring.png",
        "images/Research Projects/student in lab with mini robot.png",
        "images/Research Projects/student with fire extinguiser.png"
      ]
    },
    "Mentoring": {
      2027: [
        "images/Research Projects/me pilot.png",
        "images/Research Projects/student connecting wire of humanoid robot.png"
      ],
      2028: [
        "images/Research Projects/student following robot.png",
        "images/Research Projects/students in class with mini robot wiring.png"
      ]
    }
  };

  const galleryContainer = document.getElementById("galleryContainer");

  galleryContainer.innerHTML = "";

  const sectionsView = document.createElement("div");
  sectionsView.className = "space-y-6 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto";

  const yearsView = document.createElement("div");
  yearsView.className = "hidden space-y-6 max-w-6xl mx-auto text-center";

  const photosView = document.createElement("div");
  photosView.className = "hidden space-y-6 max-w-6xl mx-auto text-center";

  galleryContainer.appendChild(sectionsView);
  galleryContainer.appendChild(yearsView);
  galleryContainer.appendChild(photosView);

  // Lightbox elements & state
  let currentImages = [];
  let currentIndex = 0;

  // Create overlay
  const overlay = document.createElement("div");
  overlay.id = "imageOverlay";
  overlay.className = "hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50";
  overlay.style.zIndex = "10000";

  const prevBtn = document.createElement("button");
  prevBtn.id = "prevBtn";
  prevBtn.className = "absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold focus:outline-none";
  prevBtn.innerHTML = "&lt;";

  const nextBtn = document.createElement("button");
  nextBtn.id = "nextBtn";
  nextBtn.className = "absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold focus:outline-none";
  nextBtn.innerHTML = "&gt;";

  const overlayImg = document.createElement("img");
  overlayImg.id = "zoomedImage";
  overlayImg.className = "max-h-full max-w-full object-contain rounded shadow-lg";

  overlay.appendChild(prevBtn);
  overlay.appendChild(overlayImg);
  overlay.appendChild(nextBtn);
  document.body.appendChild(overlay);

  function openOverlay(images, index) {
    currentImages = images;
    currentIndex = index;
    overlay.classList.remove("hidden");
    overlayImg.src = currentImages[currentIndex];
  }

  function closeOverlay() {
    overlay.classList.add("hidden");
    overlayImg.src = "";
  }

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    overlayImg.src = currentImages[currentIndex];
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentImages.length;
    overlayImg.src = currentImages[currentIndex];
  });

  // Close overlay when clicking outside image or hitting ESC
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeOverlay();
  });
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("hidden")) {
      if (e.key === "Escape") closeOverlay();
      else if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        overlayImg.src = currentImages[currentIndex];
      } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % currentImages.length;
        overlayImg.src = currentImages[currentIndex];
      }
    }
  });

  // Build sections, years, photos with event handlers

  Object.entries(galleryData).forEach(([section, years]) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className =
      "group relative cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.3] transition duration-200 w-48 h-48 flex flex-col justify-center items-center flex-shrink-0";

    const firstYear = Object.keys(years)[0];
    const firstImgSrc = years[firstYear][0];

    sectionDiv.innerHTML = `
      <img src="${firstImgSrc}" alt="${section}" class="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-75 transition duration-300 group-hover:blur-0 group-hover:brightness-100"
/>
      <div class="relative z-10 text-xl font-semibold text-blue-700 bg-white bg-opacity-70 py-2 px-4 rounded">
        ${section}
      </div>
    `;

    sectionDiv.addEventListener("click", () => {
      sectionsView.classList.add("hidden");
      yearsView.classList.remove("hidden");
      photosView.classList.add("hidden");
      yearsView.innerHTML = "";

      const backBtn = document.createElement("button");
      backBtn.textContent = "← Back to select Sections";
      backBtn.className =
        "mb-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition mx-auto block";
      backBtn.addEventListener("click", () => {
        yearsView.classList.add("hidden");
        photosView.classList.add("hidden");
        sectionsView.classList.remove("hidden");
      });
      yearsView.appendChild(backBtn);

      Object.entries(years).forEach(([year, images]) => {
        const yearDiv = document.createElement("div");
        yearDiv.className =
          "relative rounded-lg cursor-pointer overflow-hidden inline-block mr-6";

        yearDiv.innerHTML = `
          <img src="${images[0]}" alt="${section} ${year}"
            class="w-48 h-32 object-cover rounded-lg filter blur-sm brightness-75 transition duration-300 hover:brightness-100 hover:blur-0" />
          <div class="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow">${year}</div>
        `;

        yearDiv.addEventListener("click", () => {
          yearsView.classList.add("hidden");
          photosView.classList.remove("hidden");
          photosView.innerHTML = "";

          const backYearBtn = document.createElement("button");
          backYearBtn.textContent = "← Back to select Years";
          backYearBtn.className =
            "mb-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition mx-auto block";
          backYearBtn.addEventListener("click", () => {
            photosView.classList.add("hidden");
            yearsView.classList.remove("hidden");
          });
          photosView.appendChild(backYearBtn);

          const photoGrid = document.createElement("div");
          photoGrid.className = "grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto";

          images.forEach((src, index) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = `${section} ${year}`;
            img.className =
              "w-full h-48 object-cover rounded-lg transition-transform hover:scale-105 cursor-pointer";

            img.addEventListener("click", () => {
              openOverlay(images, index);
            });

            photoGrid.appendChild(img);
          });

          photosView.appendChild(photoGrid);
        });

        yearsView.appendChild(yearDiv);
      });
    });

    sectionsView.appendChild(sectionDiv);
  });
});
