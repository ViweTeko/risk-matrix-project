document.getElementById('addRow').addEventListener('click', function() {
    const table = document.getElementById('riskMatrix').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = '<input type="text" placeholder="Enter risk">';
    cell2.innerHTML = `
        <select>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
    `;
    cell3.innerHTML = `
        <select>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
    `;
    cell4.innerHTML = '<button class="delete-btn" onclick="deleteRow(this)">Delete</button>';
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}