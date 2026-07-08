import { courses } from "./data.js";

// -------------------------
// ES6+ Syntax Practice
// -------------------------

// Destructuring
courses.forEach(course => {
    const { name, credits } = course;
    console.log(`${name} - ${credits} credits`);
});

// map()
const formattedCourses = courses.map(
    course => `${course.code} — ${course.name} (${course.credits} credits)`
);

console.log("Formatted Courses:");
console.log(formattedCourses);

// filter()
const creditCourses = courses.filter(course => course.credits >= 4);

console.log("Courses with Credits >= 4:");
console.log(creditCourses);

console.log("Count:", creditCourses.length);

// reduce()
const totalCredits = courses.reduce(
    (total, course) => total + course.credits,
    0
);

console.log("Total Credits:", totalCredits);

// -------------------------
// DOM Elements
// -------------------------

const courseGrid = document.querySelector(".course-grid");
const totalCreditsText = document.getElementById("total-credits");
const searchInput = document.getElementById("search-courses");
const sortButton = document.getElementById("sort-btn");
const selectedCourse = document.getElementById("selected-course");

// -------------------------
// Render Function
// -------------------------

const renderCourses = (courseArray) => {

    courseGrid.innerHTML = "";

    courseArray.forEach(course => {

        const article = document.createElement("article");

        article.className = "course-card";

        article.dataset.id = course.id;

        article.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Code:</strong> ${course.code}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
        `;

        courseGrid.appendChild(article);

    });

    totalCreditsText.textContent =
        `Total Credits Enrolled: ${totalCredits}`;

};

// Initial Render
renderCourses(courses);

// -------------------------
// Search
// -------------------------

searchInput.addEventListener("input", (event) => {

    const keyword = event.target.value.toLowerCase();

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(keyword)
    );

    renderCourses(filteredCourses);

});

// -------------------------
// Sort
// -------------------------

sortButton.addEventListener("click", () => {

    const sortedCourses = [...courses].sort(
        (a, b) => b.credits - a.credits
    );

    renderCourses(sortedCourses);

});

// -------------------------
// Event Delegation
// -------------------------

courseGrid.addEventListener("click", (event) => {

    const card = event.target.closest(".course-card");

    if (!card) return;

    const courseId = Number(card.dataset.id);

    const course = courses.find(c => c.id === courseId);

    selectedCourse.textContent =
        `Selected Course: ${course.name} | Grade: ${course.grade}`;

    // Handbook allows alert OR updating a div
    // alert(`${course.name} - Grade: ${course.grade}`);

});