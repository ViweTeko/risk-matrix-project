document.getElementById('addRow').addEventListener('click', function() {
    const table = document.getElementById('riskMatrix').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const risk = newRow.insertCell(0);
    const riskTake = newRow.insertCell(1);
    const risk2 = newRow.insertCell(2);
    const deleteRisk = newRow.insertCell(3);

    risk.innerHTML = '<input type="text" placeholder="Enter risk">';
    riskTake.innerHTML = `
        <select>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
    `;
    risk2.innerHTML = `
        <select>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
    `;
    deleteRisk.innerHTML = '<button class="delete-btn" onclick="deleteRow(this)">Delete</button>';
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}