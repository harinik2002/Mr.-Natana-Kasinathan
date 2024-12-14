function openModal(section) {
  document.getElementById(section + 'Modal').style.display = "block";
  if (section === "books") {
    addSerialNumbers();
  }
}

// Close the modal based on section
function closeModal(section) {
  document.getElementById(section + 'Modal').style.display = "none";
}

// Function to add serial numbers to the book table
function addSerialNumbers() {
  const table = document.querySelector("#booksModal table tbody");
  const rows = table.querySelectorAll("tr");

  // Loop through each row and add the serial number
  rows.forEach((row, index) => {
    const serialCell = document.createElement("td");
    serialCell.style.border = "1px solid #ddd";
    serialCell.style.padding = "8px";
    serialCell.textContent = index + 1; // Add the serial number (index + 1)
    
    // Insert the serial number at the beginning of each row
    row.insertBefore(serialCell, row.firstChild);
  });
}
