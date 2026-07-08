import { courses } from "./data.js";

// -----------------------------
// DOM Elements
// -----------------------------

const courseGrid = document.querySelector(".course-grid");
const loading = document.getElementById("loading");

const notificationList = document.getElementById("notification-list");
const notificationLoading = document.getElementById("notification-loading");

const errorMessage = document.getElementById("error-message");
const retryButton = document.getElementById("retry-btn");

// -----------------------------
// Task 45
// Fetch User using Promise.then()
// -----------------------------

function fetchUser(id) {

    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => {
            console.log("Promise User:", user.name);
            return user;
        });

}

fetchUser(1);

// -----------------------------
// Task 46
// async / await
// -----------------------------

async function fetchUserAsync(id) {

    try {

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const user = await response.json();

        console.log("Async User:", user.name);

    } catch (error) {

        console.error(error);

    }

}

fetchUserAsync(1);

// -----------------------------
// Task 47
// Simulated API
// -----------------------------

function fetchAllCourses() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(courses);

        }, 1000);

    });

}

// -----------------------------
// Render Courses
// -----------------------------

function renderCourses(courseData) {

    courseGrid.innerHTML = "";

    courseData.forEach(course => {

        const article = document.createElement("article");

        article.className = "course-card";

        article.innerHTML = `
            <h3>${course.name}</h3>

            <p><strong>Code:</strong> ${course.code}</p>

            <p><strong>Credits:</strong> ${course.credits}</p>

            <p><strong>Grade:</strong> ${course.grade}</p>
        `;

        courseGrid.appendChild(article);

    });

}

// -----------------------------
// Task 48
// Loading Courses
// -----------------------------

async function loadCourses() {

    loading.style.display = "block";

    const data = await fetchAllCourses();

    loading.style.display = "none";

    renderCourses(data);

}

loadCourses();

// -----------------------------
// Task 49
// Promise.all()
// -----------------------------

Promise.all([

    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json()),

    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(res => res.json())

]).then(users => {

    console.log(users[0].name);

    console.log(users[1].name);

});

// -----------------------------
// Task 50
// Reusable Fetch Function
// -----------------------------

async function apiFetch(url) {

    const response = await fetch(url);

    if (!response.ok) {

        throw new Error("Unable to fetch data.");

    }

    return await response.json();

}

// -----------------------------
// Task 51 & 52
// Notifications
// -----------------------------

async function loadNotifications() {

    notificationLoading.style.display = "block";

    notificationList.innerHTML = "";

    errorMessage.textContent = "";

    retryButton.style.display = "none";

    try {

        const posts = await apiFetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        notificationLoading.style.display = "none";

        posts.forEach(post => {

            const card = document.createElement("div");

            card.className = "notification-card";

            card.innerHTML = `
                <h3>${post.title}</h3>

                <p>${post.body}</p>
            `;

            notificationList.appendChild(card);

        });

    } catch (error) {

        notificationLoading.style.display = "none";

        errorMessage.textContent =
            "Failed to load notifications.";

        retryButton.style.display = "inline-block";

    }

}

loadNotifications();

// -----------------------------
// Task 53
// Simulate 404
// -----------------------------

async function simulateError() {

    try {

        await apiFetch(
            "https://jsonplaceholder.typicode.com/nonexistent"
        );

    } catch (error) {

        console.log("404 Error Simulated");

    }

}

simulateError();

// -----------------------------
// Task 54
// Retry
// -----------------------------

retryButton.addEventListener("click", () => {

    loadNotifications();

});

// -----------------------------
// Task 55
// Axios CDN already added
// -----------------------------

// -----------------------------
// Task 56
// Axios Fetch
// -----------------------------

async function axiosFetch(url) {

    const response = await axios.get(url);

    return response.data;

}

// -----------------------------
// Task 57
// Axios Params
// -----------------------------

axios.get(

    "https://jsonplaceholder.typicode.com/posts",

    {

        params: {

            userId: 1

        }

    }

).then(response => {

    console.log("Axios User 1 Posts");

    console.log(response.data);

});

// -----------------------------
// Task 58
// Axios Interceptor
// -----------------------------

axios.interceptors.request.use(config => {

    console.log(`API call started: ${config.url}`);

    return config;

});

// Example Axios Call

axiosFetch(
    "https://jsonplaceholder.typicode.com/users"
).then(data => {

    console.log(data);

});

// -----------------------------
// Task 59
// Fetch vs Axios
// -----------------------------

/*

FETCH

1. Built into browsers.

2. Requires response.json().

3. Must manually check response.ok.


AXIOS

1. External library.

2. Automatically parses JSON.

3. Automatically throws errors for non-2xx responses.

*/