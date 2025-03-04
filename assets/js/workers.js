document.addEventListener('DOMContentLoaded', function() {
    const workerForm = document.getElementById('worker-form');
    
    // Load any existing workers from local storage
    loadWorkers();
    
    // Handle form submission
    workerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const role = document.getElementById('role').value;
        const experience = document.getElementById('experience').value;
        const rate = document.getElementById('rate').value;
        const contact = document.getElementById('contact').value;
        
        // Add worker to table
        addWorkerToTable(name, role, experience, rate, contact);
        
        // Save workers to local storage
        saveWorkers();
        
        // Reset form
        workerForm.reset();
    });
    
    // Delete worker when clicked (event delegation)
    const workersTable = document.querySelector('table');
    workersTable.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.closest('tr').remove();
            saveWorkers();
        }
    });
    
    // Function to add worker to table
    function addWorkerToTable(name, role, experience, rate, contact) {
        const table = document.querySelector('table');
        const newRow = document.createElement('tr');
        
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${role}</td>
            <td>${experience}</td>
            <td>$${rate}</td>
            <td>${contact}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        
        table.appendChild(newRow);
    }
    
    // Function to save workers to local storage
    function saveWorkers() {
        const workers = [];
        const rows = document.querySelectorAll('table tr:not(:first-child)');
        
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length >= 5) {
                const worker = {
                    name: cells[0].textContent,
                    role: cells[1].textContent,
                    experience: cells[2].textContent,
                    rate: cells[3].textContent.replace('$', ''),
                    contact: cells[4].textContent
                };
                workers.push(worker);
            }
        });
        
        localStorage.setItem('workers', JSON.stringify(workers));
    }
    
    // Function to load workers from local storage
    function loadWorkers() {
        const workers = JSON.parse(localStorage.getItem('workers')) || [];
        
        workers.forEach(worker => {
            addWorkerToTable(
                worker.name, 
                worker.role, 
                worker.experience, 
                worker.rate, 
                worker.contact
            );
        });
    }
});