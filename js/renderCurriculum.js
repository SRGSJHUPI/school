// --------------------Without section added in chapter titles--------------------



//document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("curriculum-container");
//   const searchBox = document.getElementById("searchBox");
//   // const expandAllBtn = document.getElementById("expandAll");
//   // const collapseAllBtn = document.getElementById("collapseAll");

//   const curriculum = window.curriculumData || {};

//   const state = {
//     panels: [],          // For all topic panels
//     subjectContainers: [] // For class-wise subject grids
//   };

//   function renderCurriculum(filterText = "") {
//     container.innerHTML = "";
//     state.panels = [];
//     state.subjectContainers = [];

//     const isFiltering = filterText.trim() !== "";

//     Object.entries(curriculum).forEach(([className, subjects]) => {
//       let classHasMatch = false;

//       const classWrapper = document.createElement("div");
//       classWrapper.className = "mb-6";

//       const classBtn = document.createElement("button");
//       classBtn.textContent = className;
//       classBtn.className = "w-full text-left bg-blue-200 px-4 py-2 font-bold rounded hover:bg-blue-400";

//       const subjectContainer = document.createElement("div");
//       subjectContainer.className = "mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4";

//       Object.entries(subjects).forEach(([subject, topics]) => {
//         const match = subject.toLowerCase().includes(filterText) || topics.some(t => t.toLowerCase().includes(filterText));
//         if (isFiltering && !match) return;

//         classHasMatch = true;

//         const subjectWrapper = document.createElement("div");

//         const subjectBtn = document.createElement("button");
//         subjectBtn.textContent = subject;
//         subjectBtn.className = "w-full bg-gray-100 px-3 py-2 rounded shadow font-semibold text-left hover:bg-red-200";

//         const panel = document.createElement("div");
//         panel.className = "hidden mt-1 p-2 bg-white border rounded text-sm panel";

//         const ul = document.createElement("ul");


// //  topics.forEach(topic => {
// //   const li = document.createElement("li");

// //   // Highlighting logic
// //   const regex = new RegExp(`(${filterText})`, "gi"); // Global, case-insensitive match
// //   let highlighted = topic.replace(regex, `<mark>$1</mark>`); // Wrap match with <mark>

// //   if (topic.includes(":")) {
// //     const [heading, rest] = topic.split(":", 2);
// //     const highlightedRest = rest.replace(regex, `<mark>$1</mark>`);
// //     li.innerHTML = `<strong class="text-blue-800">${heading.trim()}:</strong>${highlightedRest}`;
// //   } else {
// //     li.innerHTML = highlighted;
// //   }

// //   ul.appendChild(li);
// // });

// topics.forEach(topic => {
//   const li = document.createElement("li");
//   const regex = new RegExp(`(${filterText})`, "gi");

//   if (topic.includes(":")) {
//     const [headingRaw, ...restParts] = topic.split(":");
//     const bodyRaw = restParts.join(":"); // Rejoin in case colon appears inside <a> or later

//     const highlightedHeading = headingRaw.replace(regex, "<mark>$1</mark>");

//     // If there's an anchor tag in body
//     if (bodyRaw.includes("<a")) {
//       // Safely extract anchor HTML using regex
//       const anchorRegex = /<a[\s\S]*?<\/a>/i;
//       const anchorMatch = bodyRaw.match(anchorRegex);
//       const anchor = anchorMatch ? anchorMatch[0] : "";

//       // Split safely before and after anchor
//       const [beforeLink, afterLink] = bodyRaw.split(anchor);

//       const highlightedBefore = beforeLink.replace(regex, "<mark>$1</mark>");
//       const highlightedAfter = afterLink.replace(regex, "<mark>$1</mark>");

