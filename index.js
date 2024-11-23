const tableSize = 10; // Size of the hash table
let hashTable = new Array(tableSize).fill(null);
let collisionCount = 0;

document.getElementById('insertBtn').addEventListener('click', insertValue);
document.getElementById('resetBtn').addEventListener('click', resetTable);
document.getElementById('hashingMethod').addEventListener('change', updateDescription);

function hashCode(value) {
    return value.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % tableSize;
}

function insertValue() {
    const value = document.getElementById('inputValue').value.trim();
    const method = document.getElementById('hashingMethod').value;

    if (value) {
        const hashIndex = hashCode(value);
        let index = hashIndex;

        if (method === "chaining") {
            if (hashTable[index] === null) {
                hashTable[index] = [];
            }
            if (!hashTable[index].includes(value)) {
                hashTable[index].push(value);
            } else {
                alert("Value already exists in the chain!");
            }
        } else if (method === "linearProbing") {
            while (hashTable[index] !== null) {
                index = (index + 1) % tableSize; // Move to the next slot
                collisionCount++;
            }
            hashTable[index] = value;
        } else if (method === "quadraticProbing") {
            let i = 1;
            while (hashTable[index] !== null) {
                index = (hashIndex + i * i) % tableSize; // Quadratic probing
                i++;
                collisionCount++;
            }
            hashTable[index] = value;
        }

        updateHashTable();
        updateStats();
        document.getElementById('inputValue').value = ''; // Clear input
    }
}

function updateHashTable() {
    const tbody = document.querySelector('#hashTableContainer tbody');
    tbody.innerHTML = ''; // Clear existing rows

    hashTable.forEach((slot, index) => {
        const row = document.createElement('tr');
        const cellIndex = document.createElement('td');
        const cellValue = document.createElement('td');

        cellIndex.textContent = index;
        cellValue.textContent = Array.isArray(slot) ? slot.join(', ') : slot !== null ? slot : 'Empty';

        // Highlight cells with collisions for linear and quadratic probing
        if (collisionCount > 0 && (method === "linearProbing" || method === "quadraticProbing")) {
            if (index === hashCode(value)) {
                cellValue.classList.add('highlight'); // Highlight initial index on collision
            }
        }

        row.appendChild(cellIndex);
        row.appendChild(cellValue);
        tbody.appendChild(row);
    });
}

function updateStats() {
    const filledSlots = hashTable.filter(slot => slot !== null && !(Array.isArray(slot) && slot.length === 0)).length;
    const loadFactor = filledSlots / tableSize;

    document.getElementById('collisionCount').textContent = collisionCount;
    document.getElementById('loadFactor').textContent = loadFactor.toFixed(2);
    document.getElementById('filledSlots').textContent = filledSlots;
}

function resetTable() {
    hashTable.fill(null);
    collisionCount = 0;
    updateHashTable();
    updateStats();
}

function updateDescription() {
    const method = document.getElementById('hashingMethod').value;
    let description = "";

    if (method === "chaining") {
        description = "Chaining uses an array of linked lists. When a collision occurs, new values are added to the list at the respective index.";
    } else if (method === "linearProbing") {
        description = "Linear Probing looks for the next empty slot in the array when a collision occurs.";
    } else if (method === "quadraticProbing") {
        description = "Quadratic Probing also looks for an empty slot but does so using a quadratic formula to determine the next slot to check.";
    }

    document.getElementById('description').textContent = description;
}
