# Interactive Risk Matrix

This is an interactive risk matrix application that allows users to add, delete, and manage risks dynamically. The project is built using HTML, CSS, and JavaScript, with a clean separation of concerns for scalability and maintainability.

---

## Features
- **Add Risks**: Dynamically add new risks to the matrix.
- **Delete Risks**: Remove risks from the matrix.
- **Interactive Inputs**: Input fields for risk description, likelihood, and impact.
- **Responsive Design**: Works well on different screen sizes.

---

## Folder Structure

risk-matrix-project/
├── index.html # Main HTML file
├── css/ # Stylesheets
│ └── styles.css # CSS for styling the risk matrix
├── js/ # JavaScript files
│ └── script.js # JavaScript for dynamic functionality
└── assets/ # Optional folder for images, fonts, etc.

---

## Setup Instructions

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- (Optional) A code editor like [VS Code](https://code.visualstudio.com/).

### Steps
1. **Download or Clone the Project**:
   - Download the project as a ZIP file and extract it, or clone the repository using Git:
     ```bash
     git clone https://github.com/your-username/risk-matrix-project.git
     cd risk-matrix-project
     ```

2. **Open the Project**:
   - Open the `index.html` file in your browser to view the application.

3. **Run a Local Server (Optional)**:
   - If you're using VS Code, install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and click "Go Live" to serve the project locally.

---

## How to Use
1. **Add a Risk**:
   - Click the **"Add Risk"** button to add a new row to the matrix.
   - Fill in the risk description, likelihood, and impact using the input fields and dropdowns.

2. **Delete a Risk**:
   - Click the **"Delete"** button in the row you want to remove.

---

## Code Overview

### HTML (`index.html`)
- The main structure of the risk matrix is defined here.
- Links to the CSS and JavaScript files.

### CSS (`css/styles.css`)
- Styles for the table, buttons, inputs, and overall layout.

### JavaScript (`js/script.js`)
- Handles dynamic addition and deletion of rows.
- Adds event listeners for the **"Add Risk"** button and delete functionality.

---

## Future Enhancements
- Save data to **local storage** for persistence.
- Add **validation** for input fields.
- Integrate with a **backend** for data storage and retrieval.
- Add a **risk scoring system** based on likelihood and impact.

---

## Contributing
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a **pull request**.

---

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Author
[Viwe Teko](https://github.com/ViweTeko)

---

## Acknowledgments
- Inspired by risk management tools and matrices.
- Built with **HTML**, **CSS**, and **JavaScript**.