document.addEventListener("DOMContentLoaded", () => {
    const fetchUsersBtn = document.getElementById("fetchUsersBtn");
    const loadingIndicator = document.getElementById("loadingIndicator");
    const userGrid = document.getElementById("userGrid");

    // Async function containing pipeline operations
    async function populateUserProfilesDirectory() {
        // Toggle loader states and clear current layout grid space
        loadingIndicator.style.display = "block";
        userGrid.innerHTML = "";

        try {
            // Await connection endpoint query execution
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            
            // Check HTTP execution context validity parameters
            if (!response.ok) {
                throw new Error(`API Endpoint Error. Status Flag: ${response.status}`);
            }

            // Extract application data matrix maps
            const usersList = await response.json();

            // Dynamic layout construction execution block
            usersList.forEach(user => {
                const card = document.createElement("div");
                card.className = "profile-card";

                card.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p class="user-email">✉️ ${user.email}</p>
                    <p>📍 ${user.address.suite}, ${user.address.street}, ${user.address.city}</p>
                    <span class="company-tag">🏢 ${user.company.name}</span>
                `;
                userGrid.appendChild(card);
            });

        } catch (error) {
            console.error("Pipeline Exception Captured:", error);
            userGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; color: #ef4444; font-weight: bold; padding: 2rem;">
                    ❌ Failed to retrieve user repository data logs. Check connections or pipeline endpoints.
                </div>
            `;
        } finally {
            // Ensure runtime indicators toggle off
            loadingIndicator.style.display = "none";
        }
    }

    // Attach event runner to action trigger layout components
    fetchUsersBtn.addEventListener("click", populateUserProfilesDirectory);
});