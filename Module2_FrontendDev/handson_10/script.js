// Catalog dataset array matrix lookup tables
const courseInventory = [
    { code: "CS101", title: "Data Structures & Algorithms", dept: "Computer Science" },
    { code: "CS102", title: "Database Management Systems", dept: "Computer Science" },
    { code: "EE204", title: "Digital Electronics Foundations", dept: "Electrical Eng" },
    { code: "MA301", title: "Discrete Mathematical Matrices", dept: "Mathematics" },
    { code: "CS105", title: "Web Application Frameworks", dept: "Computer Science" },
    { code: "ME112", title: "Applied Engineering Mechanics", dept: "Mechanical Eng" }
];

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("courseSearchInput");
    const catalogGrid = document.getElementById("courseCatalogGrid");
    const noResultsMsg = document.getElementById("noResultsMsg");

    // Master function responsible for compiling UI elements to screen
    function renderCatalogCards(filteredList) {
        // Clear active container markup tracks
        catalogGrid.innerHTML = "";

        // Evaluate search array volume boundaries
        if (filteredList.length === 0) {
            noResultsMsg.style.display = "block";
            return;
        }
        noResultsMsg.style.display = "none";

        // Inject passing objects back to grid nodes
        filteredList.forEach(course => {
            const card = document.createElement("div");
            card.className = "course-card";
            card.innerHTML = `
                <div class="course-code">${course.code}</div>
                <h3>${course.title}</h3>
                <div class="course-dept">🏢 ${course.dept}</div>
            `;
            catalogGrid.appendChild(card);
        });
    }

    // Attach dynamic real-time keystroke tracking events
    searchInput.addEventListener("input", (event) => {
        const queryToken = event.target.value.toLowerCase().trim();

        // Perform filter sequence parameters checking strings
        const filteredMatches = courseInventory.filter(course => {
            return course.title.toLowerCase().includes(queryToken) ||
                   course.code.toLowerCase().includes(queryToken) ||
                   course.dept.toLowerCase().includes(queryToken);
        });

        // Trigger viewport repaint configurations
        renderCatalogCards(filteredMatches);
    });

    // Run foundational compile layout step on complete launch runtime
    renderCatalogCards(courseInventory);
});