//       li.innerHTML = `<strong class="text-blue-800">${highlightedHeading.trim()}:</strong>${highlightedBefore}${anchor}${highlightedAfter}`;
//     } else {
//       // No anchor, highlight entire body
//       const highlightedBody = bodyRaw.replace(regex, "<mark>$1</mark>");
//       li.innerHTML = `<strong class="text-blue-800">${highlightedHeading.trim()}:</strong>${highlightedBody}`;
//     }
//   } else {
//     // Entire line is a topic (no colon)
//     li.innerHTML = topic.includes("<a") ? topic : topic.replace(regex, "<mark>$1</mark>");
//   }

//   ul.appendChild(li);
// });




//         panel.appendChild(ul);
//         state.panels.push(panel); // save for Expand/Collapse All
//         subjectBtn.addEventListener("click", () => {
//           // Close others in same subjectContainer
//           subjectContainer.querySelectorAll(".panel").forEach(p => {
//             if (p !== panel) p.classList.add("hidden");
//           });
//           panel.classList.toggle("hidden");
//         });

//                 // Auto-expand matching panel if filtering and match found
//         if (isFiltering && match) {
//           panel.classList.remove("hidden");  // Expand this panel
//         } else {
//           panel.classList.add("hidden");     // Keep others collapsed
//         }


//         subjectWrapper.appendChild(subjectBtn);
//         subjectWrapper.appendChild(panel);
//         subjectContainer.appendChild(subjectWrapper);
//       });

//       // Only add class if there's at least 1 subject match
//       if (!isFiltering || classHasMatch) {
//         if (isFiltering) subjectContainer.classList.remove("hidden");
//         else subjectContainer.classList.add("hidden");

//         classBtn.addEventListener("click", () => {
//           subjectContainer.classList.toggle("hidden");
//         });

//         classWrapper.appendChild(classBtn);
//         classWrapper.appendChild(subjectContainer);
//         container.appendChild(classWrapper);

//         state.subjectContainers.push(subjectContainer);
//       }
//     });

//     // Expand classes if searching
//     if (isFiltering) {
//       state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
//     }
//   }

//   // Initial Render
//   renderCurriculum();

//   // 🔍 Search box input handler
//   function handleSearch() {
//     const searchValue = searchBox.value.trim().toLowerCase();
//     renderCurriculum(searchValue);
//   }

//   searchBox.addEventListener("input", handleSearch);

//   // 🔍 Trigger search on Enter key
//   searchBox.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") handleSearch();
//   });
// // Expand/Collapse All and Toggle Classes Buttons
// const toggleAllBtn = document.getElementById("toggleAll");
// const toggleClassesBtn = document.getElementById("toggleClasses");

// let allExpanded = false;
// let classesShown = false;

// // Toggle Expand/Collapse All (Subjects + Panels)
// toggleAllBtn.addEventListener("click", () => {
//   if (allExpanded) {
//     // Collapse all
//     state.panels.forEach(panel => panel.classList.add("hidden"));
//     state.subjectContainers.forEach(sc => sc.classList.add("hidden"));
//     toggleAllBtn.textContent = "⬇ Expand All";
//   } else {
//     // Expand all
//     state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
//     state.panels.forEach(panel => panel.classList.remove("hidden"));
//     toggleAllBtn.textContent = "⬆ Collapse All";
//   }
//   allExpanded = !allExpanded;
// });

// // Toggle only class names (not inner subject content)
// toggleClassesBtn.addEventListener("click", () => {
//   if (classesShown) {
//     state.subjectContainers.forEach(sc => sc.classList.add("hidden"));
//     toggleClassesBtn.textContent = "Show Courses";
//   } else {
//     state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
//     toggleClassesBtn.textContent = "Hide Courses";
//   }
//   classesShown = !classesShown;
// });


// });

















