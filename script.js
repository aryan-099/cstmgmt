document.addEventListener("DOMContentLoaded", function () {
    // Highlight active navigation link
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Dashboard button alert (modify as needed)
    document.getElementById("dashboardBtn").addEventListener("click", function () {
        alert("Dashboard feature coming soon!");
    });

    // New Project Modal Handling
    const modal = document.getElementById("projectModal");
    const newProjectBtn = document.getElementById("newProjectBtn");
    const closeModal = document.querySelector(".modal .close");

    newProjectBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Form Submission Handling
    document.getElementById("newProjectForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Simulate form processing
        const notification = document.getElementById("notification");
        notification.style.display = "block";
        setTimeout(() => notification.style.display = "none", 3000);
        
        modal.style.display = "none";
        this.reset(); // Reset form fields
    });

    // Animate progress bar
    const progressBar = document.querySelector(".progress-bar");
    if (progressBar) {
        progressBar.style.width = "75%";
    }
});
