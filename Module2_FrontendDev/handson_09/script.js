// Hands-On 9
// Accessibility & Keyboard Navigation

const searchInput = document.getElementById("search");
const resultCount = document.getElementById("resultCount");
const exploreBtn = document.getElementById("exploreBtn");

const courseCards = document.querySelectorAll(".course-card");

// Explore Button
exploreBtn.addEventListener("click", () => {
    alert("Welcome! Browse the available courses below.");
});

// Search Functionality
searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();
    let visibleCount = 0;

    courseCards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {

            card.style.display = "block";
            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    resultCount.textContent = visibleCount + " Courses Found";

});

// Mouse Click
courseCards.forEach(card => {

    card.addEventListener("click", () => {

        const course = card.querySelector("h3").textContent;

        alert("Selected Course: " + course);

    });

});

// Keyboard Accessibility (Enter Key)
courseCards.forEach(card => {

    card.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            card.click();

        }

    });

});

// View Course Buttons
const buttons = document.querySelectorAll(".course-card button");

buttons.forEach(button => {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        const course =
            this.parentElement.querySelector("h3").textContent;

        alert("Viewing: " + course);

    });

});

console.log("Hands-On 9 Loaded Successfully");