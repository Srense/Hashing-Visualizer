# Hashing-Visualizer
A dynamic and interactive web-based application that demonstrates and compares different hashing techniques, such as Chaining, Linear Probing, and Quadratic Probing, with real-time visualization. This project helps users understand how data is stored and handled in hash tables under various collision resolution strategies.

Features
Real-Time Hash Table Visualization:

Displays the state of the hash table after every insertion.
Clearly shows how collisions are handled with different techniques.
Interactive User Interface:

Users can input values to be hashed and select a collision resolution method.
Hash table updates dynamically based on user input.
Collision Metrics:

Tracks and displays the number of collisions for each technique.
Shows the load factor and the number of filled slots.
Chart Visualization:

Displays a bar chart comparing the slot utilization for each hashing technique.
Real-time updates with every value inserted.
Descriptions of Hashing Techniques:

Provides detailed explanations of the selected hashing method, helping users understand the differences between techniques.
Reset Functionality:

Clear all inputs and reset the hash table, statistics, and chart to start fresh.
Hashing Techniques Included
Chaining:

Uses linked lists to handle collisions.
Colliding values are stored in a list at the hashed index.
Linear Probing:

Resolves collisions by searching sequentially for the next available slot in the table.
Quadratic Probing:

Resolves collisions using a quadratic function to calculate the next slot.
Technologies Used
HTML: For structuring the interface.
CSS: For styling and ensuring a visually appealing layout.
JavaScript: For implementing the hashing logic and handling user interactions.
Chart.js: For creating dynamic bar charts to visualize the hash table's performance.
Getting Started
Prerequisites
A modern web browser (e.g., Chrome, Firefox, Edge).
No additional dependencies or server setup required—it's a fully client-side application.
Installation
Clone this repository:
bash
Copy code
git clone https://github.com/your-username/hashing-visualizer.git
Navigate to the project directory:
bash
Copy code
cd hashing-visualizer
Open index.html in your web browser.
Usage
Enter a value into the input field.
Select a hashing technique from the dropdown menu: Chaining, Linear Probing, or Quadratic Probing.
Click the Insert button to add the value to the hash table.
Observe:
The updated hash table with inserted values.
The number of collisions and load factor in the statistics section.
The bar chart showing slot utilization for the selected technique.
To start over, click the Reset Table button.
Demo
Add a demo link here (if hosted on GitHub Pages, Vercel, or Netlify): View Live Demo

File Structure
bash
Copy code
.
├── index.html         # Main HTML file with structure and layout
├── styles.css         # CSS file for styling the interface
├── scripts.js         # JavaScript file for logic and interactivity
└── README.md          # Project description and documentation
Screenshots
![image](https://github.com/user-attachments/assets/59470817-c09d-4147-ae99-ab2c4aef1ae2)
![image](https://github.com/user-attachments/assets/3d042c75-7612-4838-b0c9-9ffad3344610)
![image](https://github.com/user-attachments/assets/5b71e6a5-4f9a-4add-b7d3-8b05a920f5ae)


