document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("curriculum-container");
  const searchBox = document.getElementById("searchBox");
  const expandAllBtn = document.getElementById("expandAll");
  const collapseAllBtn = document.getElementById("collapseAll");

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
      subjectContainer.className = "mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";

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
        topics.forEach(topic => {
          const li = document.createElement("li");
          if (topic.includes(":")) {
  const [heading, rest] = topic.split(":", 2);
  li.innerHTML = `<strong class="text-blue-800">${heading.trim()}:</strong>${rest}`;
} else {
  li.textContent = topic;
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

  // ⬇ Expand All
  expandAllBtn.addEventListener("click", () => {
    // Show all class containers
    state.subjectContainers.forEach(sc => sc.classList.remove("hidden"));
    // Expand all subject panels
    state.panels.forEach(panel => panel.classList.remove("hidden"));
  });

  // ⬆ Collapse All
  collapseAllBtn.addEventListener("click", () => {
    // Hide all subject panels
    state.panels.forEach(panel => panel.classList.add("hidden"));
    // Collapse class containers
    state.subjectContainers.forEach(sc => sc.classList.add("hidden"));
  });
});
