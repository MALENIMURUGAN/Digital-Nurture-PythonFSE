// Task data matrix representing student course achievements
const academicRecords = [
    { code: "CS101", name: "Data Structures & Algorithms", marks: 85 },
    { code: "CS102", name: "Database Management Systems", marks: 42 },
    { code: "CS103", name: "Web Architecture Foundations", marks: 78 },
    { code: "CS104", name: "Computer Architecture", marks: 92 }
];

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#gradesTable tbody");
    let totalMarks = 0;

    // Dynamically iterate over records array to populate elements
    academicRecords.forEach(course => {
        totalMarks += course.marks;
        const row = document.createElement("tr");

        // Determine badge classification pass/fail limits
        const isPass = course.marks >= 50;
        const statusBadge = `<span class="badge ${isPass ? 'badge-pass' : 'badge-fail'}">${isPass ? 'PASS' : 'FAIL'}</span>`;

        row.innerHTML = `
            <td><strong>${course.code}</strong></td>
            <td>${course.name}</td>
            <td>${course.marks}</td>
            <td>${statusBadge}</td>
        `;
        tableBody.appendChild(row);
    });

    // Compute metrics
    const average = totalMarks / academicRecords.length;
    document.getElementById("avgMarks").textContent = average.toFixed(1);
    
    const finalResultElement = document.getElementById("finalResult");
    if (average >= 50) {
        finalResultElement.textContent = "PASSED";
        finalResultElement.style.color = "#166534";
    } else {
        finalResultElement.textContent = "FAILED";
        finalResultElement.style.color = "#991b1b";
    }
});