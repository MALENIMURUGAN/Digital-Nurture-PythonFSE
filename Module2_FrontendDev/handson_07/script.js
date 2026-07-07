document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const modeLabel = document.getElementById("modeLabel");

    // Interrogate local storage environment configurations instantly on launch
    const savedThemeConfig = localStorage.getItem("workspace-theme");

    // Apply the saved preference immediately if it exists
    if (savedThemeConfig === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        modeLabel.textContent = "Dark Mode Active";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        modeLabel.textContent = "Light Mode Active";
    }

    // Toggle click observer implementation
    themeToggleBtn.addEventListener("click", () => {
        // Query current viewport data matrix attribute state
        const currentActiveTheme = document.documentElement.getAttribute("data-theme");

        if (currentActiveTheme === "dark") {
            // Flip viewport root settings to light rules mapping
            document.documentElement.setAttribute("data-theme", "light");
            modeLabel.textContent = "Light Mode Active";
            localStorage.setItem("workspace-theme", "light");
        } else {
            // Flip viewport root settings to dark rules mapping
            document.documentElement.setAttribute("data-theme", "dark");
            modeLabel.textContent = "Dark Mode Active";
            localStorage.setItem("workspace-theme", "dark");
        }
    });
});