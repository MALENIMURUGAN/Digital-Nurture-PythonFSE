// Incoming raw payload string mapping simulation data structures
const inboundJsonStringStream = `[
    {"id": 101, "name": "Aravind Swamy", "attendance": 88, "eligible": true},
    {"id": 102, "name": "Bhavana Rao", "attendance": 64, "eligible": false},
    {"id": 103, "name": "Maleni Murugan", "attendance": 95, "eligible": true},
    {"id": 104, "name": "Chetan Kumar", "attendance": 72, "eligible": true}
]`;

document.addEventListener("DOMContentLoaded", () => {
    const processJsonBtn = document.getElementById("processJsonBtn");
    const rawJsonDisplay = document.getElementById("rawJsonDisplay");
    const processedJsonDisplay = document.getElementById("processedJsonDisplay");

    processJsonBtn.addEventListener("click", () => {
        // Output raw inbound stream straight to interface frame
        rawJsonDisplay.textContent = inboundJsonStringStream;

        try {
            // Task: Parse string sequence matrix maps into active memory objects
            const parsedStudentCollection = JSON.parse(inboundJsonStringStream);

            // Manipulation Task: Filter to show only highly compliant records (Attendance > 75)
            const compliantStudents = parsedStudentCollection.filter(student => student.attendance > 75);

            // Re-serialization Task: Convert clean models back into elegant JSON lines
            const filteredOutboundPayload = JSON.stringify(compliantStudents, null, 4);

            // Render output payload back inside display blocks
            processedJsonDisplay.textContent = filteredOutboundPayload;

        } catch (error) {
            console.error("Syntax Validation Parsing Fail Event:", error);
            processedJsonDisplay.textContent = "❌ Error: Failed to execute system data string operations.";
        }
    });
});