// -----------------------------with section added in chapter titles----------------------------------------


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
        panel.className = "panel chapter-panel hidden mt-1 p-2 bg-white border rounded text-sm ";

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

  // ✅ If topic is an object (means it has sub-sections)
  if (typeof topic === "object" && !Array.isArray(topic)) {
  Object.entries(topic).forEach(([sectionName, sectionContent]) => {
    const sectionBtn = document.createElement("button");
    sectionBtn.textContent = sectionName;
    sectionBtn.className = "w-full text-left bg-green-100 px-3 py-1 rounded mt-2 font-semibold text-green-800 hover:bg-green-200";

    const sectionPanel = document.createElement("div");
    sectionPanel.className = "section-panel hidden ml-4 mt-1 bg-green-50 p-2 rounded border border-green-200";

    const sectionUl = document.createElement("ul");

    // 🟢 Handle arrays of objects (like [{ "Airplane": [...] }, {...}])
    if (Array.isArray(sectionContent)) {
      sectionContent.forEach(subSection => {
        if (typeof subSection === "object") {
          Object.entries(subSection).forEach(([subName, items]) => {
            const subBtn = document.createElement("button");
            subBtn.textContent = subName;
            subBtn.className = "w-full text-left bg-green-50 px-3 py-1 rounded mt-2 font-medium text-green-700 hover:bg-green-100";

            const subPanel = document.createElement("div");
            subPanel.className = "hidden ml-4 mt-1 bg-green-100 p-2 rounded border border-green-200";

            const subUl = document.createElement("ul");
            items.forEach(i => {
              const subLi = document.createElement("li");
              subLi.textContent = i;
              subUl.appendChild(subLi);
            });

            subPanel.appendChild(subUl);

            subBtn.addEventListener("click", () => subPanel.classList.toggle("hidden"));

            sectionUl.appendChild(subBtn);
            sectionUl.appendChild(subPanel);
          });
        } else {
          const subLi = document.createElement("li");
          subLi.textContent = subSection;
          sectionUl.appendChild(subLi);
        }
      });
    } else {
      // 🟢 If it's just a normal array of strings
      sectionContent.forEach(item => {
        const subLi = document.createElement("li");
        subLi.textContent = item;
        sectionUl.appendChild(subLi);
      });
    }

    sectionPanel.appendChild(sectionUl);
    sectionBtn.addEventListener("click", () => sectionPanel.classList.toggle("hidden"));

    li.appendChild(sectionBtn);
    li.appendChild(sectionPanel);
  });
}

  
  else {
    // ✅ Your existing topic highlighting logic for plain text
    const regex = new RegExp(`(${filterText})`, "gi");
    if (topic.includes(":")) {
      const [headingRaw, ...restParts] = topic.split(":");
      const bodyRaw = restParts.join(":");
      const highlightedHeading = headingRaw.replace(regex, "<mark>$1</mark>");
      const highlightedBody = bodyRaw.replace(regex, "<mark>$1</mark>");
      li.innerHTML = `<strong class="text-blue-800">${highlightedHeading.trim()}:</strong>${highlightedBody}`;
    } else {
      li.innerHTML = topic.replace(regex, "<mark>$1</mark>");
    }
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
// Expand/Collapse All and Toggle Classes Buttons
const toggleAllBtn = document.getElementById("toggleAll");
const toggleClassesBtn = document.getElementById("toggleClasses");
const toggleChaptersBtn = document.getElementById("toggleChapters");
const toggleSectionsBtn = document.getElementById("toggleSections");


let allExpanded = false;
let classesShown = false;

// Toggle Expand/Collapse All (Subjects + Panels)
toggleAllBtn.addEventListener("click", () => {
  if (allExpanded) {
    // collapse all
    state.panels.forEach(p => p.classList.add("hidden"));
    state.subjectContainers.forEach(sc => sc.classList.add("hidden"));
    document.querySelectorAll(".section-panel").forEach(sec => sec.classList.add("hidden"));
    document.querySelectorAll(".section-panel ul").forEach(ul => ul.classList.add("hidden"));

    // reset button labels and flags
    toggleAllBtn.textContent = "Expand All";
    toggleClassesBtn.textContent = "Show Courses";
    toggleChaptersBtn.textContent = "Show Chapters";
    toggleSectionsBtn.textContent = "Show Sections";
    classesShown = chaptersShown = sectionsShown = false;
  } else {
    // expand everything
    state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
    state.panels.forEach(p => p.classList.remove("hidden"));
    document.querySelectorAll(".section-panel").forEach(sec => sec.classList.remove("hidden"));
    document.querySelectorAll(".section-panel ul").forEach(ul => ul.classList.remove("hidden"));
    document.querySelectorAll(".section-panel div.hidden").forEach(el => {
    el.classList.remove("hidden");
         });


    // update button labels and flags
    toggleAllBtn.textContent = "Collapse All";
    toggleClassesBtn.textContent = "Hide Courses";
    toggleChaptersBtn.textContent = "Hide Chapters";
    toggleSectionsBtn.textContent = "Hide Sections";
    classesShown = true;
chaptersShown = true;
sectionsShown = true;
toggleClassesBtn.textContent = "Hide Courses";
toggleChaptersBtn.textContent = "Hide Chapters";
toggleSectionsBtn.textContent = "Hide Sections";

  }
  allExpanded = !allExpanded;
});




// Toggle only class names (not inner subject content)
toggleClassesBtn.addEventListener("click", () => {
  if (classesShown) {
    state.subjectContainers.forEach(sc => sc.classList.add("hidden"));
    toggleClassesBtn.textContent = "Show Courses";
    // reset all lower states
      chaptersShown = false;
      sectionsShown = false;
      toggleChaptersBtn.textContent = "Show Chapters";
      toggleSectionsBtn.textContent = "Show Sections";
      // Reset allExpanded flag and update Toggle All button label
     allExpanded = false;
     toggleAllBtn.textContent = "Expand All";


  } else {
    state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
    toggleClassesBtn.textContent = "Hide Courses";
  }
  classesShown = !classesShown;
});

let chaptersShown = false;
let sectionsShown = false;

// 🟦 Show Chapters (expand class + subjects + chapters, but not sections)
toggleChaptersBtn.addEventListener("click", () => {
  if (chaptersShown) {
    // hide only chapter-level panels
    document.querySelectorAll(".chapter-panel").forEach(p => p.classList.add("hidden"));
    toggleChaptersBtn.textContent = "Show Chapters";
    sectionsShown = false;
    // reset expand all if user hides chapters
  allExpanded = false;
  toggleAllBtn.textContent = "Expand All";
  // reset lower state
        sectionsShown = false;
        toggleSectionsBtn.textContent = "Show Sections";

  } else {
    // show courses and chapters
    state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
    document.querySelectorAll(".chapter-panel").forEach(p => p.classList.remove("hidden"));
    // keep sections (green) hidden
    document.querySelectorAll(".section-panel").forEach(sec => sec.classList.add("hidden"));
    toggleChaptersBtn.textContent = "Hide Chapters";
    // keep higher-level buttons synced
   toggleClassesBtn.textContent = "Hide Courses";
   classesShown = true;

  }
  chaptersShown = !chaptersShown;
});


// 🟩 Show Sections (expand till green section buttons, not inside)
toggleSectionsBtn.addEventListener("click", () => {
  if (sectionsShown) {
    // hide only sections
    document.querySelectorAll(".section-panel").forEach(sec => sec.classList.add("hidden"));
    toggleSectionsBtn.textContent = "Show Sections";
    chaptersShown = false;
      // 🔄 If user hides sections, make sure Expand All resets
  allExpanded = false;
  toggleAllBtn.textContent = "Expand All";

  } else {
    // show courses, chapters, and sections (but not inside section)
    state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
    document.querySelectorAll(".chapter-panel").forEach(p => p.classList.remove("hidden"));
    document.querySelectorAll(".section-panel").forEach(sec => sec.classList.remove("hidden"));
    toggleSectionsBtn.textContent = "Hide Sections";
    // keep other buttons synced
    toggleClassesBtn.textContent = "Hide Courses";
    toggleChaptersBtn.textContent = "Hide Chapters";
    classesShown = true;
    chaptersShown = true;

  }
  sectionsShown = !sectionsShown;
});




});