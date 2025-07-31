document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("curriculum-container");
  const searchBox = document.getElementById("searchBox");
  // const expandAllBtn = document.getElementById("expandAll");
  // const collapseAllBtn = document.getElementById("collapseAll");

  const curriculum = window.curriculumData || {};

  const state = {
    panels: [],          // For all topic panels
    subjectContainers: [] // For class-wise subject grids
  };

  function renderCurriculum(filterText = "") {
    container.innerHTML = "";
    state.panels = [];
    state.subjectContainers = [];

    const isFiltering = filterText.trim() !== "";

    Object.entries(curriculum).forEach(([className, subjects]) => {
      let classHasMatch = false;

      const classWrapper = document.createElement("div");
      classWrapper.className = "mb-6";

      const classBtn = document.createElement("button");
      classBtn.textContent = className;
      classBtn.className = "w-full text-left bg-blue-200 px-4 py-2 font-bold rounded hover:bg-blue-400";

      const subjectContainer = document.createElement("div");
      subjectContainer.className = "mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4";

      Object.entries(subjects).forEach(([subject, topics]) => {
        const match = subject.toLowerCase().includes(filterText) || topics.some(t => t.toLowerCase().includes(filterText));
        if (isFiltering && !match) return;

        classHasMatch = true;

        const subjectWrapper = document.createElement("div");

        const subjectBtn = document.createElement("button");
        subjectBtn.textContent = subject;
        subjectBtn.className = "w-full bg-gray-100 px-3 py-2 rounded shadow font-semibold text-left hover:bg-red-200";

        const panel = document.createElement("div");
        panel.className = "hidden mt-1 p-2 bg-white border rounded text-sm panel";

        const ul = document.createElement("ul");


//  topics.forEach(topic => {
//   const li = document.createElement("li");

//   // Highlighting logic
//   const regex = new RegExp(`(${filterText})`, "gi"); // Global, case-insensitive match
//   let highlighted = topic.replace(regex, `<mark>$1</mark>`); // Wrap match with <mark>

//   if (topic.includes(":")) {
//     const [heading, rest] = topic.split(":", 2);
//     const highlightedRest = rest.replace(regex, `<mark>$1</mark>`);
//     li.innerHTML = `<strong class="text-blue-800">${heading.trim()}:</strong>${highlightedRest}`;
//   } else {
//     li.innerHTML = highlighted;
//   }

//   ul.appendChild(li);
// });

topics.forEach(topic => {
  const li = document.createElement("li");
  const regex = new RegExp(`(${filterText})`, "gi");

  if (topic.includes(":")) {
    const [headingRaw, ...restParts] = topic.split(":");
    const bodyRaw = restParts.join(":"); // Rejoin in case colon appears inside <a> or later

    const highlightedHeading = headingRaw.replace(regex, "<mark>$1</mark>");

    // If there's an anchor tag in body
    if (bodyRaw.includes("<a")) {
      // Safely extract anchor HTML using regex
      const anchorRegex = /<a[\s\S]*?<\/a>/i;
      const anchorMatch = bodyRaw.match(anchorRegex);
      const anchor = anchorMatch ? anchorMatch[0] : "";

      // Split safely before and after anchor
      const [beforeLink, afterLink] = bodyRaw.split(anchor);

      const highlightedBefore = beforeLink.replace(regex, "<mark>$1</mark>");
      const highlightedAfter = afterLink.replace(regex, "<mark>$1</mark>");

      li.innerHTML = `<strong class="text-blue-800">${highlightedHeading.trim()}:</strong>${highlightedBefore}${anchor}${highlightedAfter}`;
    } else {
      // No anchor, highlight entire body
      const highlightedBody = bodyRaw.replace(regex, "<mark>$1</mark>");
      li.innerHTML = `<strong class="text-blue-800">${highlightedHeading.trim()}:</strong>${highlightedBody}`;
    }
  } else {
    // Entire line is a topic (no colon)
    li.innerHTML = topic.includes("<a") ? topic : topic.replace(regex, "<mark>$1</mark>");
  }

  ul.appendChild(li);
});




        panel.appendChild(ul);
        state.panels.push(panel); // save for Expand/Collapse All
        subjectBtn.addEventListener("click", () => {
          // Close others in same subjectContainer
          subjectContainer.querySelectorAll(".panel").forEach(p => {
            if (p !== panel) p.classList.add("hidden");
          });
          panel.classList.toggle("hidden");
        });

                // Auto-expand matching panel if filtering and match found
        if (isFiltering && match) {
          panel.classList.remove("hidden");  // Expand this panel
        } else {
          panel.classList.add("hidden");     // Keep others collapsed
        }


        subjectWrapper.appendChild(subjectBtn);
        subjectWrapper.appendChild(panel);
        subjectContainer.appendChild(subjectWrapper);
      });

      // Only add class if there's at least 1 subject match
      if (!isFiltering || classHasMatch) {
        if (isFiltering) subjectContainer.classList.remove("hidden");
        else subjectContainer.classList.add("hidden");

        classBtn.addEventListener("click", () => {
          subjectContainer.classList.toggle("hidden");
        });

        classWrapper.appendChild(classBtn);
        classWrapper.appendChild(subjectContainer);
        container.appendChild(classWrapper);

        state.subjectContainers.push(subjectContainer);
      }
    });

    // Expand classes if searching
    if (isFiltering) {
      state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
    }
  }

  // Initial Render
  renderCurriculum();

  // 🔍 Search box input handler
  function handleSearch() {
    const searchValue = searchBox.value.trim().toLowerCase();
    renderCurriculum(searchValue);
  }

  searchBox.addEventListener("input", handleSearch);

  // 🔍 Trigger search on Enter key
  searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });

//   // ⬇ Expand All
//   expandAllBtn.addEventListener("click", () => {
//     // Show all class containers
//     state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
//     // Expand all subject panels
//     state.panels.forEach(panel => panel.classList.remove("hidden"));
//   });

//   // ⬆ Collapse All
//   collapseAllBtn.addEventListener("click", () => {
//     // Hide all subject panels
//     state.panels.forEach(panel => panel.classList.add("hidden"));
//     // Collapse class containers
//     state.subjectContainers.forEach(sc => sc.classList.add("hidden"));
//   });
// });



const toggleAllBtn = document.getElementById("toggleAll");
const toggleClassesBtn = document.getElementById("toggleClasses");

let allExpanded = false;
let classesShown = false;

// Toggle Expand/Collapse All (Subjects + Panels)
toggleAllBtn.addEventListener("click", () => {
  if (allExpanded) {
    // Collapse all
    state.panels.forEach(panel => panel.classList.add("hidden"));
    state.subjectContainers.forEach(sc => sc.classList.add("hidden"));
    toggleAllBtn.textContent = "Expand All";
  } else {
    // Expand all
    state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
    state.panels.forEach(panel => panel.classList.remove("hidden"));
    toggleAllBtn.textContent = "Collapse All";
  }
  allExpanded = !allExpanded;
});

// Toggle only class names (not inner subject content)
toggleClassesBtn.addEventListener("click", () => {
  if (classesShown) {
    state.subjectContainers.forEach(sc => sc.classList.add("hidden"));
    toggleClassesBtn.textContent = "Show Courses";
  } else {
    state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
    toggleClassesBtn.textContent = "Hide Courses";
  }
  classesShown = !classesShown;
});


});