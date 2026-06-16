// DOM Elements ko select kiya
const addStudentBtn = document.getElementById('add-student-btn');
const studentTableBody = document.getElementById('student-table-body');
const totalCountEl = document.getElementById('total-count');

// 1. Naya Student Add Karne Ka Logic
addStudentBtn.addEventListener('click', () => {
    const name = prompt("Enter student name:");
    const studentClass = prompt("Enter Class (e.g., Class 11):");

    if (name && studentClass) {
        // Automatic Roll No banana table ki length dekh kar
        const currentRows = studentTableBody.rows.length;
        const newRoll = `#10${currentRows + 1}`;

        // Naya Row create karna
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${newRoll}</td>
            <td>${name}</td>
            <td>${studentClass}</td>
            <td><button class="btn-delete" onclick="deleteStudent(this)">Delete</button></td>
        `;

        // Table mein row jodhna
        studentTableBody.appendChild(row);
        updateStudentCount();
    } else {
        alert("Required to enter name and class!");
    }
});

// 2. Student Delete Karne Ka Logic
function deleteStudent(button) {
    if (confirm("Are you sure you want to delete the record of this student?")) {
        // Button ke parent (td) ke parent (tr) ko remove karna
        const row = button.parentElement.parentElement;
        row.remove();
        updateStudentCount();
    }
}

// 3. Total Count automatically update karne ka function
function updateStudentCount() {
    const currentRows = studentTableBody.rows.length;
    totalCountEl.textContent = currentRows;
}
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let filter = searchInput.value.toLowerCase();

    let rows = document.querySelectorAll("#studentTable tr");

    rows.forEach((row, index) => {

        if (index === 0) return; // Header row skip

        let name = row.cells[0].textContent.toLowerCase();

        if (name.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});